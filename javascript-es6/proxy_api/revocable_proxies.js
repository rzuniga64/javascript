/**
 *  Revocable proxies means after you set up a such a proxy as a wrapper you can remove that functionality or make sure
 *  the proxy is no longer active.
 *  @param message
 */
let person = {
    age: 27
};

let handler = {
    get: function(target, property) {
        return Reflect.get(target, property);
    }
};

// Proxy.revocable() returns an an object with a proxy and a revoke field.
let {proxy, revoke} = Proxy.revocable(person, handler);

console.log(proxy.age);

revoke();
console.log(proxy.age);