/**
 * Generators allow us to manage state. We could also do an asynchronous task
 * and yield those results step by step like fetching something from a server.
 * We can yield those results and with our iterator use them and take advantage
 * of the step by step approach.
 * @type {{[Symbol.iterator]: gen}}
 */
let obj = {
    [Symbol.iterator]: gen
};

function *gen() {
    yield 1;
    yield 2;
}

for (let element of obj) {
    console.log(element);
}