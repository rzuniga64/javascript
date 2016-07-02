/**
 *  Browser Events and Handlers
 *  https://developer.mozilla.org/DOM_Client_Object_Cross-Reference/DOM_Events
 *
 *  What is an event?
 *  - hovering over an element  - clicking an element   - focusing a form field - typing a character
 *  - submitting a form         - scrolling the page    - resizing the window   - closing the page
 *  and more ...
 *
 *  Step 1: Event Registration  Step 2: Write an event handler      Step 3: Further actions/
 *  1. Identify the element     1. write a handler function         - disable default actions
 *  2. Identify the action      2. passed an event object to it     - prevent 'bubbling'
 *  3. Register a handler       3. analyze the event object         - deregister the event
 *                              4. perform the relevant actions
 *
 *  Any number of events can be applied to the same element.
 *  Different event handlers can be registered for the same event and event type.
 *  You can guarantee the order in which event handlers are fired.
 *  The Event object tells which element received the event. By registering a single event handler you can monitor
 *  every cell in a table by registering the parent element of all the cells.  This is called bubbling.
 *  Don't ever use inline javascript_examples. Don't mix JavaScript into your HTML>
 */
var link = document.getElementsByTagName("a")[0]; // find first link on the page

/** 
 *  MyEventHandler is just a reference to the function. The function is run when the link is clicked. 
 *  We don't add parenthesis to the function call because that would run it immediately and the onclick handler
 *  wouldn't be applied. Instead of onclick use addEventListener. Older editions of IE do not support addEventListener 
 *  delegate event handler.
 */
 link.addEventListener( "click", MyEventHandler ); // handler reference is a pointer to the function

/**
 *  event handler
 *  e contains properties about the methods and events that we can run.
 *  Two of the most useful properties are: 
 *  'target' is the element which the event is currently being applied to
 *  'currentTarget' is the element that had the event applied
 */
 function MyEventHandler(e) {

    //console.log(e.currentTarget); // will return a node that matches the 'link' node
    // the reason this is useful is because you can use the event handler for any link and the currentTarget
    // would tell you which link was clicked.
	alert("ouch!");
	e.preventDefault();
}