import { copyFile } from './copy.js';
import { createFile } from './create.js';
import { deleteFile } from './delete.js';
import { moveFile } from './move.js';
import { readFile } from './read.js';
import { renameFile } from './rename.js';
import { getPath } from '../validateArgs.js';
import { createPath } from './createPath.js';

export const handleFS = async (command, inputText) => {
  const paths = await getPath(inputText);
  switch (command) {
    case 'cat':
      await readFile(paths[0]);
      break;
    
    case 'add':
      await createFile(paths[0]);
      break;
    
    case 'rn':
      await renameFile(paths[0], paths[1]);
      break;
    
    case 'cp':
      const newPath = await createPath(paths[0], paths[1]);
      await copyFile(paths[0], newPath);
      break;
    
    case 'mv':
      const pathTo = await createPath(paths[0], paths[1]);
      await moveFile(paths[0], pathTo);
      break;
    
    case 'rm':
      await deleteFile(paths[0]);
      break;
    
    default:
      console.log('Invalid input');
      break;
    }
 };