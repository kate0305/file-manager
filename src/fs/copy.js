import { createReadStream, createWriteStream } from 'node:fs';

export const copyFile = async (oldPath, newPath) => {
    try {
      const readStream = createReadStream(oldPath);
      const writeStream = createWriteStream(newPath);
      readStream.on('error', () => console.log('Operation failed'))
                .pipe(writeStream)
                .on('error', () => console.log('Operation failed'));
    } catch (error) {
        console.log('Operation failed');
    };
};