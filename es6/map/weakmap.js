/**
 *  In a Weakmap your key many only be a JavaScript object.
 *  The term Weakmap means it holds weak references to the entries in the map. This, in turn, means it is able to get
 *  rid of those entries if they are not used anymore throughout your code so they can be garbage collected. For dead
 *  behaviour it needs to have reference types as keys because those reference types are the ones getting garbage
 *  collected. They are the one which would take up more memory probably. So garbage collection in JavaScript or browser
 *  running JavaScript will go over your code and when this code run it will identify which objects in your code aren't
 *  used anymore in order to get rid of them in memory.  If you store an object in an array or map then it is
 *  theoretically not available to be cleaned up because its still stored and it doesn't really know if you're
 *  accessing it againt or it can't really release it. The WeakMap allows us to do just taht by using objects as keys.
 *  It makes sure that it can keep track of those object if those object are used anymore in your code.  If you're
 *  trying to get an item by key by this object key somewhere in the code. But it will delete this entry from the map
 *  if you are no longer using it.  This means it can't be iterated because JavaScript doesn't know the size of it.
 */

let cardAce = {
    name: 'Ace of Spades'
};

let cardKing = {
    name: 'King of Clubs'
}

let key1 = {a:1};
let key2 = {b:2};

let deck = new WeakMap();
deck.set(key1, cardAce);
deck.set(key2, cardKing);

// Pring object because you are using it. But you can't use size property or for of loop.
console.log(deck.get(key1));