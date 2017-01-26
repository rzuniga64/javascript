/**
 *  Promise All waits for the last promise to finish.
 *  All promises have to resolve or none of them will finish successfully.
 *  @type {Promise}
 */
let promise1 = new Promise(function(resolve, reject) {
    setTimeout(function() {
        resolve("Resolved!");
    }, 1000);
});

let promise2 = new Promise(function(resolve, reject) {
    setTimeout(function() {
        reject("Rejected!");
    }, 2000);
});

Promise.all([promise1, promise2])
    .then(function(success) {
        console.log(success);
})
    .catch(function(error) {
        console.log(error);
});
