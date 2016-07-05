/**
 *  Session & Local storage
 *
 *  This API is much easier to use than cookies. Local storage is a store of name-value pairs provided to  your browser.
 *  You can think of it as a client-side only database. The name-value pairs are only available to JavaScript and, unlike
 *  cookies, the data isn't uploaded during every HTTP request. It is good for storing information that is specific to
 *  your client side operation.
 *
 *  It is domain specific but unlike cookies there are no path settings.
 *  There are no restriction on the number of values or the size of the data.
 *  Can be used when your application goes offline and loses its connection to the internet.
 *
 *  There are two object we can use
 *  1. Session storage: temporary session storage, particular to a browser tab or window. The value is lost when tab
 *                      or window is closed.
 *                      or window is closed.
 *  2. Local storage:   permanent storage, values persist even when tabs or windows are closed.
 *
 *  Both support the following properties and methods:
 *  setItem(name, value)	- add or update a value in the store
 *  getItem(name)			- get a named value from the store
 *  removeItem(name)		- remove a named value from the store
 *  length					- number of values stored
 *  key(index)				- name of the key at the index
 *  clear()					- clear the store
 */

// session storage: data is never sent to the server so it is not a direct replacement for cookies
var ss = window.sessionStorage;	    // temporary session storage
var ls = window.localStorage;		// permanent storage

ss.setItem("a", 100);
ss.setItem("b", 200);
ss.setItem("c", 300);

ls.setItem("x", 1000);
ls.setItem("y", 2000);
ls.setItem("z", 3000);

ss.removeItem("b");

//ls.clear();

// show sessionStorage values
var k, msg = "<h2>sessionStorage (" + ss.length + " items)</h2>";
for (k in ss)
	msg += "<p>" + k + " = " + ss.getItem(k) + "<p>";

// show localStorage values
msg += "<h2>localStorage (" + ls.length + " items)</h2>";
for (k in ls)
	msg += "<p>" + k + " = " + ls.getItem(k) + "<p>";

// output all values
document.getElementById("output").innerHTML = msg;