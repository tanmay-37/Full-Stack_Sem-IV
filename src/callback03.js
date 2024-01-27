import fs from 'fs'; // importing default object as a name fs
import { getDirName } from './util.js'; // importing named function getDirName
import myUtil from './util.js'; // importing default object as a name myUtil

console.log('Directory Name is:', myUtil.getDirName());

const __dirname = getDirName();
console.log('__dirname:', __dirname);

fs.readFile(`${__dirname}/data.txt`, 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading the file:', err);
        return;
    }
    console.log('File content:\n');
    console.log(data);
});