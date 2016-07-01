/**
 *  Application Programming Interface
 *
 *  APIs are documented by the W3C World Wide Web Consortium
 *  JavaScript shims can help when necessary.
 *
 *  Enable software components to communicate with each other.
 *  - adding, changing or removing page elements.
 *  - moving, resizing or transforming elements.
 *  - manipulating forms and user input.
 *  - make server requests within the page. Page can fetch information from the server and display it without doing a
 *    full refresh.
 *  - store data locally including cookies and HTML5 data stores.
 *  - audio, video, canvas, geolocation, and file handling.
 */

/**
 * Window Object
 *  1. When we refer to a variable or function it looks within the local scope first. If it is not found there it works up
 *  the prototype chain until it reaches the window object.
 *  2. All global variables and functiona are part of the window object.
 *  3. There are several dozen window properties and functions we can use.  The majority concern controlling the
 *     browser window.
 */
function ShowMessage(msg) {
	document.getElementById("message").innerHTML += "<p>"+msg+"</p>";
}

ShowMessage("window.name: "+window.name);
ShowMessage("window.innerWidth: "+window.innerWidth);
ShowMessage("window.innerHeight: "+window.innerHeight);
ShowMessage("window.outerWidth: "+window.outerWidth);
ShowMessage("window.outerHeight: "+window.outerHeight);
ShowMessage("window.screenX: "+window.screenX);
ShowMessage("window.screenY: "+window.screenY);

window.scrollTo(0, 100);
ShowMessage("window.pageXOffset: "+window.pageXOffset);
ShowMessage("window.pageYOffset: "+window.pageYOffset);

var n = window.prompt("What is your name?");
ShowMessage("Hello "+n);

// print request that opens a printer dialog
// window.print();

// open a new window
var win = window.open("", "newwin", "width=300,height=300,menubar=0,toolbar=0,resizable=0,screenX=200,screenY=200");

win.document.body.innerHTML = "<p>Hello World!</p>";