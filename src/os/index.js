import { getHomeDir } from './homedir.js';
import { getEOL } from './eol.js';
import { getCpus } from './cpus.js';
import { getArchitecture } from './architecture.js';
import { getUserName } from './username.js';

export const handleOS = async (command) => {
   switch (command) {
    case '--EOL':
      await getEOL();
      break;
   
    case '--cpus':
      await getCpus();
      break;
   
    case '--homedir':
      await getHomeDir();
      break;
   
    case '--username':
      await getUserName();
      break;
   
    case '--architecture':
      await getArchitecture();
      break;
   
    default:
      console.log('Invalid input');
      break;
   }
};