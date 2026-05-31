/**
 * Generate Open Graph image (1200×630) for social previews.
 * Run: npm run og:image
 */
import sharp from "sharp";
import { join, dirname } from "path";
import { fileURLToPath } from "url";
import { existsSync } from "fs";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");
const out = join(root, "public/og-image.png");
const logoPath = join(root, "public/brand/logo-footer-lockup.png");
const logoFallback = join(root, "public/brand/logo-dark.png");

const W = 1200;
const H = 630;

const bgSvg = `
<svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a4c95"/>
      <stop offset="55%" style="stop-color:#0d1f3c"/>
      <stop offset="100%" style="stop-color:#030B1A"/>
    </linearGradient>
    <radialGradient id="glow" cx="75%" cy="35%" r="45%">
      <stop offset="0%" style="stop-color:#11d3e8;stop-opacity:0.18"/>
      <stop offset="100%" style="stop-color:#11d3e8;stop-opacity:0"/>
    </radialGradient>
  </defs>
  <rect width="100%" height="100%" fill="url(#bg)"/>
  <rect width="100%" height="100%" fill="url(#glow)"/>
</svg>`;

const taglineSvg = `
<svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">
  <text x="80" y="520" font-family="system-ui, -apple-system, Segoe UI, sans-serif" font-size="28" fill="rgba(255,255,255,0.75)" letter-spacing="0.04em">
    Engineering intelligent systems at scale
  </text>
</svg>`;

async function main() {
  const bg = await sharp(Buffer.from(bgSvg)).png().toBuffer();

  const logoFile = existsSync(logoPath) ? logoPath : logoFallback;
  const logo = await sharp(logoFile)
    .resize(520, null, { fit: "inside" })
    .png()
    .toBuffer();

  const tagline = await sharp(Buffer.from(taglineSvg)).png().toBuffer();

  await sharp(bg)
    .composite([
      { input: logo, top: 140, left: 80 },
      { input: tagline, top: 0, left: 0 },
    ])
    .png({ compressionLevel: 9, quality: 90 })
    .toFile(out);

  const meta = await sharp(out).metadata();
  console.log(`OG image written: ${out} (${meta.width}×${meta.height})`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
