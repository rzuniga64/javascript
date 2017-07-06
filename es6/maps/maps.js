/**
 * Maps avoid having to store object.
 * Instead you store key-value pairs.
 */

let cardAce = {
    name: 'Ace of Spades'
};

let cardKing = {
    name: 'King of Clubs'
}

let deck = new Map();
// let deck - new Map([['as', cardAce, []]);
deck.set('as', cardAce);
deck.set('kc', cardKing);

console.log('size of deck: ' + deck.size);

deck.set('as', cardAce);

//size is still 2
console.log('size of deck: ' + deck.size);

console.log(deck.get('as'));
console.log(deck.get('kc'));

deck.delete('as');
// undefined
console.log(deck.get('as'));

// remove all key value pairs
deck.clear();
console.log(deck.get('kc'));

deck.set('as', cardAce);
deck.set('kc', cardKing);
console.log(deck.keys());

// print keys
for (key of deck.keys()) {
    console.log(key);
}

// print values
for (value of deck.values()) {
    console.log(value);
}

// print each key-value pair. Thjs will be an array.
for (entry of deck.entries()) {
    console.log(entry);
}

for (entry of deck) {
        console.log(entry);
    }