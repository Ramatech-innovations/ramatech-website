/**
 * Generate the Open Graph image (1200×630) and the email signature logo (192×192).
 * Both use the icon mark plus a typed "RAMATECH / INNOVATION" wordmark in Satoshi,
 * never a lockup image with a legal suffix (DEC-2026-001).
 *
 * Renders HTML with headless Chrome because sharp's text renderer cannot load the
 * bundled Satoshi font. Set CHROME_PATH if Chrome is not in the default macOS location.
 * Run: npm run og:image
 */
import sharp from "sharp";
import { execFileSync } from "child_process";
import { mkdtempSync, rmSync, writeFileSync } from "fs";
import { tmpdir } from "os";
import { join, dirname } from "path";
import { fileURLToPath, pathToFileURL } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");
const ogOut = join(root, "public/og-image.png");
const signatureOut = join(root, "public/brand/email-signature-logo.png");
const markUrl = pathToFileURL(join(root, "public/brand/logo-mark.png")).href;
const fontUrl = pathToFileURL(
  join(root, "public/fonts/satoshi/Satoshi_Complete/Fonts/WEB/fonts/Satoshi-Variable.ttf")
).href;
const chrome =
  process.env.CHROME_PATH ?? "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";

const baseCss = `
@font-face { font-family: Satoshi; src: url("${fontUrl}"); font-weight: 300 900; }
* { margin: 0; padding: 0; box-sizing: border-box; }
html, body { background: transparent; }
body { font-family: Satoshi, sans-serif; -webkit-font-smoothing: antialiased; }
`;

const ogHtml = `<!doctype html><html><head><style>${baseCss}
.card {
  width: 1200px; height: 630px; padding: 0 96px; display: flex; flex-direction: column; justify-content: center;
  background:
    radial-gradient(circle at 75% 35%, rgba(17, 211, 232, 0.18), rgba(17, 211, 232, 0) 45%),
    linear-gradient(135deg, #0a4c95 0%, #0d1f3c 55%, #030b1a 100%);
}
.lockup { display: flex; align-items: center; gap: 36px; }
.lockup img { height: 170px; }
.name { font-size: 118px; font-weight: 700; letter-spacing: 0.02em; color: #fff; line-height: 1; }
.sub { margin-top: 14px; font-size: 32px; font-weight: 500; letter-spacing: 0.42em; color: #cbd5e1; }
.tagline { margin-top: 84px; font-size: 36px; font-weight: 500; color: #e2e8f0; }
.site { margin-top: 18px; font-size: 30px; font-weight: 500; color: #67e8f9; }
</style></head><body><div class="card">
  <div class="lockup"><img src="${markUrl}" alt=""><div><div class="name">RAMATECH</div><div class="sub">INNOVATION</div></div></div>
  <div class="tagline">OpenShift &nbsp;·&nbsp; Cloud &nbsp;·&nbsp; DevOps &nbsp;·&nbsp; AI &nbsp;·&nbsp; Automation</div>
  <div class="site">ramatech.co.in</div>
</div></body></html>`;

const signatureHtml = `<!doctype html><html><head><style>${baseCss}
.logo { width: 192px; height: 192px; background: #fff; display: flex; flex-direction: column; align-items: center; padding-top: 14px; }
.logo img { height: 104px; }
.name { margin-top: 12px; font-size: 30px; font-weight: 700; letter-spacing: 0.02em; color: #0a4c95; line-height: 1; }
.sub { margin-top: 6px; font-size: 12px; font-weight: 600; letter-spacing: 0.3em; margin-right: -0.3em; color: #475569; }
</style></head><body><div class="logo">
  <img src="${markUrl}" alt=""><div class="name">RAMATECH</div><div class="sub">INNOVATION</div>
</div></body></html>`;

/** Screenshot the top-left `width`×`height` CSS pixels of `html` at `scale`, then resize to exact size. */
async function render(html, { width, height, scale, out, dir }) {
  const htmlPath = join(dir, `page-${width}x${height}.html`);
  const shotPath = join(dir, `shot-${width}x${height}.png`);
  writeFileSync(htmlPath, html);
  execFileSync(chrome, [
    "--headless=new",
    "--disable-gpu",
    "--hide-scrollbars",
    "--allow-file-access-from-files",
    `--force-device-scale-factor=${scale}`,
    "--window-size=1200,700",
    "--virtual-time-budget=3000",
    `--screenshot=${shotPath}`,
    pathToFileURL(htmlPath).href,
  ], { stdio: "ignore" });

  await sharp(shotPath)
    .extract({ left: 0, top: 0, width: width * scale, height: height * scale })
    .resize(width, height)
    .flatten({ background: "#ffffff" })
    .png({ compressionLevel: 9 })
    .toFile(out);

  const meta = await sharp(out).metadata();
  console.log(`Written: ${out} (${meta.width}×${meta.height})`);
}

async function main() {
  const dir = mkdtempSync(join(tmpdir(), "rt-og-"));
  try {
    await render(ogHtml, { width: 1200, height: 630, scale: 1, out: ogOut, dir });
    await render(signatureHtml, { width: 192, height: 192, scale: 2, out: signatureOut, dir });
  } finally {
    rmSync(dir, { recursive: true, force: true });
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
