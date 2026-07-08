const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const dir = path.join(__dirname, 'public', 'ezgif-774cadbbbbc65ee4-png-split');
const files = fs.readdirSync(dir).filter(f => f.endsWith('.png'));

console.log(`Found ${files.length} PNG files. Converting...`);

async function convertAll() {
  for (const file of files) {
    const input = path.join(dir, file);
    const output = path.join(dir, file.replace('.png', '.webp'));
    if (!fs.existsSync(output)) {
      try {
        await sharp(input)
          .webp({ quality: 75 })
          .toFile(output);
        console.log(`Converted ${file}`);
      } catch (err) {
        console.error(`Error converting ${file}:`, err);
      }
    }
  }
  console.log('Conversion complete.');
}

convertAll();
