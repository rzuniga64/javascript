/**
 *  Reflect API gives us tools to evaluate our code during rutime. For example, to find out if the object has a specific
 *  property.  It offers a lot of built-in static methods to create object, create propterties, configure properties to
 *  call functions.
 *
 *  1. It bundles all of these things.
 *  2. It introduces some new features, some new methods which allows us to do things we weren't able to do before.
 *  3. Works well with Proxy API and gives us a way to interact with that API.
 *
 *  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Reflect
 */

class Person {

    constructor(name) {
        this.name = name;
    }
}

// constructor function
function TopObj() {
    tis.age = 27;
}

// Reflect.construct(class, [constructor_params], constructor_function)
// third parameter overrides the prototype of person Object. So we changed the prototype of our object.
let person = Reflect.construct(Person, ['Roy'], TopObj );

console.log(person.__proto__ == TopObj.prototype);