/**
 *  XMLHttpRequest
 *  HTML might not be the most appropriate format. You could be transmitting more data than necessary. Or perhaps you
 *  only need to make minor changes to the page instead of great chunks of HTML.  You may need to change the returned
 *  HTML if the design ever changed.  It's also slightly risky.  If our HTML happened to be missing an HTML closing
 *  element then we could break the design of our page.  Finally, data returned from our web service can't be used in
 *  any other way.  For example, it would be tricky to extract the kph number because you don't necessarily know where
 *  that is in the HTML. A better alternative is JSON.
 */
var Lib = Lib || {};

Lib.Ajax = (function() {

	// hijack form
	function Hijack(form, callback) {
	
		var args = {};
		
		for (var i = 0; i < form.elements.length; i++) {
			var f = form.elements[i];
			if (f.name) args[f.name] = f.value;
		}

		Call(form.action, args, form.method, callback); // make Ajax call
	}

	// call web service
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
		var xhr = new XMLHttpRequest();
		xhr.open(type, url, true);
		
		// callback function
		if (callback) {
			xhr.onreadystatechange = function() {
				if (xhr.readyState == 4 && xhr.status == 200) {
					callback(xhr.responseText);
				}
			};
		}
		// open request
		xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded; charset=UTF-8");
		xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");
		xhr.send(arglist);
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
speedform.addEventListener("submit", function(e) {

	e.preventDefault();

	Lib.Ajax.Hijack(speedform, function(r) {
		
		r = JSON.parse(r);
		td[0].textContent = r.mph;
		td[1].textContent = r.kph;
		td[2].textContent = r.fps;
		td[3].textContent = r.mps;
	});
});
