import sharp from 'sharp';
import { readdirSync, statSync, unlinkSync } from 'fs';
import { join, parse } from 'path';

const publicDir = 'public';
const maxWidth = 1920;
const quality = 80;

const files = readdirSync(publicDir).filter(f => 
  /\.(jpg|jpeg|png)$/i.test(f)
);

console.log(`Found ${files.length} images to convert to WebP...\n`);

for (const file of files) {
  const filePath = join(publicDir, file);
  const { name } = parse(file);
  const webpPath = join(publicDir, `${name}.webp`);
  const sizeBefore = statSync(filePath).size;
  
  try {
    let pipeline = sharp(filePath);
    const metadata = await pipeline.metadata();
    
    if (metadata.width > maxWidth) {
      pipeline = pipeline.resize(maxWidth);
    }
    
    await pipeline.webp({ quality }).toFile(webpPath);
    const sizeAfter = statSync(webpPath).size;
    
    const savings = Math.round((1 - sizeAfter / sizeBefore) * 100);
    console.log(`✓ ${file} → ${name}.webp: ${Math.round(sizeBefore/1024)}KB → ${Math.round(sizeAfter/1024)}KB (${savings}% smaller)`);
    
    // Remove original file
    unlinkSync(filePath);
  } catch (err) {
    console.log(`✗ ${file}: error - ${err.message}`);
  }
}

console.log('\nDone!');
