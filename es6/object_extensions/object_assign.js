var obj1 = {
    a: 1
}

var obj2 = {
    b: 2
}

// merge two objects together with assign.
var obj = Object.assign(obj1, obj2);

console.log(obj);

class Obj3 {
    constructor() {
        this.a = 1;
    }
}

class Obj4 {
    constructor() {
        this.b = 2;
    }
}

var obj3 = new Obj3();
var obj4 = new Obj4();

// first object passed as a parameter is the base object. The second object is merged with the first.
var obj5 = Object.assign(obj3, obj4);

console.log(obj5 instanceof Obj3);
console.log(obj5 instanceof Obj4);
console.log(obj5.__proto__ === Obj3.prototype);
console.log(obj5.__proto__ === Obj4.prototype);
console.log(obj5.__proto__ === Object.prototype);
console.log(obj5);

var object = Object.assign({}, obj1, obj2);
console.log(object.__proto__ === Object.prototype);
