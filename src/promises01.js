import { readFile } from 'node:fs/promises';
import { getDirName } from './util.js'; // importing named function getDirName

const __dirname = getDirName();
console.log(__dirname);

readFile(`${__dirname}/data.txt2`, 'utf8')
    .then((data) => {
        console.log('File content:\n');
        console.log(data);
    })
    .catch((err) => {
        console.error('Error reading the file:', err);
    });