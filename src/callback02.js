import { readFile } from 'fs'; // importing named function readFile
import { getDirName } from './util.js'; // importing named function getDirName

const __dirname = getDirName();
console.log(__dirname);

readFile(`${__dirname}/data.txt`, 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading the file:', err);
        return;
    }
    console.log('File content:\n');
    console.log(data);
});