import { readdir } from 'node:fs/promises';

export const getList = async (pathFile) => {
    const listFiles = [];
    try {
      const files = await readdir(pathFile, {withFileTypes: true});
      for (const file of files) {
        if (file.isFile()) {
            listFiles.push({ Name: file.name, Type: 'file' });
        } else {
            listFiles.push({ Name: file.name, Type: 'directory' });
        }
      }
      const sortName = listFiles.sort((a, b) => (a.Name).localeCompare(b.Name, 'en'));
      const sortType = sortName.sort((a, b) => (a.Type).localeCompare(b.Type));
      console.table(sortType);
    } catch (error) {
        console.log(error.message);
    } 
};