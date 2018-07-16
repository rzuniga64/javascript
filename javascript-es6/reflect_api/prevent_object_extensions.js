/**
 *  We don't want any part of our code to add properties.
 */

class Person {

    constructor(name, age ) {

        // create the properties 'name and 'age.
        this._name = name;
        this.age = age;
    }

    // access the property 'nam'.
    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }
}

let mau = {

    _name: 'MauMau'
};

let person = new Person('Raul', 27);

console.log(Reflect.isExtensible(person));
Reflect.preventExtensions(person);
console.log(Reflect.isExtensible(person));

Reflect.defineProperty(person, 'hobbies', {
    writable: true,
    value: ['Sports', 'Cooking'],
    configurable: true
});

console.log(person.hobbies);
