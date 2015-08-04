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