let person = {
    age: 27
};

let handler = {
};

let protoHandler = {
    get: function(target, name) {
        return name in target ? target[name] : 'Non-existant'
    }
};

// Wrapping an empty object instead of a person.
let proxy = new Proxy( {}, handler);
// Wrap a proxy with another proxy.
let protoProxy = new Proxy(proxy, protoHandler);

// Set the proxy as a prototype of the person.
Reflect.setPrototypeOf(person, proxy);

console.log(person.age);
