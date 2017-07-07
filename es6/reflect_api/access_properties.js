/**
 *  Reflect methods are meant for use in a more dynamic environment where the access you want to access or the field
 *  you want to access are passed dynamically. So you couldn't use the normal dot notation. You could pass them as
 *  arguments to reflect and take advantage of the reflect API to get the property of an object you don't know at the
 *  time you write your code.  Reflect is a nice way to change properties that are dynamic.
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

let person = new Person('Roy', 52);

// 'name' accesses the getter or the property if there is no getter.
console.log(Reflect.get(person, 'name'));

let mau = {
    _name: "Mau Mau"
};

// The third argument is a receiver.  We are using the getter an in the getter we are using 'this' to access our
// property. Now we can override what 'this' should refer to. We are overriding it with the 'mau' object. So we're
// telling reflect.get that you want to access person name property but this should refer to the 'mau' object.  So now
// this refers to 'mau' and not Person.
// Reflect.get(object you want to refer to, property you want to refer to, what 'this' should refer to).
console.log(Reflect.get(person, 'name', mau));

// the setter overrides the _name property in 'mau' since that is our receiver. This name of this argument is pretty
// good. It's the receiver that will receive the 'this' keyword.
Reflect.set(person, 'name', 'Anna', mau);
console.log(Reflect.get(person, 'name', mau));

// Want to check if an object has a property.
console.log(Reflect.has(person, 'name'));

// Ownkeys allows you to find out which properties you have.
console.log(Reflect.ownKeys(person));