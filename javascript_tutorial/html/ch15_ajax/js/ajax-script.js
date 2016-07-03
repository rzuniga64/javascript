/**
 *  Asynchronous JavaScript and XML (AJAX)
 *  AJAX is a technique which loads data from a server and changes part of the page without requiring a full refresh.
 *  It runs JavaScript code in the browser which, behind the scenes, fetches data from a web server.  When the data
 *  is returned more JavaScript parses the message and updates part of the page using concepts we have seen in
 *  previous lessons.  Asynchronous means the browser can carry on until the browser returns something.  Don't have to
 *  use XML, can use JSON, HTML, text or any format you want to devise.
 *
 *  Fetching a page requires a round trip to a web server.  A web server returns an HTML document which is displayed in
 *  the browser. It also returns other resources like images, CSS files, and JavaScript files.
 *
 *  What if only a small part of the page needs to be updated?  You need some type of server communication where you
 *  don't want to refresh the whole page.
 *  - an alert
 *  - auto-complete box
 *  - live stock feeds
 *  - a scrollable map
 *  - chat rooms
 *
 *  How does AJAX work?
 *  - XMLHttpRequest and XMLHttpRequest2 (XHR) offers a set of methods and properties which allows you to send a
 *    request to a server and receive a response. For security reasons it only allows you to make a request to a server
 *    that is on the same domain.
 *  - dynamic <script> injection allows you to write JavaScript that allows you insert a script tag and insert it into
 *    the DOM, perhaps in the head of the page.  The huge benefit is that you can load scripts from any domain.
 *  - iframes, plugins, etc.
 *  - HTML5 web sockets and server-sent events. These allow communication techniques that go beyond AJAX. 
 */

// Script insertion
var Lib = Lib || {};

Lib.Ajax = (function() {

	/**
     * Hijack form. Again we are using a hijack techniques to intercept the form submit and turn it into an AJAX call.
	 */
     function Hijack(form, callback) {
		var args = {};
		
		for (var i = 0; i < form.elements.length; i++) {
			var f = form.elements[i];
			if (f.name) args[f.name] = f.value;
		}
		
		if (callback) args.callback = callback;

		Call(form.action, args);    // make Ajax call
	}

    /**
     *  Call web service. We only require the URL and the arguments. Since we are calling a script by its URL
     *  we can't use POST. GET parameters are our only option. JSONP automatically calls our callback function.
	 */
     function Call(url, args) {

		args = args || {};  // create argument list
		var arglist = "";
		for (var n in args)
			arglist += "&" + n + "=" + escape(args[n]);

		if (arglist.length > 0) url += "?" + arglist.substr(1); 		// append args to URL
		
		// insert script into head
		var head = document.getElementsByTagName("head")[0];
		var script = document.createElement("script");
		script.src = url;
		// script.onload = callback
		head.appendChild(script);
	}
	return {
		Hijack: Hijack,
		Call: Call
	};
}());

// start
var
	speedform = document.getElementById("speedform"),
	output = document.getElementById("output"),
	td = output.getElementsByTagName("td");

// form submit - direct to Ajax call. Add a event listener which detects the submit event and it runs an inline function
speedform.addEventListener("submit", function(e) {

    e.preventDefault();

    /** call the Hijack function which we pass the speedform node and the callback function which is run as soon as
     * data is returned. The function call has to be a string.  We can't pass a reference to the function itself because
     * this name needs to be passed to the web service on the URL. Our AjaxResponse function will be called when our
     * JSONP code is loaded.  No need to do any parsing as that was already done when the script was loaded. So all we
     * need to do is to put appropriate values into the table.  You won't see anything in the Firebug console because it
     * is not an XMLHttpRequest.  It does execute JavaScript directly so there are potential security risks. If you not
     * in control of the script being returned it can be doing anything such as extracting the user's cookies or form
     * data. This accepts a single parameter named 'r' which is the data returned by our web service. It WILL appear in
     * the Net tab.
	*/
     Lib.Ajax.Hijack(speedform, "AjaxResponse");
});

// Ajax callback function
function AjaxResponse(r) {
	td[0].textContent = r.mph;
	td[1].textContent = r.kph;
	td[2].textContent = r.fps;
	td[3].textContent = r.mps;
}