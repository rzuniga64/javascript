// Creating new nodes
var article = document.getElementsByTagName("article")[0];

// append a p element to the last child of the article element
var p = article.appendChild( document.createElement("p") );

// append text, returns the node being added, the paragraph node
p.appendChild( document.createTextNode("My "));
console.log(p);

// append another child but instead of creating a new element we create a new TextNode
// append a strong element with text inside of it.
// appendChild returns the node that's been added so now that we have a node
// we can add another appendChild method on it.
p.appendChild( document.createElement("strong") ).appendChild( document.createTextNode("third") );


// append text
p.appendChild( document.createTextNode(" paragraph.") );

// We can reference attributes as a property of the HTML node
// But this is inefficient as we are making small changes to the DOM
// and for every change the browser needs to refresh the layout of the page
// modify attributes
p.id = "p3";
p.setAttribute("style", "font-style:italic;");

// Build the new nodes in memory and add them to the DOM when they are ready
// create document fragment
var f = document.createDocumentFragment();
var q = f.appendChild( document.createElement("p") );
q.appendChild( document.createTextNode("My "));
q.appendChild( document.createElement("strong") ).appendChild( document.createTextNode("fourth") );
q.appendChild( document.createTextNode(" paragraph.") );
q.id = "p4";

// append fragment as first child
// article.appendChild(q);
//article.insertBefore(q, article.firstChild);
article.insertBefore(q, article.getElementsByTagName("p")[2]);

// We have this fragment in memory.  Can we use it in multiple places?
// The answer is no because the fourth paragraph was inserted the top
// but when we said insert it before paragraph 3 it actually moved it
// to the location which was paragraph 3

// A node is a single reference to a HTML DOM object
// It cannot exist in two places at the same time
// When you create new nodes in the DOM or in a fragment they can only be used once.
// We can fix this by cloning nodes and creating separate duplicates

// clone node and children and modify
var r = q.cloneNode(true);
r.id = "p5";
r.appendChild( document.createTextNode(" Again.") );

// append before third p tag
article.insertBefore(r, article.getElementsByTagName("p")[2]);
