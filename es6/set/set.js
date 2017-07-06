/**
 *  A Set is kinda of an array that holds unique values.
 */

let set = new Set([1, 1, 1 ]);

set.add(2);
set.add(2);

for (element of set) {
    console.log(element);
}

set.delete(1);
for (element of set) {
    console.log(element);
}

console.log(set.has(2));