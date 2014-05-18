var p1 = document.getElementById("p1");
var p2 = document.getElementById("p2");

//p1.parentNode.removeChild(p1);
//p2.parentNode.removeChild(p2);

//var article = document.getElementsByTagName("article")[0];

//while (article.childNodes.length) {
//    article.removeChild(article.lastChild);
//}

// new node, then node we want to replace
// p2 can't exist in two places so the original copy is removed from the DOM
// the result is that p1 disappears and p2 moves into it's place
var article = document.getElementsByTagName(p2, p1);