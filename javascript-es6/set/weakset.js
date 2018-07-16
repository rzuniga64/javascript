/**
 *  Each element of WeakSet must be an object.
 *  We can't iterate through it.
 *
 * @type {WeakSet}
 */

// This set will have three values because the second and third object have different values because we created a new
// object.
let set = new WeakSet([ {a:1}, {b:2}, {b:2} ]);

// The following is false because for object we only store pointers to places in memory where they actually live.
// Below we are creating a new object again for this specific object we are checking. It is not inside the set although
// it looks exactly the same.

console.log(set.has({b:2}));

let obj1 = {a:1};
let obj2 = {b:2};
let set2 = new WeakSet([obj1, obj2, obj2]);
console.log(set2.has(obj1));

set.add(obj1);
set.delete(obj1);