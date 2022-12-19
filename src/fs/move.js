import { createReadStream, createWriteStream } from 'node:fs';
import { rm } from 'node:fs/promises';
import { isExistFile } from './existFile.js';

export const moveFile = async (pathOldFile, pathNewFile) => {
    try {
      const oldPath = await isExistFile(pathOldFile);
      const newPath = await isExistFile(pathNewFile);
      if (!oldPath || newPath) throw new Error('Operation failed! move');
      const readStream = createReadStream(pathOldFile);
      const writeStream = createWriteStream(pathNewFile);
      readStream.pipe(writeStream);
      writeStream.on('finish', async () => {
        await rm(pathOldFile);
      });
    } catch (error) {
        console.log('Operation failed');
    };
};