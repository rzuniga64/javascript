let array1 = Array(5);
console.log(array1);

// Array.of
let array2 = Array.of(5, 10, 11);
console.log(array2);

// Array.from
let array3 = [10, 12, 15];
let newArray = Array.from(array3, val => val * 2);
console.log(newArray)

// Array.fill
array3.fill(10);
console.log(array3);

array3.fill(100, 1, 2);
console.log(array3);

// Array.find will stop after first match
array4 = [10, 12, 16];
console.log(array4);
console.log(array4.find(val => val >= 12));

var inventory = [
    {name: 'apples', quantity: 2},
    {name: 'bananas', quantity: 0},
    {name: 'cherries', quantity: 5}
];

// Function that gets fruit as input and we chack if this fruit has a name.
function findCherries(fruit) {
    return fruit.name === 'cherries';
}

// findCherries is a reference to the function. The function will be executed on each object of the array.  Each item
// will be passed the function as fruit.
console.log(inventory.find(findCherries));

// Array.copyWithin allows you to copy things around within an array.
let array = [1, 2, 3];
console.log(array.copyWithin(1,2));
// copyWithin alters existing array.
console.log(array);

// Copy array starting at index 0 ending at index 2 to index 1. Array is not big enough so its truncated.
console.log(array.copyWithin(1, 0, 2));

// Array.entries
let array5 = [1, 2, 3];
let it =array5.entries();
for (let element of it ) {
    console.log(element);
}