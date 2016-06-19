// XMLHttpRequest
var Lib = Lib || {};

Lib.Ajax = (function() {
    // Hijacking is a technique which intercepts a standard HTML form submit
    // and transforms it into an AJAX request. This function accepts a form
    // node and a callback function.  It loops through all the form field
    // elements and adds them to a JavaScript object named 'args'. It's creating
    // name-value pairs which can be passed to our Call function below.  It then runs
    // the Call itself.

	// hijack form
	function Hijack(form, callback) {
	
		var args = {};
		
		for (var i = 0; i < form.elements.length; i++) {
			var f = form.elements[i];
			if (f.name) args[f.name] = f.value;
		}

		// make Ajax call
        // Parameters;
        // url: action property for the form
        // args: args object we just created above
        // type: which is the form.method property
        // callback: the function we want to run as soon as we have some data
		Call(form.action, args, form.method, callback);
	}

	// call AJAX web service
    // Parameters
    // url: of web service
    // args: Javascript object containing web service parameters, just name-value pairs
    // type: GET or POST
    // callback: optional function that is called when the web service completes and data has been returned
	function Call(url, args, type, callback) {

		// check type (GET or POST)
		type = (type || "GET").toUpperCase();
	
		// create argument list (a string) that we can append to
        // a URL or parse using a POST.
		args = args || {};
		var arglist = "";
		for (var n in args) {
			arglist += "&" + n + "=" + escape(args[n]);
		}
		if (arglist.length > 0) arglist = arglist.substr(1);
		
		// append args to GET URL
        // only runs if we are passing parameters on the GET URL
		if (type == "GET") {
			url += "?" + arglist;
			arglist = null;
		}
		
		// XMLHttpRequest object
        // start web service call and it's handled using XMLHttpRequest object
        // we don't needt to return XML. Any type of data can be fetched.
		var xhr = new XMLHttpRequest();
        // type = GET or POST, true means we are making an asynchronous call
        // which means our code doesn't wait for a response. It can do other things
        // and as soon as response returns it can jump in an react accordingly.
		xhr.open(type, url, true);

        // If we define a callback function we set onreadystatechange
        // We only care when data is ready.  That is when readyState equals to 4
        // and HTTP status equals 200.  We pass the data to the callback function.
		// callback function
		if (callback) {
			xhr.onreadystatechange = function() {
				if (xhr.readyState == 4 && xhr.status == 200) {
					callback(xhr.responseText);
				}
			};
		}
		
		// open request
        // First, we set a couple of HTTP header values.
        // Content-Type is necessary only when sending data by POST
		xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded; charset=UTF-8");
        // next we set X-Requested-With to XMLHttpRequest
        // This doesn't actually do anything. It's a standard setting
        // defined by most AJAX libraries. If necessary, the web service can detect
        // that it is an AJAX call and if it not there it can output an HTML page instead.
		xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");
        // send method calls the web service
		xhr.send(arglist);

	}

	return {
		Hijack: Hijack,
		Call: Call
	};

}());

// We are now ready to intercept our form submit when the user hits the button
// start
var
	speedform = document.getElementById("speedform"),
	output = document.getElementById("output");

// form submit - direct to Ajax call
// Add a event listener which detects the submit event and it runs an inline function
speedform.addEventListener("submit", function(e) {
	e.preventDefault();
    // call the Hijack function which we pass the speedform node
    // and an inline function which is run as soon as data is returned.
    // This accepts a single parameter named 'r' which is the data
    // returned by our web service. Now in this case it is just HTML.
    // So we can use innerHTML to display it within the output element.
	Lib.Ajax.Hijack(speedform, function(r) {
		
		output.innerHTML = r;
	});
});
