import { createReadStream, createWriteStream } from 'node:fs';

export const copyFile = async (oldPath, newPath) => {
    try {
      const readStream = createReadStream(oldPath);
      const writeStream = createWriteStream(newPath);
      readStream.pipe(writeStream);
    } catch (error) {
        console.log(error.message);
    };
};