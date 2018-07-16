class Person{

    constructor(name) {
        this.name = name;
    }

    greet() {
        console.log('Hello, my name is ' + this.name + ' and I am ' + this.age);
    }
}

/**
 *  'extends' allows use to use all the properties and methods of the parent class.
 *  I can now add my own properties or methods or override the parent properties and functions.
 */
class Roy extends Person {

    // To use the constructor of a class that extends another class you have to call the constructor in parent class.
    constructor(name, age) {
        super(name);
        this.age = age;
    }

    greetTwice() {
        // Use this class
        this.greet();
        this.greet();
        // Use parent class
        super.greet();
    }
}

let person = new Person('Roy');
person.greet();

// The subclass has access to parent class properties and methods.
let roy = new Roy('Roy', 27);
roy.greet();

roy.greetTwice();

// What is the prototype of Roy?
console.log(roy.__proto__);
console.log(roy.__proto__ === Roy.prototype);
// The prototype of Roy is Roy.prototype though we are inheriting everything from the Person class
console.log(roy.__proto__ === Person.prototype);