/**
 *  Scalable Vector Graphics - good for charts, graphs, and logos.
 *  Vector graphics better than bitmaps.  Rather than drawing pixels vectors specify shapes.
 *  SVGs can be shown at any size and won't lose their quality.
 *  SVGs are simply an XML document containing drawing commands.
 *  You can draw them outside of JavaScript with programs such as InkScape or you can manipulate them on the server
 *  using php, etc.
 *  It exposes a document object model so we can manipulate it musch the same as we do with HTML>
 */

var mysvg = document.getElementById("mysvg");
//we need to get the content which allows us to manipulate the DOM nodes
var svg = mysvg.contentDocument;
// find the black line by its id
var line = svg.getElementById("line");

/**
 *  We are using a namespace that is different than our HTML. The first argument is normally the namespace but we can
 *  use null because we've already referenced our SVG. Let's do some animation with JavaScript using a self executing
 *  anonymous function. Use arguments.callee to reference the anonymous function. SVG has its own animate functions.
 *
 *  Method changes the value of y and increases both sides of the line.  If y < 290 it uses setTimeout to call itself.
 *  Since the function doesn't have a name we can use arguments.callee to reference it.
 */

// line.setAttributeNS(null, "y1", 290);
var y = 10;
(function() {
    y += 2;
    line.setAttributeNS(null,"y1",y);
    line.setAttributeNS(null,"y2",300-y);
    if (y < 290) setTimeout(arguments.callee, 20);
}());

// create rectangle
// createElementNS must be passed the svg namespace
var rect = svg.createElementNS("http://www.w3.org/2000/svg", "rect");

rect.setAttributeNS(null,"x",100);
rect.setAttributeNS(null,"y",125);
rect.setAttributeNS(null,"width",100);
rect.setAttributeNS(null,"height",50);
rect.setAttributeNS(null,"fill","#393");

svg.getElementById("main").appendChild(rect);