process.on("unhandledRejection", (reason, promise) => {
    // Add code here to examine the "promise" and "reason" values
    console.log(`unhandledRejection handler`, reason);
    console.log(promise);
});
process.on('uncaughtException', (...args) => {
    console.log(`uncaughtException handler`, ...args);
});
process.on('beforeExit', (...args) => {
    console.log(`beforeExit`, ...args);
});
process.on('exit', (...args) => {
    console.log(`exit`, ...args);
});

console.log('Message from main 1');

setTimeout(() => {
    console.log('macrotask 2');
    process.nextTick(() => {
        console.log('nextTick 3');
    });
    queueMicrotask(() => {
        console.log('microtask 4');
    });
    Promise.resolve().then(() => {
        console.log('microtask 5');
    });
}, 0);

process.nextTick(() => {
    console.log('nextTick 6');
});

queueMicrotask(() => {
    console.log('microtask 7');
    setTimeout(() => {
        console.log('macrotask 8');
        process.nextTick(() => {
            console.log('nextTick 9');
        });
    }, 0);
    Promise.resolve().then(() => {
        console.log('microtask 10');
    });
});

setTimeout(() => {
    console.log('macrotask 11');
}, 0);

Promise.resolve().then(() => {
    console.log('microtask 12');
    process.nextTick(() => {
        console.log('nextTick 13');
    });
    queueMicrotask(() => {
        console.log('microtask 14');
    });
    setTimeout(() => {
        console.log('macrotask 15');
        Promise.resolve()
            .then(() => {
                console.log('microtask 16');
                process.nextTick(() => {
                    console.log('nextTick 17');
                });
            })
            .then(() => {
                console.log('microtask 18');
            });
        queueMicrotask(() => {
            console.log('microtask 19');
        });
        process.nextTick(() => {
            console.log('nextTick 20');
        });
        process.nextTick(() => {
            console.log('nextTick 21');
        });
    }, 0);
});

setTimeout(() => {
    console.log('macrotask 22');
}, 0);

process.nextTick(() => {
    console.log('nextTick 23');
});
