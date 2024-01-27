import { readFile } from 'node:fs';

const exitHandler = (code) => {
    console.log('bye bye with code', code);
}

process.on('exit', exitHandler);
console.log('before file reading');
readFile('./src/data.txt', 'utf-8', (err, data) => {
    if(err) {
        console.error(err);
        return;
    }
    console.log(data);
    console.log('after file reading from callback');
});
console.log('after file reading');