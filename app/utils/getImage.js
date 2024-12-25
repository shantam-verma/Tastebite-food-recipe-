import { getPlaiceholder } from 'plaiceholder';
import fs from 'fs/promises';
import path from 'path';

export async function getImage(src) {
  let buffer;

  // Check if it's a local or remote image
  if (src.startsWith('/') || src.startsWith('./')) {
    // Local image
    const fullPath = path.join(process.cwd(), 'public', src);
    buffer = await fs.readFile(fullPath);
  } else {
    // Remote image
    const res = await fetch(src);
    buffer = Buffer.from(await res.arrayBuffer());
  }

  const {
    metadata: { height, width },
    ...plaiceholder
  } = await getPlaiceholder(buffer, { size: 10 });

  return {
    ...plaiceholder,
    img: { src, height, width },
  };
}
