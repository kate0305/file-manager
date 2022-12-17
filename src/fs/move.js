import { createReadStream, createWriteStream } from 'node:fs';
import { rm } from 'node:fs/promises';

export const moveFile = async (oldPath, newPath) => {
    try {
      const readStream = createReadStream(oldPath);
      const writeStream = createWriteStream(newPath);
      readStream.pipe(writeStream);
      writeStream.on('finish', () => {
        rm(oldPath);
      });
    } catch (error) {
        console.log(error.message);
    };
};