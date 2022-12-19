import { createBrotliDecompress } from 'node:zlib';
import { pipeline } from 'node:stream';
import { createReadStream, createWriteStream } from 'node:fs';

export const decompressFile = async (pathArchive, pathFile) => {
  const unBrot = createBrotliDecompress();
  const source = createReadStream(pathArchive);
  const destination = createWriteStream(pathFile);

  pipeline(
    source, 
    unBrot, 
    destination, 
    (error) => {
      if (error) console.log(error.message);
    });
};