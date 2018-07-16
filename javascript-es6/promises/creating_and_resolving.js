/** Promises are a helper object that works with asynchronous tasks. They give
 * us that they will give us back some data at some time in the future. We
 * specify a function on our promise to do something with the data whenever
 * we get it back.
  */

let promise = new Promise(function(resolve, reject) {
    // run a timer.
    setTimeout(function() {
        resolve('Done!');
    }, 1500);
});

// resolve function is called after 1.5s and passes value to this function
promise.then(function(value) {
    console.log(value);
});