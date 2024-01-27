const exitHandler = (code) => {
    console.log('bye bye with code', code);
}

process.on('exit', exitHandler);

console.log('app started');