const periodicProcess = (message) => {
    console.log('1. iteration with', message);
}

const intervalRef1 = setInterval(periodicProcess, 1000, 'some data');

const stopperProcess = () => {
    console.log('1. stopping the periodic process')
    clearInterval(intervalRef1);
}

setTimeout(stopperProcess, 5500);


const intervalRef2 = setInterval((message) => {
    console.log('2. iteration with', message);
}, 1000, 'some data');

setTimeout(() => {
    console.log('2. stopping the periodic process')
    clearInterval(intervalRef2);
}, 5500);