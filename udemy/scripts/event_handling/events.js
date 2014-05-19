// events and handlers
// Don't ever use inline javascript.

// find first link on the page
var link = document.getElementsByTagName("a")[0];

// MyEventHandler is just a reference to the function.
// The function is run when the link is clicked.
// We don't add parenthesis to the function call because
// that would run it immediately and the onclick handler
// wouldn't be applied.

// Instead of onclick use addEventListener
// Older editions of IE do not support addEventListener
// delegate event handler
link.addEventListener( "click", MyEventHandler );


// event handler
// e contains properties about the methods
// and events that we can run.
// Two of the most useful properties are
// 'target' is the element which the event is currently being applied to
// 'currentTarget' is the element that had the event applied
function MyEventHandler(e) {

    //console.log(e.currentTarget); // will return a node that matches the 'link' node
    // the reason this is useful is because you can
    // use the event handler for any link and the currentTarget
    // would tell you which link was clicked.
	alert("ouch!");
	e.preventDefault();
}