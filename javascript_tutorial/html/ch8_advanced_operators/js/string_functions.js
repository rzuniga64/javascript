// JavaScript String Functions
var msg = document.getElementById("message");

// toString
var a = [1, 2, 3];
msg.innerHTML += "<p>a.toString = "+ a.toString() +"</p>";

// identical strings
var i = 99;
msg.innerHTML += "<p>a.toString = "+ i.toString() +"</p>";
msg.innerHTML += "<p>a.toString = "+ String(i) +"</p>";
msg.innerHTML += "<p>a.toString = "+ i + '' +"</p>";

// create from Unicode
var s = String.fromCharCode(65, 66, 67);    // "ABC"
msg.innerHTML += "<p>String.fromCharCode(65, 66, 67) = "+ s +"</p>";

//length
var s= "abcde";
msg.innerHTML += "<p>length of 'abcde' = "+ s.length +"</p>";

// uppercase/lowercase
var t = "AbCdE";
msg.innerHTML += "<p>s.toLowerCase = "+ t.toLowerCase() +"</p>";
msg.innerHTML += "<p>a.toLowerCase = "+ t.toUpperCase() +"</p>";

// joining string
var i = "12345";
msg.innerHTML += "<p>join 'abcde' + '12345' = "+ s + i +"</p>";
// concat method
msg.innerHTML += "<p>concat method = "+ s.concat(i) +"</p>";

// extract a character
msg.innerHTML += "<p>s.charAt(0) = "+ s.charAt(0) +"</p>"; //'a'
//string as arrays of characters
msg.innerHTML += "<p>s[0] = "+ s[0] +"</p>";
// character's Unicode value
msg.innerHTML += "<p>s.charCodeAt(0) = "+ s.charCodeAt(0) +"</p>";

// substring
var x = "abracadbra";
msg.innerHTML += "<p>x.indexOf('ab')) = " + x.indexOf('ab') + "</p>";    // 0, find location of substring (from start)
msg.innerHTML += "<p>x.indexOf('cd')) = " + x.indexOf('cd') + "</p>";    // -1, no match
msg.innerHTML += "<p>x.lastIndexOf('ab')) = " + x.lastIndexOf('ab') + "</p>"; // 7, find location of substring (from end)

// split
var y = "one,two,three";
msg.innerHTML += "<p>y.split(',') = " + y.split(',') + "</p>"; // split a string into an array
msg.innerHTML += "<p>y.split('',3) = " + y.split('',3) + "</p>"; // split a string into a limited size array

// slice, substring, substr
msg.innerHTML += "<p>y.slice(4,7) = " + y.slice(4,7) + "</p>"; // two, extract using slice
msg.innerHTML += "<p>y.slice(4,-6) = " + y.slice(4,7) + "</p>"; // two, slice with negative values
msg.innerHTML += "<p>y.substring(4,7) = " + y.substring(4,7) + "</p>"; // two
msg.innerHTML += "<p>y.substr(4,3) = " + y.substr(4,3) + "</p>"; // two