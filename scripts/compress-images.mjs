import sharp from 'sharp';
import { readdirSync, statSync, renameSync, unlinkSync } from 'fs';
import { join } from 'path';

const publicDir = 'public';
const maxWidth = 1920;
const quality = 80;

const files = readdirSync(publicDir).filter(f => 
  /\.(jpg|jpeg|png)$/i.test(f)
);

console.log(`Found ${files.length} images to compress...\n`);

for (const file of files) {
  const filePath = join(publicDir, file);
  const tempPath = join(publicDir, `_temp_${file}`);
  const sizeBefore = statSync(filePath).size;
  
  try {
    const image = sharp(filePath);
    const metadata = await image.metadata();
    
    let pipeline = sharp(filePath);
    
    if (metadata.width > maxWidth) {
      pipeline = pipeline.resize(maxWidth);
    }
    
    if (/\.(jpg|jpeg)$/i.test(file)) {
      pipeline = pipeline.jpeg({ quality, mozjpeg: true });
    } else if (/\.png$/i.test(file)) {
      pipeline = pipeline.png({ quality, compressionLevel: 9 });
    }
    
    await pipeline.toFile(tempPath);
    const sizeAfter = statSync(tempPath).size;
    
    if (sizeAfter < sizeBefore) {
      unlinkSync(filePath);
      renameSync(tempPath, filePath);
      const savings = Math.round((1 - sizeAfter / sizeBefore) * 100);
      console.log(`✓ ${file}: ${Math.round(sizeBefore/1024)}KB → ${Math.round(sizeAfter/1024)}KB (${savings}% smaller)`);
    } else {
      unlinkSync(tempPath);
      console.log(`- ${file}: already optimized (${Math.round(sizeBefore/1024)}KB)`);
    }
  } catch (err) {
    console.log(`✗ ${file}: error - ${err.message}`);
    try { unlinkSync(tempPath); } catch {}
  }
}

console.log('\nDone!');
