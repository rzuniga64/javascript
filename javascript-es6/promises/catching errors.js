/**
 * Catch block always gets executed once the promise is rejected no matter
 * if the event blocks in front of it have been worked through successfully
 * or not.
 * @param seconds
 * @returns {Promise}
 */
function waitASecond(seconds) {
    return new Promise(function(resolve, reject) {
        if (seconds > 2) {
            reject("Rejected!");
        } else {
            setTimeout(function () {
                seconds++;
                resolve(seconds); // after 1 s the promise resolved.
            }, 1000);
        }
    });
}

waitASecond(2)  // call waitASecond which returns a promise which yields 3s.
    .then(waitASecond)  // call waitASecond which passes 3 into this function.
    .then(function(seconds) {
        console.log(seconds);
    })
    .catch(function(error){// callback which catches seconds > 2.
        console.log(error);
    });