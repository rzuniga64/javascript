// We want two symbols that share the same id
let symbol1 = Symbol.for('age');
let symbol2 = Symbol.for('age');

console.log(symbol1 == symbol2);

/**
 * When do I want a unique id and when do I want to share ids?
 * Id depends on your needs. If you have a function that gets an object as an argument then adds a symbol property to it
 * then you might want to have a certain key so it is registered in the global registry of your app. So outside of your
 * function you also have a chance at accessing this symbol in another place of your app.
 *
 * In other cases you might want a unique id because you only use it in one place.
 */

let person = {
    name: 'Roy',
    age: 30
};

function makeAge(person) {
    let ageSymbol = Symbol.for('age'); // ageSymbol not accessible outside of function it refers to same key as symbol1
    person[ageSymbol] = 27;
}

makeAge(person);
console.log(person[symbol1]);   // prints 27
console.log(person["age"]);     // prints 30