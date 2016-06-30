var msg = document.getElementById("message");

//string conversion
var a = [1,2,3];
var s = a.toString();   // "1,2,3"
console.log(s);

var i = 99;
//identical strings
var s1 = i.toString();
var s2 = String(i);
var s3 = i + "";
console.log(s1);
console.log(s2);
console.log(s3);

//create from Unicode
var str2 = String.fromCharCode(65,66,67);
console.log(str2);

// length
var str3= "abcde";
console.log("length = " + str3.length);

var s = "AbCdE";
console.log(s.toLowerCase());
console.log(s.toUpperCase());

//examining individual strings
var str4 = "abcde";
//extract a character
console.log(str4.charAt(0));

//strings as ch6_arrays of characters
console.log(str4[0]);

//character's Unicode value
console.log(str4.charCodeAt(0));

//find location of substring (from start)
var str5 = "abracadabra";
console.log(str5.indexOf("ab")); //0 or -1 if not exist

//find location of substring (from end)
console.log(str5.lastIndexOf("ab"));

//split a string into an array
var str6 = "one,two,three";
console.log(str6.split(","));  //

//split a string into a limited size array
console.log(str6.split("",3));

//slice a string
var str7 = "one,two,three";
console.log(str7.slice(4,7));   //"two"

//slice with negative values
console.log(str7.slice(4,-6));  //"two"

//extract using substring
console.log(str7.substring(4,7));

//extract using substr
console.log(str7.substr(4,3));  //two


