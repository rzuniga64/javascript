let person = {
    age: 27
};

let handler = {
    get: function(target, name) {
        return name in target ? target[name] : 'Non-existant'
    }
};

// Wrapping an empty object instead of a person.
let proxy = new Proxy( {}, handler);

// Set the proxy as a prototype of the person. So the prototype of the person is wrapped by proxy, not the object itself.
Reflect.setPrototypeOf(person, proxy);

// By making the handler a prototype i can directly access the object instead of the proxy.
// The disadvantage is if there are traps which I want to apply even to individual objects that wouldn't work.
console.log(person.age);
