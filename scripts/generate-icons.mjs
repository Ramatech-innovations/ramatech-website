/**
 * Generate Next.js App Router icons from public/brand/favicon.png
 * Run: node scripts/generate-icons.mjs
 */
import sharp from "sharp";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");
const source = join(root, "public/brand/favicon.png");
const appDir = join(root, "src/app");

async function main() {
  const resizeIcon = (size, dest) =>
    sharp(source)
      .resize(size, size, {
        fit: "contain",
        background: { r: 0, g: 0, b: 0, alpha: 0 },
      })
      .png()
      .toFile(dest);

  await resizeIcon(32, join(appDir, "icon.png"));
  await resizeIcon(180, join(appDir, "apple-icon.png"));
  await resizeIcon(16, join(root, "public/favicon-16.png"));
  await resizeIcon(32, join(root, "public/favicon-32.png"));

  console.log("Icons generated: src/app/icon.png, apple-icon.png, public/favicon-*.png");
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
