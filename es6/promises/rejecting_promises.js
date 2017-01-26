let promise = new Promise(function(resolve, reject) {
    // run a timer.
    setTimeout(function() {
        reject('Failed!');
    }, 1500);
});

// resolve function is called after 1.5s and passes value to this function
promise.then(function(value) {
    console.log(value);
}, function(error) {
    console.log(error);
});