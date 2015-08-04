// JavaScript provides an option that isn't available in many other languages.
// Everything in JavaScript is an Object. That includes functions themselves.
// So we can pass a function as an argument to another function and make it
// do something slightly differently.

// Passing functions as an argument is very powerful.
// It will be used often when implementing browser event handlers.

var Lib = Lib || {};

Lib.Array = (function() {

	// define output element
	var element = document.getElementById("message");

    // An extra argument has been added which expects a function to be passed.
    // Now rather than displaying a value we run the function which we've passed.
	// loop through an array
	function Recurse(a, action) {
	
		if (a.constructor == Array) {
			for (var i = 0; i < a.length; i++) {
				Recurse(a[i], action);
			}
		}
		else action(a);
	}

	return {
		Recurse: Recurse
	};

}());