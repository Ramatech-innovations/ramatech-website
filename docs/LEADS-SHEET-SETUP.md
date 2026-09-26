# Leads sheet setup (Google Sheets + Apps Script)

Every website lead is written to a Google Sheet owned by **info@ramatech.co.in** before the
internal email is sent. If either the sheet or the email succeeds, the visitor sees success.

Do all steps signed in as **info@ramatech.co.in**.

## 1. Create the sheet

1. Go to [sheets.new](https://sheets.new) and name it **Ramatech Leads**.
2. Rename the first tab to `Leads`. Leave it empty — the script writes the header row.

## 2. Add the Apps Script

1. In the sheet: **Extensions → Apps Script**.
2. Delete the sample code and paste the script below.
3. Replace `CHANGE_ME_LONG_RANDOM_SECRET` with a long random string (e.g. run
   `openssl rand -hex 24` on your Mac). Keep it — Vercel needs the same value.
4. Click **Save**.

```javascript
const SECRET = "CHANGE_ME_LONG_RANDOM_SECRET";
const SHEET_NAME = "Leads";

// Must match buildLeadRow() in src/lib/leads-store.ts
const COLUMNS = [
  "Lead ID", "Time IST", "Name", "Email", "Company", "Role", "Phone",
  "Service", "Interests", "Message", "Intent", "Page",
  "FT source", "FT medium", "FT campaign", "FT term", "FT content",
  "LT source", "LT medium", "LT campaign",
  "gclid", "gbraid", "wbraid", "Landing page", "Referrer", "Device",
  "Status", "Deal value", "Notes",
];

function json(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}

function doPost(e) {
  let payload;
  try {
    payload = JSON.parse(e.postData.contents);
  } catch (err) {
    return json({ ok: false, error: "invalid json" });
  }
  if (!payload || payload.secret !== SECRET) {
    return json({ ok: false, error: "unauthorized" });
  }

  const lock = LockService.getScriptLock();
  lock.waitLock(10000);
  try {
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    const sheet = ss.getSheetByName(SHEET_NAME) || ss.insertSheet(SHEET_NAME);
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(COLUMNS);
      sheet.setFrozenRows(1);
    }
    const row = payload.row || {};
    // Prefix "'" so values like "+91..." or "=..." are stored as text
    sheet.appendRow(COLUMNS.map(function (c) {
      const v = row[c] == null ? "" : String(row[c]);
      return /^[=+\-@]/.test(v) ? "'" + v : v;
    }));
    return json({ ok: true });
  } catch (err) {
    return json({ ok: false, error: String(err) });
  } finally {
    lock.releaseLock();
  }
}

function doGet() {
  return json({ ok: true, service: "ramatech-leads" });
}
```

## 3. Deploy as a web app

1. **Deploy → New deployment**.
2. Gear icon → **Web app**.
3. Description: `Ramatech leads v1`.
4. **Execute as:** Me (info@ramatech.co.in).
5. **Who has access:** Anyone. (The secret blocks anyone else from writing.)
6. **Deploy** → authorise with info@ (Advanced → Go to project → Allow).
7. Copy the **Web app URL** (ends with `/exec`).

Check it: open the URL in a browser — it should show `{"ok":true,"service":"ramatech-leads"}`.

When you edit the script later: **Deploy → Manage deployments → Edit → Version: New version**
(this keeps the same URL).

## 4. Vercel environment variables

Project → Settings → Environment Variables (Production + Preview):

| Variable | Value |
|----------|-------|
| `LEADS_WEBHOOK_URL` | Web app URL from step 3 |
| `LEADS_WEBHOOK_SECRET` | Same secret as in the script |

Redeploy after saving.

## 5. Working the sheet

- **Status** is `New` for real leads and `TEST` for company names containing `+test`.
  Update it by hand: `Contacted`, `Qualified`, `Proposal`, `Won`, `Lost`.
- Fill **Deal value** (INR) and **Notes** yourself.
- Optional: Data → Create a filter, and Format → Conditional formatting on Status.
- Qualified/Won rows with a `gclid` can later be uploaded to Google Ads as offline conversions.

## Failure behaviour

| Sheet | Email | Visitor sees | What you get |
|-------|-------|--------------|--------------|
| OK | OK | Success | Row + email |
| Failed | OK | Success | Email says `SHEET SAVE FAILED` — add row manually |
| OK | Failed | Success | Row only (check Vercel logs) |
| Failed | Failed | Error with info@ / WhatsApp fallback | Vercel logs |
