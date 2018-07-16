/**
 *  The Proxy API expects two arguments, the target, and the handler which contains the logic of our proxies, the logic
 *  or our wrapper.
 *
 *  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy
 */

let person = {
    age: 27
};

// This handler can be used on any object. It is not bound to a certain class.  It checks if the property exists on
// ANY object. It is not bound to any class.
let handler = {
    get: function(target, name) {
        return name in target ? target[name] : 'Non-existant'
    }
};

// Calling on the proxy itself which acts as a wrapper. This is like calling on the object itself. but with an extra
// layer in between which contains traps.
let proxy = new Proxy(person, handler);

console.log(proxy.age);
console.log(proxy.name);