/**
 *  Iterator: All objects that know how to access all values in a collection one
 *  at a time. You can make any object iterable.
 *
 *  Generator: A function that doesn't necessarily run to the end when you
 *  execute it. Yields the next value the next you call it.
 */

let array = [1, 2, 3];

console.log(typeof array[Symbol.iterator]());

let it = array[Symbol.iterator]();
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());