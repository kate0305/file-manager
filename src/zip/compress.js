import { createBrotliCompress } from 'node:zlib';
import { pipeline } from 'node:stream';
import { createReadStream, createWriteStream } from 'node:fs';

export const compress = async (pathFile, pathArchive) => {
  const brot = createBrotliCompress();
  const source = createReadStream(pathFile);
  const destination = createWriteStream(pathArchive);

  pipeline(
    source, 
    brot, 
    destination, 
    (error) => { 
      if(error) console.log(error.message);
    });
};