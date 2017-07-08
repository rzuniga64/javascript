let person = {
    age: 27,
    aname: 'Roy'
};

let handler = {
    get: function(target, name) {
        return name in target ? target[name] : 'Non-existant'
    },
    set: function(target, property, value) {
        if (value.length >= 2) {
            Reflect.set(target, property, value);
        }
    }
};

let proxy = new Proxy(person, handler);
proxy.name = 'Anna';
console.log(proxy.age);
console.log(proxy.aname);