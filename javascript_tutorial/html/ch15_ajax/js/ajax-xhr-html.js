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
     *  Hijack form
     *  Hijacking is a technique which intercepts a standard HTML form submit and transforms it into an AJAX request.
     *  This function accepts a form node and a callback function.  It loops through all the form field elements and
     *  adds them to a JavaScript object named 'args'. It's creating name-value pairs which can be passed to our Call
     *  function below.  It then runs the Call itself.
     */
	function Hijack(form, callback) {
	
		var args = {};
		
		for (var i = 0; i < form.elements.length; i++) {
			var f = form.elements[i];
			if (f.name) args[f.name] = f.value;
		}

        /**
         *  Make Ajax call
         *  @param url: action property for the form
         *  @param args: args object we just created above
         *  @param type: which is the form.method property
         *  @param callback: the function we want to run as soon as we have some data
		 */
         Call(form.action, args, form.method, callback);
	}

    /**
     *  Call AJAX web service
     *  @param url: of web service
     *  @param args: avascript object containing web service parameters, just name-value pairs
     *  @param type: GET or POST
     *  @param callback: callback: optional function that is called when the web service completes and data has been
     *         returned
     *  @constructor
     */
	function Call(url, args, type, callback) {

		type = (type || "GET").toUpperCase();  // check type (GET or POST)
		args = args || {};  // create argument list (a string) that we can append to a URL or parse using a POST.
		var arglist = "";

        for (var n in args)
			arglist += "&" + n + "=" + escape(args[n]);

		if (arglist.length > 0) arglist = arglist.substr(1);
		
		// append args to GET URL only runs if we are passing parameters on the GET URL
		if (type == "GET") {
			url += "?" + arglist;
			arglist = null;
		}
		
		// XMLHttpRequest object
        // Start web service call and it's handled using XMLHttpRequest object.
        // We don't need to return XML. Any type of data can be fetched.
		var xhr = new XMLHttpRequest();
        // type = GET or POST, true means we are making an asynchronous call which means our code doesn't wait for a
        // response. It can do other things and as soon as response returns it can jump in an react accordingly.
		xhr.open(type, url, true);

        // Callback function
        // If we define a callback function we set onreadystatechange. We only care when data is ready.  That is when
        // readyState equals to 4 and HTTP status equals 200.  We pass the data to the callback function.
		if (callback) {
			xhr.onreadystatechange = function() {
				if (xhr.readyState == 4 && xhr.status == 200) {
					callback(xhr.responseText);
				}
			};
		}
		
		// open request
        // First, we set a couple of HTTP header values. Content-Type is necessary only when sending data by POST
		xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded; charset=UTF-8");
        // Next we set X-Requested-With to XMLHttpRequest. This doesn't actually do anything. It's a standard setting
        // defined by most AJAX libraries. If necessary, the web service can detect that it is an AJAX call and if it
        // not there it can output an HTML page instead.
		xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");
        xhr.("Access-Control-Allow-Origin", "*" );
        // send method calls the web service
		xhr.send(arglist);
	}

	return {
		Hijack: Hijack,
		Call: Call
	};
}());

// We are now ready to intercept our form submit when the user hits the button. Start.
var
	speedform = document.getElementById("speedform"),
	output = document.getElementById("output");

// form submit - direct to Ajax call. Add a event listener which detects the submit event and it runs an inline function
speedform.addEventListener("submit", function(e) {

	e.preventDefault();

    // call the Hijack function which we pass the speedform node and an inline function which is run as soon as data is
    // returned. This accepts a single parameter named 'r' which is the data returned by our web service. Now in this
    // case it is just HTML. So we can use innerHTML to display it within the output element.
	Lib.Ajax.Hijack(speedform, function(r) {
		output.innerHTML = r;
	});
});
