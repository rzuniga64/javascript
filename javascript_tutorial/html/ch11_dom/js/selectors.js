/**
 * Document Object Model
 * One of the window Objects core properties. It is responsible for handling all content update requests.
 * Used to parse HTML and store HTML documents in memory.
 * Browsers internal representation of an HTML document is a tree. The 'html' tag is the root element. It has child
 * nodes 'head' and 'body'. Any node can have any number of child nodes but it can only have one parents, except for
 * the 'html' node.
 *
 * Selectors
 * document.getElementById("element");
 * document.getElementsByTagName("element");
 * document.getElementsByClassName("element");
 * document.querySelector("element");
 * document.querySelectorAll("element");
 */

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