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

Reflect.defineProperty(person, 'hobbies', {
    writable: true,
    value: ['Sports', 'Cooking'],
    configurable: true
});

console.log(person.hobbies);
person.hobbies = ['Nothing'];
console.log(person.hobbies);

Reflect.deleteProperty(person, 'age');
console.log(person);