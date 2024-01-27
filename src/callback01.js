import { readFile } from 'node:fs';

readFile('./src/data.txt1', 'utf-8', (err, data) => {
    if(err) {
        console.error(err);
    }
    console.log(data);
});