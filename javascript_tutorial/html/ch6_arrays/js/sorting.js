// JavaScript sorting
var msg = document.getElementById("message");

var v1 = [30,2,1,9,15];
msg.innerHTML += "<p><strong>Original order:</strong> [" + v1 + "]<p>";

// sort converts every element of the array into a string
v1.sort();
msg.innerHTML += "<p><strong>After sorting:</strong> [" + v1 + "]<p>";

// anonymous ch5_functions
// functions are just another value type so we don't really need named functions here.
v1.sort(function(a,b) {return a-b;});
msg.innerHTML += "<p><strong>Low to High sorting:</strong> [" + v1 + "]<p>";

v1.sort(function(a,b) {return b-a;});
msg.innerHTML += "<p><strong>High to Low sorting:</strong> [" + v1 + "]<p>";

var v2 = ["dog", "buffalo", "cat", "zebra", "frog", "antelope", "aardvark", "elephant"];

msg.innerHTML += "<p><strong>Original order:</strong> [" + v2 + "]<p>";
v2.sort()
msg.innerHTML += "<p><strong>Alphabetical order:</strong> [" + v2 + "]<p>";
v2.sort(function(a,b) {return a.length - b.length;});
msg.innerHTML += "<p><strong>String length sort:</strong> [" + v2 + "]<p>";
v2.sort