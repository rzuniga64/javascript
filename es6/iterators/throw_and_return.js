/**
 * The generator here is handling state for us.
 * @param end
 */
function *gen(end) {
    for (let i = 0; i < end; i++) {
        try {
            yield i;
        } catch (e) {
            console.log(e);
        }
    }
}

let it = gen(2);

console.log(it.next());
console.log(it.throw("An error occurred"));
console.log(it.next());

let it2 = gen(2);
console.log(it2.next());
console.log(it2.return("100"));
console.log(it2.next());