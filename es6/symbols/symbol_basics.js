let symbol = Symbol('debug');
let anotherSymbol = Symbol('debug');
console.log(symbol);
console.log(typeof symbol);
console.log(symbol == anotherSymbol);  // symbols stand for unique ids so false

let obj = {
    name: 'Roy',
    [symbol]: 22
};

console.log(obj);   // symbol is not printed out
console.log(obj[symbol]);