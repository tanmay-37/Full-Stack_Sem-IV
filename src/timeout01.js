const process = (message) => {
    console.log('Message after delay of', message);
}
const TIME_ONE_SECOND = 1000;

const timer = setTimeout(process, TIME_ONE_SECOND, 'one second');
timer.unref(); // loop does not wait for this timer
timer.ref(); // loop waits for this timer

// clearTimeout( timer ); // deletes the scheduled timer 

console.log('last log of the script');