/**
 * Document Object Model
 * One of the window Objects core properties. It is responsible for handling all content update requests.
 * Used to parse HTML and store HTML documents in memory.
 * Browsers internal representation of an HTML document is a tree. The 'html' tag is the root element. It has child
 * nodes 'head' and 'body'. Any node can have any number of child nodes but it can only have one parents, except for
 * the 'html' node.
 *
 * Removing nodes.
 */

var p1 = document.getElementById("p1");
var p2 = document.getElementById("p2");

//p1.parentNode.removeChild(p1);

//var article = document.getElementsByTagName("article")[0];

//while (article.childNodes.length) {
//    article.removeChild(article.lastChild);
//}

// New node, then node we want to replace.
// p2 can't exist in two places so the original copy is removed from the DOM
// the result is that p1 disappears and p2 moves into it's place
var article = document.getElementsByTagName("article")[0];
article.replaceChild(p2, p1);