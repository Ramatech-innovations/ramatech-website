/**
 * Process brand icon (black-bg JPEG or RGBA) into transparent PNGs.
 * Run: npm run brand:logos
 */
import sharp from "sharp";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");
const brandDir = join(root, "public/brand");

/** User-provided mark (icon only, black background). */
const iconSource = join(brandDir, "icon-source.png");

function isNearBlack(r, g, b) {
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  const sat = max - min;
  return max < 48 && sat < 50;
}

/** Turn baked-in black backgrounds transparent; preserve blue gradient mark. */
async function toTransparentPng(input) {
  const { data, info } = await sharp(input)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  for (let i = 0; i < data.length; i += 4) {
    const r = data[i];
    const g = data[i + 1];
    const b = data[i + 2];
    if (isNearBlack(r, g, b)) {
      data[i + 3] = 0;
      continue;
    }
    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    const sat = max - min;
    if (max < 72 && sat < 42) {
      const alpha = Math.round(((max - 18) / 54) * 255);
      data[i + 3] = Math.min(data[i + 3], Math.max(0, Math.min(255, alpha)));
    }
  }

  return sharp(data, {
    raw: { width: info.width, height: info.height, channels: 4 },
  }).png();
}

async function exportMark(inputSharp, output, maxHeight) {
  await inputSharp
    .clone()
    .trim({ threshold: 12 })
    .resize({ height: maxHeight, fit: "inside", withoutEnlargement: true })
    .png({ compressionLevel: 9, force: true })
    .toFile(output);

  const meta = await sharp(output).metadata();
  console.log(`Wrote ${output} (${meta.width}x${meta.height}, alpha=${meta.hasAlpha})`);
  return meta;
}

async function main() {
  const transparent = await toTransparentPng(iconSource);

  await exportMark(transparent, join(brandDir, "logo-icon.png"), 128);
  await exportMark(transparent, join(brandDir, "logo-mark.png"), 280);

  const iconMeta = await sharp(join(brandDir, "logo-icon.png")).metadata();
  await sharp(join(brandDir, "logo-icon.png"))
    .resize(512, 512, {
      fit: "contain",
      background: { r: 0, g: 0, b: 0, alpha: 0 },
    })
    .png()
    .toFile(join(brandDir, "favicon.png"));

  console.log(
    `Wrote favicon.png (512x512 from ${iconMeta.width}x${iconMeta.height} icon)`
  );
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
