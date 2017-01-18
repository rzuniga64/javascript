/**
 * Which built-in Objects may be extended? Have a look at the ES6 Compatibility Chart and scroll down to
 * "Subclassing": https://kangax.github.io/compat-table/es6/
 *
 * Extendable Built-in Objects.
 * Subclassing allows you to extend built-in objects and add your own functionality to them.
 */

class ConvertableArray extends Array {

    convert() {
        let returnArray = [];
        this.forEach(value => returnArray.push('Converted! ' + value));
        return returnArray;
    }
}

let numberArray = new ConvertableArray();
numberArray.push(1);
numberArray.push(2);
numberArray.push(3);

console.log(numberArray.convert());