// ES5
function Person1() { }

var person1 = new Person1();

// ES6
class Person2{

    constructor(name) {
        this.name = name;
    }

    greet() {
        console.log(this.name);
    }
}

let person2 = new Person2('Max');
person2.greet();

// What is prototype of this person2 that we created here?
console.log(person2.__proto__);
console.log(person2.__proto__ === Person2.prototype);