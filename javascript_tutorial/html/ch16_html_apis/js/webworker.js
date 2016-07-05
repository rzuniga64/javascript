/**
 *  Web Worker
 *  It provides a way to implement threading in JavaScript. The browser in your JavaScript code runs on a single thread.
 *  code is doing something the browser waits until it can continue doing other tasks. Problems can occur if you are
 *  doing something intensive or complex. Web workers are not supported in IE9 and below. The web worker cannot access
 *  the DOM. It can't modify HTML. It cannot access global variables set in other JavaScript files.
 *  Access to some objects is restricted (window.location properties are read-only).
 *
 *  You can do complex calculations, make an AJAX request, or analyzing lots of data. You can work with a web worker
 *  by sending it a single parameter and can return only one parameter but that can be an object or an array.
 *
 *  Web workers are event driven so when the script loads it waits for a message using the onmessage event.  When a
 *  message is received from the calling page it can extract data from a property passed in the event object and then
 *  do some work. Once it is complete it sends a message back to the calling script using the postMessage method.
 *
 * This is a dedicated web worker since it is always linked to the script that called it.  There are also shared web
 * workers which allow any number of scripts to communicate with a single web worker.
 */
 self.onmessage = function(e) {

	var r = e.data;
	while (r-- > 0);

	self.postMessage("Finished counting from " + e.data);
};