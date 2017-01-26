/**
 *  Promise race waits for only the first promise to finish and only takes
 *  that into account. So as long as the quickest promise is resolved the
 *  race promise is resolved. All promises have to resolve or none of them will
 *  finish successfully.
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

Promise.race([promise1, promise2])
    .then(function(success) {
        console.log(success);
})
    .catch(function(error) {
        console.log(error);
});
