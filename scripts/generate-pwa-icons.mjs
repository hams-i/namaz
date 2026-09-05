import { copyFile, mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const publicDir = join(root, "public");
const appDir = join(root, "src/app");

await mkdir(publicDir, { recursive: true });

async function render(inputName, outputName, size) {
  await sharp(join(publicDir, inputName), { density: 384 })
    .resize(size, size)
    .png({ compressionLevel: 9 })
    .toFile(join(publicDir, outputName));
}

await render("icon.svg", "icon-192.png", 192);
await render("icon.svg", "icon-512.png", 512);
await render("icon.svg", "favicon.png", 32);
await render("icon-apple.svg", "apple-touch-icon.png", 180);
await render("icon-maskable.svg", "icon-maskable-512.png", 512);

await copyFile(join(publicDir, "icon-192.png"), join(appDir, "icon.png"));
await copyFile(
  join(publicDir, "apple-touch-icon.png"),
  join(appDir, "apple-icon.png"),
);

const png = await readFile(join(publicDir, "favicon.png"));
const header = Buffer.alloc(6);
header.writeUInt16LE(0, 0);
header.writeUInt16LE(1, 2);
header.writeUInt16LE(1, 4);
const entry = Buffer.alloc(16);
entry.writeUInt8(32, 0);
entry.writeUInt8(32, 1);
entry.writeUInt16LE(1, 4);
entry.writeUInt16LE(32, 6);
entry.writeUInt32LE(png.length, 8);
entry.writeUInt32LE(22, 12);
await writeFile(join(appDir, "favicon.ico"), Buffer.concat([header, entry, png]));

console.log("PWA icons written to public/ and src/app/");
