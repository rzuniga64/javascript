// google well known symbols
class Person{ }

Person.prototype[Symbol.toStringTag] = 'Person'; // not a function but a symbol
let person = new Person();
console.log(person);

let numbers = [1, 2, 3];
// yields a symbol which is registers as a property in my array object
numbers[Symbol.toPrimitive] = function() {
    let sum = 0;
    for (number of numbers) {
        sum += number;
    }
    return sum;
};
console.log(numbers + 1);