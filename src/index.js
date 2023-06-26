import { createInterface } from 'node:readline/promises';
import { sayWelcome } from './hello.js';
import { getList } from './nwd/list.js';
import { cdDir } from './nwd/cd.js';
import { getUpDir } from './nwd/up.js';
import { handleOS } from './os/index.js';
import { validateCommand } from './validateCommand.js';
import { chdir, cwd, exit, stdin, stdout } from 'node:process';
import { getPath } from './validateArgs.js';
import { parseArgs } from './parseArgs.js';
import { calculateHash } from './hash/hash.js';
import { compressFile } from './zip/compress.js';
import { decompressFile } from './zip/decompress.js';
import { handleFS } from './fs/index.js';
import { currentDir } from './curDir.js';
import { homedir } from 'node:os';
const rl = createInterface({ input: stdin, output: stdout });
const name = await sayWelcome();
if (name) {
  console.log(`Welcome to the File Manager, ${name}!`);
};

chdir(homedir());

console.log(`You are currently in ${currentDir.getDir()}`);

rl.on('line', async (text) => {
  try {
    const command = await validateCommand(text);
    let paths;
    const { args } = parseArgs(text);
    switch (command) {
      case 'up':
        await getUpDir();
        break;

      case 'cd':
        paths = await getPath(text);
        await cdDir(paths[0]);
        break;

      case 'ls':
        await getList(cwd());
        break;
    
      case 'os':
        await handleOS(args[0]);
        break;
    
      case 'hash':
        paths = await getPath(text);
        await calculateHash(paths[0]);
        break;

      case 'compress':
        paths = await getPath(text);
        await compressFile(paths[0], paths[1]);
        break;

      case 'decompress':
        paths = await getPath(text);
        await decompressFile(paths[0], paths[1]);
        break;

      case '.exit':
        console.log(`Thank you for using File Manager, ${name}, goodbye!`);
        exit();
    
      default:
        handleFS(command, text);
        break;
    }
  } catch (error) {
    console.log('main index');
  } finally {
    console.log(`You are currently in ${currentDir.getDir()}`);
  }
});

rl.on('SIGINT', () => {
  console.log(`Thank you for using File Manager, ${name}, goodbye!`);
  exit();
});
