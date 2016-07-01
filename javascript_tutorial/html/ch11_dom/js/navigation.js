/**
 * Document Object Model
 * One of the window Objects core properties. It is responsible for handling all content update requests.
 * Used to parse HTML and store HTML documents in memory.
 * Browsers internal representation of an HTML document is a tree. The 'html' tag is the root element. It has child
 * nodes 'head' and 'body'. Any node can have any number of child nodes but it can only have one parents, except for
 * the 'html' node.
 */
console.clear();
var n = document.getElementsByTagName("ul")[0];
console.log( "ul node", n);

console.log( "nodeName", n.nodeName );
console.log( "nodeType", n.nodeType );

console.log( "parentNode", n.parentNode );

console.log( "childNodes", n.childNodes );
console.log( "childNodes.length", n.childNodes.length );

console.log( "li childNodes", n.getElementsByTagName("li") );
console.log( "real childNodes", ElementNodes(n.childNodes) );

// return real DOM nodelist
function ElementNodes(nodelist) {
    var eNodes = [];

    for (var i=0, j=nodelist.length; i < j; i++) {
        if (nodelist[i].nodeType == 1)  // look for real element( nodeType ==1)
            eNodes.push(nodelist[i]);
    }

    return eNodes;
}

 //console.log( "previousSibling", n.previousSibling );
// console.log( "nextSibling", n.nextSibling );

// return real sibling (or null)
function Sibling(node, type) {

    do {
        node = node[type];
    } while (node && node.nodeType != 1);

    return node;
}

console.log( "real previousSibling", Sibling(n, "previousSibling") );
console.log( "real nextSibling", Sibling(n, "nextSibling") );


