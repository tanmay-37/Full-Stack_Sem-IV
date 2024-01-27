
setTimeout(() => {
    console.log('setTimeout called');
}, 0);

process.nextTick((data) => {
    console.log('nextTick called with ', data);
}, 'data01');

queueMicrotask(() => {
    console.log('microtask called 1');
});

process.nextTick((data) => {
    console.log('nextTick called with ', data);
}, 'data02');

queueMicrotask(() => {
    console.log('microtask called 2');
});

const myPromise = Promise.resolve('data03');
myPromise
    .then((data) => {
        console.log('microtask with ', data);
        return 'data04';
        // throw new Error('went wrong');
    })
    .then((list) => {
        console.log('microtask with ', list);
        throw new Error('went wrong');
    })
    .catch((error) => {
        console.log('microtask with', error);
    });

console.log('app started');