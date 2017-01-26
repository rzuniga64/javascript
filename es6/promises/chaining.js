function waitASecond(seconds) {
    return new Promise(function(resolve, reject){
        setTimeout(function() {
            seconds++;
            resolve(seconds); // after 1 s the promise resolved.
        }, 1000);
    });
}

waitASecond(0)  // call waitASecond which returns a promise which yeilds 1s.
    .then(waitASecond)  // call waitASecond which passes 1 into this function.
    .then(function(seconds) { // callback which now prints the result of promise
        console.log(seconds);
    });
