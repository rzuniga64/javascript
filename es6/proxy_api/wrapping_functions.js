function log(message) {

    console.log('Log entry created, message: ' + message);
}

// apply: function(target, thisArg, argumentsList)
let handler = {
    apply: function(target, thisArg, argumentsList) {
        if (argumentsList.length === 1) {
            return Reflect.apply(target, thisArg, argumentsList);
        }
    }
};

let proxy = new Proxy(log, handler);
// Can now call proxy like a function.
proxy('Hello');