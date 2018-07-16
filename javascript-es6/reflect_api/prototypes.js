/**
 *  Use Reflect.getPrototypeOf(person) to find out what is the prototype of an object.
 *  Reflect.setPrototypeOf(person) also allows you to change the prototype of an object.
 */
class Person {

    constructor(name) {
        this.name = name;
    }
}

let person = new Person();

Person.prototype.age = 27;

console.log(Reflect.getPrototypeOf(person));

let proto = {
    age: 30
}

// Reflect.setPrototypeOf(object of which I want to set prototype, what to set as a prototype).
Reflect.setPrototypeOf(person, proto);

console.log(Reflect.getPrototypeOf(person));