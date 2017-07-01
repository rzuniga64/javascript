let number = NaN;
let finite = 10000000;
let infinity = Infinity;
let float = 10.1;

console.log(Number.isNaN(number));
console.log(Number.isFinite(finite));
console.log(Number.isFinite(infinity));
console.log(Number.isInteger(finite));
console.log(Number.isInteger(float));