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
 *
 *  Location Object
 *  Allows you to parse the URL and also jump to other pages.
 *  It is a child property of the global window object. Strictly speaking we don't need to specify the window object
 *  first. However, it is required if you use any local variables named location.
 */

/**
 *  Returns an object which points to the functions that we want available outside the code.
 *  @return An alias name and the function name (kept the same here)
 */
function ShowMessage(msg) {
	document.getElementById("message").innerHTML += "<p>"+msg+"</p>";
}

ShowMessage("window.location: "+window.location);

ShowMessage("window.location.protocol: "+ window.location.protocol);
ShowMessage("window.location.hostname: "+ window.location.hostname); // domain
ShowMessage("window.location.port: "+ window.location.port);
ShowMessage("window.location.pathname: "+ window.location.pathname);
ShowMessage("window.location.search: "+ window.location.search); // anything in the URL that is part of the GET query string
ShowMessage("window.location.hash: "+ window.location.hash); // location of the document where we should be jumping

if (window.confirm("Open Google?")) {
	window.location = "http://www.google.com/";
}