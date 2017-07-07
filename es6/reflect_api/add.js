/**
 *  Reflect API gives us tools to evaluate our code during runtime. For example, to find out if the object has a specific
 *  property.  It offers a lot of built-in static methods to create object, create properties, configure properties to
 *  call functions.
 *
 *  1. It bundles all of these things.
 *  2. It introduces some new features, some new methods which allows us to do things we weren't able to do before.
 *  3. Works well with Proxy API and gives us a way to interact with that API.
 *
 *  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Reflect
 */

// Reflect.apply() allows us to call methods on our objects.
class Person {

    constructor(name, age ) {
        this.name = name;
        this.age = age;
    }

    greet(prefix) {
        console.log(prefix + 'Hello, I am ' + this.name);
    }
}


let person = Reflect.construct(Person, ['Roy', 52]);

// Reflecct.apply(method, this_points_to, method_params)
// You can control what 'this' refers to which allows certain behaviors or to make sure that 'this' is referring to the
// right object.
Reflect.apply(person.greet, person, ['...'] );