// The rest operator converts a list of numbers into an array of numbers
// Use in the list of arguments your function expects.

function sumUp(...toAdd) {
    console.log(toAdd);
    let result = 0;
    for (let i = 0; i < toAdd.length; i++) {
        result += toAdd[i];
    }
    return result;
}

console.log(sumUp(100, 10, 20));
