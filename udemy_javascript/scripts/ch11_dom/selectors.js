// Document Object Model selectors

console.log( "intro ID", document.getElementById("intro") );

console.log( "p tags", document.getElementsByTagName("p") );

// not supported by IE8-IE6
console.log( "highlight class", document.getElementsByClassName("highlight") );

// not supported by IE6-7
console.log( "ul > li", document.querySelector("ul > li") );
console.log( "ul > li", document.querySelectorAll("ul > li") );

// supported by all browsers regardless of age
var header = document.getElementsByTagName("header")[0];
var ptags = header.getElementsByTagName("p");
console.log( "header p", ptags );