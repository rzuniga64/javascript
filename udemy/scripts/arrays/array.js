var v = [10,20,30,40,50,10,5,20,0,100,100,2,20,50];
var a = ["a", "b", "c", "d", "e"];
var b = ["f", "g"];

var items = v.length;
var total = 0;
for (var i = 0; i < items; i++) {
	total += v[i];
}

var mean = total / items;
console.log("mean = " + mean);
console.log(v.pop());
v.push(44)
console.log(v.length);

// unshift() prepends one or more items to the start of the array
a.unshift("z");
console.log(a.length)
console.log(a);

// shift() returns the first item from the array and shrinks it
console.log(a.shift());
console.log(a);
// pop() on an empty array returns undefined.

// concat arrays
var array1 = a.concat(b)
console.log(array1);
var array2 = array1.concat(v)
console.log(array2);
var array3 = v.concat(a)
console.log(array3);

// don't use delete
// reverse the order of an array
console.log(a.reverse());
a.reverse();

//extract a section of an array
console.log(v.slice(2,5));

// slice elements 2 to 3 (index 4-1)
console.log(v.slice(2, -1));

// splice adds and removes sections of an array
// "c" and "d" will disappear from array and in their place add "x", "y", "z"
console.log(a.splice(2,2,"x", "y", "z"))
console.log(a);

// join joins all array elements into a single string
console.log(a.join("-"));