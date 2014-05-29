// a special language for describing patterns in strings
// very succinct and very powerful
// can be difficult to understand
// Javascript supports Perl-Compatible Regular Expressions (PCRE)

// validate an email address
// /^[a-z0-9._%-]+@[a-z0-9.-]+\.[a-z]{2,4}$/
// regex begins and ends with /
// ^ look at start of string
// $ look at end of string
// [a-z0-9._%-] denotes a set of valid characters
// + means we can have one or more of those characters
// @[a-z0-9.-]+ denotes the domain
// \. an escape character to get a perios.  A period
// normally means that it can be any character
// [a-z]{2,4} denotes the domain suffix (.com, .net)

//Defining regex in Javascript
// string: JavaScript
// regex: /Java\s*Script/ig;
//
// \s denotes a whitespace character
// * denotes any number of \s characters
// i means the expression is not case sensitive
// g means global.  We want to locate every instance, not just the first.

var regex = /Java\s*Script/ig;

// a regex ch7_objects allows you to build a regex object
// where what you are looking for could change
var regex = new RegExp("Java\s*Script", "ig");

var type = "Live";
var regex = new RegExp(type+"\s*Script", "ig");

// regex testing
var text = "Java script is not Java or Script. Javascript is a language in its own right.";
var regex = /Java\s*Script/ig;

console.log(regex.test(text)); // true

// regex searching: return first character location
console.log(text.search(regex));  // 0

//regex match: return array of matches
console.log(text.match(regex));     //{"Java script", "Javascript"}

//return array of substrings split at regex
console.log(text.split(regex));     //{"", " is not Java or Script. ", " is a language in its own right."}

// replace the regular expression
console.log(text.replace(regex, "JavaScript"));
//"JavaScript is not Java or Scxript. JavaScript is a language in its own right."

//  advanced regular expression replacing
var regex2 = /is not|is/ig;
console.log(text.replace(regex2, "<em>$1</em>"));
/*
    "Javascxript <em> is not </em> Java or Script.
    JavaScript <em>is</em> a language in its own right."
 */

// regex resources and tools: regex.larsolavtorvik.com






