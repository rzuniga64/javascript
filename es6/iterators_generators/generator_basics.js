/**
 *  By running a generator we get back an iterator, an object through which
 *  we can loop. Allows us to create logic contained in a function to yield
 *  different values and then use an iterator to iterate through the values
 *  the generator gives us.
 */
function *select() {
    yield 'House';
    yield 'Garage';
}

let it = select();
console.log(it.next());
console.log(it.next());
console.log(it.next());