#!/usr/bin/env node
/**
 * Prints Resend/lead-delivery env status (no secrets).
 * Usage: npm run verify:resend
 */

const vars = [
  "RESEND_API_KEY",
  "RESEND_FROM_EMAIL",
  "CONTACT_EMAIL",
  "NEXT_PUBLIC_SITE_URL",
];

console.log("Lead delivery environment check\n");

let ok = true;
for (const name of vars) {
  const value = process.env[name];
  const set = Boolean(value && value.trim());
  if (name === "RESEND_API_KEY" && !set) ok = false;
  if (name === "CONTACT_EMAIL" && !set) {
    console.log(`  ${name}: not set (falls back to info@ramatech.co.in in app)`);
  } else if (name === "RESEND_API_KEY") {
    console.log(`  ${name}: ${set ? "set" : "MISSING — required in production"}`);
  } else {
    console.log(`  ${name}: ${set ? value : "not set"}`);
  }
}

console.log(`\nNODE_ENV: ${process.env.NODE_ENV ?? "undefined"}`);

if (!process.env.RESEND_API_KEY) {
  console.log(
    "\n⚠ RESEND_API_KEY missing. Production form submissions will return 503."
  );
  process.exit(1);
}

console.log("\n✓ Minimum lead delivery config present.");
process.exit(0);
