// In ES6 you can default values to parameters.
function isEqualTo(number, compare = 0) {

    return number == compare;
}

//console.log(isEqualTo(10, 10));
console.log(isEqualTo(10));

function isEqual2(number, compare = 10) {

    return number == compare;
}

console.log(isEqual2(11));

function isEqual3(number, compare = number) {

    return number == compare;
}

console.log(isEqual3(11));

let a = 100;
function isEqual4(number, compare = a) {

    return number == compare;
}

console.log(isEqual4(11))