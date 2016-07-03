/**
 *  XMLHttpRequest
 *
 *  HTML might not be the most appropriate format. You could be transmitting more data than necessary. Or perhaps you
 *  only need to make minor changes to the page instead of great chunks of HTML.  You may need to change the returned
 *  HTML if the design ever changed.  It's also slightly risky.  If our HTML happened to be missing an HTML closing
 *  element then we could break the design of our page.  Finally, data returned from our web service can't be used in
 *  any other way.  For example, it would be tricky to extract the kph number because you don't necessarily know where
 *  that is in the HTML. A better alternative is JSON.
 */
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
        Call(form.action, args, form.method, callback); // make Ajax call
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

		type = (type || "GET").toUpperCase();   // check type (GET or POST)
		args = args || {};  // create argument list
		var arglist = "";

		for (var n in args)
			arglist += "&" + n + "=" + escape(args[n]);

		if (arglist.length > 0)
            arglist = arglist.substr(1);
		
		// append args to GET URL
		if (type == "GET") {
			url += "?" + arglist;
			arglist = null;
		}

        // XMLHttpRequest object
        // Start web service call and it's handled using XMLHttpRequest object.
        // We don't need to return XML. Any type of data can be fetched.
		var xhr = new XMLHttpRequest();
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
	output = document.getElementById("output"),
	td = output.getElementsByTagName("td");

// form submit - direct to Ajax call. Add a event listener which detects the submit event and it runs an inline function
speedform.addEventListener("submit", function(e) {

	e.preventDefault();

    // call the Hijack function which we pass the speedform node and an inline function which is run as soon as data is
    // returned. This accepts a single parameter named 'r' which is the data returned by our web service. Now in this
    // case it is JSON. So we must parse it before displaying it within the output element.
	Lib.Ajax.Hijack(speedform, function(r) {
		
		r = JSON.parse(r);
		td[0].textContent = r.mph;
		td[1].textContent = r.kph;
		td[2].textContent = r.fps;
		td[3].textContent = r.mps;
	});
});
