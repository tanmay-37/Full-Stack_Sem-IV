const fs = require('node:fs');

// __direname is directly available in ComonJS modules
console.log('__dirname value:', __dirname);

console.log('before anonymous callback function');
fs.readFile(`${__dirname}/data.txt`, 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading the file:', err);
        return;
    }
    console.log('File content:\n');
    console.log(data);
});

// named function with same logic
const processData = (err, data) => {
    if (err) {
        console.error('Error reading the file:', err);
        return;
    }
    console.log('File content:\n');
    console.log(data);
};
console.log('before named callback function');
fs.readFile(`${__dirname}/data.txt`, 'utf-8', processData);