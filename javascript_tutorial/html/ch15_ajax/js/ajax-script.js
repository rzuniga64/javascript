// Script insertion
var Lib = Lib || {};

Lib.Ajax = (function() {

	// hijack form
    // Again we are using a hijack techniques to intercept
    // the form submit and turn it into an AJAX call.
	function Hijack(form, callback) {
		var args = {};
		
		for (var i = 0; i < form.elements.length; i++) {
			var f = form.elements[i];
			if (f.name) args[f.name] = f.value;
		}
		
		if (callback) args.callback = callback;
		
		// make Ajax call
		Call(form.action, args);
	}

	// call web service
    // We only require the URL and the arguments
    // Since we are calling a script by its URL we can't use POST
    // GET parameters are our only option.
    // JSONP automatically calls our callback function.
	function Call(url, args) {
		// create argument list
		args = args || {};
		var arglist = "";
		for (var n in args) {
			arglist += "&" + n + "=" + escape(args[n]);
		}
		
		// append args to URL
		if (arglist.length > 0) url += "?" + arglist.substr(1);
		
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

// form submit - direct to Ajax call
// Add a event listener which detects the submit event and it runs an inline function
speedform.addEventListener("submit", function(e) {
	e.preventDefault();

    // call the Hijack function which we pass the speedform node
    // and the callback function which is run as soon as data is returned.
    // the function call has to be a string.  We can't pass a reference to
    // the function itself because this name needs to be passed to the
    // web service on the URL. Our AjaxResponse function will be called
    // when our JSONP code is loaded.  No need to do any parsing as that
    // was already done when the script was loaded. So all we need to do is
    // to put appropriate values into the table.  You won't see anything in the
    // Firebug console because it is not an XMLHttpRequest.  It does execute
    // JavaScript directly so there are potential security risks. If you not
    // in control of the script being returned it can be doing anything
    // such as extracting the user's cookies or form data.
    // This accepts a single parameter named 'r' which is the data
    // returned by our web service. It WILL appear in the Net tab.
	Lib.Ajax.Hijack(speedform, "AjaxResponse");
});

// Ajax callback function

function AjaxResponse(r) {
	td[0].textContent = r.mph;
	td[1].textContent = r.kph;
	td[2].textContent = r.fps;
	td[3].textContent = r.mps;
}