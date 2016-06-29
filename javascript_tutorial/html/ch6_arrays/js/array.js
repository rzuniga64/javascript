/**
 * Arrays grow dynamically. You don't need to specify the initial size of the array. Its size will increase as you add
 * items.
 */
var v = [10,20,30,40,50,10,5,20,0,100,100,2,20,50];
var a = ["a", "b", "c", "d", "e"];
var b = ["f", "g"];

var items = v.length;
var total = 0;
for (var i = 0; i < items; i++)
	total += v[i];

if (items != 0)
    var mean = total / items;
console.log("array v = " + v);
console.log("mean = " + mean);
v.push(44);
console.log("push 44 into array v = " + v);
console.log("pop on v: " + v.pop()); // pop() on an empty array returns undefined.
console.log("array v = " + v);
console.log("length of v: " + v.length);

a.unshift("z");	// unshift() prepends one or more items to the start of the array
console.log("unshift z into array a = " + a);
console.log("length of a: " + a.length);

console.log("shift on a: " +a.shift());	// shift() returns the first item from the array and shrinks it
console.log("array a = " +a);

var array1 = a.concat(b);
var array2 = array1.concat(v);
console.log("array1 = " + array1);
console.log("array2 = " + array2);
console.log("concat array1 + array2 = " + array2);
var array3 = v.concat(a);
console.log("array3 = " + array3);
console.log("concat array3 = " + array3);

console.log("array a reversed = " + a.reverse());	// reverse the order of an array
a.reverse();
console.log("array a = " + a);

console.log("v.slice(2,5)  = " + v.slice(2,5));		// extract a section of an array
console.log("v.slice(2,-1) = " + v.slice(2, -1));	// slice elements 2 to 3 (index 4-1)

// splice adds and removes sections of array, "c" and "d" will disappear from array and in their place add "x", "y", "z"
console.log("a.splice(2, 2,'x','y','z') = " + a.splice(2,2,"x", "y", "z"));
console.log("array a = " + a);
console.log(a.join("-")); // join joins all array elements into a single string