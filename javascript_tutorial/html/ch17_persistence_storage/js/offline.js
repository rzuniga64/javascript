/**
 *  Local storage used when application goes offline
 *
 *  How do we make a web application work offline?
 *  First we need a manifest file. This defines which file the browser should cache when connectivity is lost.
 *  Manifest files need to be served using the text/cache-manifest MIME type. The server may do this for you but if
 *  using a server like Apache you can create a .htacess file to ensure that it is done correctly. You then need to
 *  change the HTML tag in your HTML file to point to the manifest file.  Now we need to determine when our application
 *  goes offline or online and react accordingly.
 *
 */

// offline HTML5 applications
var online;  // true when online, false when offline
window.addEventListener("online", CheckOnlineStatus);
window.addEventListener("offline", CheckOnlineStatus);
CheckOnlineStatus();

// check online status
function CheckOnlineStatus() {

    // setup online value by using navigator.onLine
	online = navigator.onLine;

	var s = document.getElementById("status");
	if (online) {
		s.textContent = "ONLINE";
		s.className = "";
	}
	else {
		s.textContent = "OFFLINE";
		s.className = "offline";
	}
}


// example save data function
function Save() {

	if (online) {
		// ... form submit, Ajax call etc.
	}
	else {
		// ... window.localStorage
	}
}