process.on("unhandledRejection", (reason, promise) => {
    // Add code here to examine the "promise" and "reason" values
    console.log(`global error handler`, reason);
    console.log(promise);
});

const someProcess = async(value) => {
    return Promise.reject(new Error(`Specific Error Message with: ${value}`));
}

Promise.resolve(1).then(someProcess); // global error handler

try {
    someProcess(2); // global error handler
} catch(error) {
    console.log(`handler: ${error}`); 
}

try {
    await someProcess(3); // handled
} catch(error) {
    console.log(`handler: ${error}`); 
} finally {
    console.log('Always executed');
}

// await someProcess(); //unhandled