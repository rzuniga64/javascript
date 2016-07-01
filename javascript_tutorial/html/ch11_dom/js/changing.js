/**
 * Document Object Model
 * One of the window Objects core properties. It is responsible for handling all content update requests.
 * Used to parse HTML and store HTML documents in memory.
 * Browsers internal representation of an HTML document is a tree. The 'html' tag is the root element. It has child
 * nodes 'head' and 'body'. Any node can have any number of child nodes but it can only have one parents, except for
 * the 'html' node.
 *
 * Selectors
 */

var p = document.getElementById("myelement");
console.log(p.childNodes[0].nodeValue);
console.log(p.firstChild.nodeValue);
//p.firstChild.nodeValue = "I've changed!";
p.textContent = "I've changed again!";

// Non-standard DOM methods supported by all browsers
// innherHTML also accepts HTML
// This inserts a new node into the DOM
p.innerHTML = "<em>I've changed yet again!</em>";

// There is an outerHTML property
// The p variable no longer references a node on the page
// now we have a div rather than a p tag
p.outerHTML = "<div>I've removed the p tag!</div>";