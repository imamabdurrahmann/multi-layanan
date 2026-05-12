const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const inputPath = path.join(__dirname, '..', 'public', 'images', 'logo.png');
const outputPath = path.join(__dirname, '..', 'public', 'favicon.ico');

// Generate multiple sizes for ICO
async function generateFavicon() {
  const sizes = [16, 32, 48, 64];
  const buffers = [];

  for (const size of sizes) {
    const buffer = await sharp(inputPath)
      .resize(size, size, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
      .png()
      .toBuffer();
    buffers.push({ size, buffer });
  }

  // Simple ICO format: header + directory entries + image data
  const numImages = buffers.length;
  const headerSize = 6;
  const dirEntrySize = 16;
  const dirSize = dirEntrySize * numImages;

  let offset = headerSize + dirSize;
  const dirEntries = [];
  const imageData = [];

  for (const { size, buffer } of buffers) {
    dirEntries.push({
      width: size === 256 ? 0 : size,
      height: size === 256 ? 0 : size,
      colorCount: 0,
      reserved: 0,
      planes: 1,
      bitCount: 32,
      bytesInRes: buffer.length,
      imageOffset: offset,
    });
    imageData.push(buffer);
    offset += buffer.length;
  }

  // Create ICO file
  const header = Buffer.alloc(headerSize);
  header.writeUInt16LE(0, 0); // Reserved
  header.writeUInt16LE(1, 2); // Type: 1 = ICO
  header.writeUInt16LE(numImages, 4); // Number of images

  const dirBuffer = Buffer.alloc(dirSize);
  for (let i = 0; i < numImages; i++) {
    const entry = dirEntries[i];
    const pos = i * dirEntrySize;
    dirBuffer.writeUInt8(entry.width, pos);
    dirBuffer.writeUInt8(entry.height, pos + 1);
    dirBuffer.writeUInt8(entry.colorCount, pos + 2);
    dirBuffer.writeUInt8(entry.reserved, pos + 3);
    dirBuffer.writeUInt16LE(entry.planes, pos + 4);
    dirBuffer.writeUInt16LE(entry.bitCount, pos + 6);
    dirBuffer.writeUInt32LE(entry.bytesInRes, pos + 8);
    dirBuffer.writeUInt32LE(entry.imageOffset, pos + 12);
  }

  const ico = Buffer.concat([header, dirBuffer, ...imageData]);
  fs.writeFileSync(outputPath, ico);
  console.log(`Favicon created: ${outputPath}`);
  console.log(`Size: ${ico.length} bytes`);
}

generateFavicon().catch(err => {
  console.error('Error:', err);
  process.exit(1);
});
