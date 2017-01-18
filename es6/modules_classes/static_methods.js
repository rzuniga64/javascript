// Static means you can access it without instantiating the class.]
// Great for helper classes where you want to bundle certain functionalities
class Helper {
   static log(message) {
        console.log(message);
    }
}

class Person{

    constructor(name) {
        this.name = name;
    }

    greet() {
        console.log('Hello, my name is ' + this.name + ' and I am ' + this.age);
    }
}

class Roy extends Person {

    constructor(name, age) {
        super(name);
        this.age = age;
    }
}

let roy = new Roy('Roy', 27);
roy.greet();
Helper.log('Logged');