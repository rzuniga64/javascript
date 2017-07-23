class Person{

    constructor(name) {
        // _name is not private and is still accessible from outside.
        this._name = name;
    }

    get name() {
        return this._name.toUpperCase();
    }

    set name(value) {
        if (value.length > 2) {
            this._name = value;
        } else {
            console.log('Rejected');
        }
    }
}

let person = new Person('Roy');
console.log(person);
person.name = "Ro";
person.name = 'Anna';
console.log(person.name);
