
queueMicrotask(() => console.log(4));
Promise.resolve()
  .then(() => console.log(2))
  .then(() => console.log(3))
  .then(() => queueMicrotask(() => console.log(6)));
queueMicrotask(() => console.log(5));
console.log(1); // 1, 2, 3, 4