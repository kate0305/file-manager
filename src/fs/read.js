import { createReadStream } from 'node:fs';

export const readFile = async (pathFile) => {
    try {
      const readStream = createReadStream(pathFile, { encoding: 'utf8' });
      readStream.on('data', chunk => console.log(chunk));
    } catch (error) {
        console.log(error.message);
    };
};