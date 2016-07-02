/**
 * Document Object Model
 * One of the window Objects core properties. It is responsible for handling all content update requests.
 * Used to parse HTML and store HTML documents in memory.
 * Browsers internal representation of an HTML document is a tree. The 'html' tag is the root element. It has child
 * nodes 'head' and 'body'. Any node can have any number of child nodes but it can only have one parents, except for
 * the 'html' node.
 *
 * Creating and cloning elements
 */
var article = document.getElementsByTagName("article")[0]; // returns a node collection

// append a p element to the last child of the article element
var p = article.appendChild( document.createElement("p") );

// Append another child but instead of creating a new element we create a new TextNode,append text,
// Returns the node being added, the paragraph node
p.appendChild( document.createTextNode("My "));

// Append a strong element with text inside of it.
// AppendChild returns the node that's been added so now that we have a node we can add another appendChild method on it.
p.appendChild( document.createElement("strong") ).appendChild( document.createTextNode("third"));
p.appendChild( document.createTextNode(" paragraph.") );

// We can reference attributes as a property of the HTML node but this is inefficient as we are making small changes to
// the DOM and for every change the browser needs to refresh the layout of the page.
p.id = "p3";
p.setAttribute("style", "font-style:italic;");

// Build the new nodes in memory and add them to the DOM when they are ready.
// First create a DOCUMENT FRAGMENT in memory. It is an empty holder that is expecting a DOM node.
// But we can add child nodes as we've done before.
var f = document.createDocumentFragment();
var q = f.appendChild( document.createElement("p") );
q.appendChild( document.createTextNode("My "));
q.appendChild( document.createElement("strong") ).appendChild( document.createTextNode("fourth") );
q.appendChild( document.createTextNode(" paragraph.") );
q.id = "p4";

// append fragment as first child: article.appendChild(q); article.insertBefore(q, article.firstChild);
article.appendChild(q); // the only point the browser redrew the page was at this point
//article.insertBefore(q, article.getElementsByTagName("p")[2]);

/**
 *  We have this fragment in memory.  Can we use it in multiple places? The answer is no because the fourth paragraph
 *  was inserted at the top but when we said insert it before paragraph 3 it actually moved it to the location which was
 *  paragraph 3.
 *
 * A node is a single reference to a HTML DOM object. It cannot exist in two places at the same time. When you create
 * new nodes in the DOM or in a fragment they can only be used once. We can fix this by cloning nodes and create
 * separate duplicates
 */
// clone node and children and modify
var r = q.cloneNode(true);
r.id = "p5";
r.appendChild( document.createTextNode(" Again.") );

// append before third p tag
article.appendChild(r);
//article.insertBefore(r, article.getElementsByTagName("p")[2]);
