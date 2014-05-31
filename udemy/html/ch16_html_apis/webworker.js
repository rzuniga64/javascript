// web worker
// provides a way to implement threading in JavaScript
// The web worker cannot access the DOM.
// Can't modify HTML page within web worker code
// cannot access global varaibles set in other JavaScript files
// access to some objects is restricted (window.location properties are read-only)
// you can work with a web worker by sending it a single parameter
// and can return only one parameter but that can be an object or an array

// web workers are event driven so when the script loads it waits for a message
// using the onmessage event.  When a message is received from the calling page
// it can extract data from a property passed in the event object and then
// do some work. Once it is complete it sends a message back to the calling
// script using the POST message method.

// This is a dedicated web worker since it is always linked to the script
// that called it.  There are also shared web workers which allow any
// number of scripts to communicate with a single web worker.
self.onmessage = function(e) {

	var r = e.data;
	while (r-- > 0);

	self.postMessage("Finished counting from " + e.data);
	
};