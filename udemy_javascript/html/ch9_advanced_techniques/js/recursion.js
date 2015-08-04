// My JavaScript Module
// recursion is away of simplifying a problem by breaking
// it down into smaller problems of the same type

// Recursion allows you to write very small functions that are
// incredibly powerful.  But if you were looking at data that
// had a cyclical reference the recursion would run out of
// control and never end.
var Lib = Lib || {};

Lib.Array = (function() {

	// define output element
	var element = document.getElementById("message");

	// loop through an array
	function Recurse(a) {
	
		if (a.constructor == Array) {
			for (var i = 0; i < a.length; i++) {
				Recurse(a[i]);
			}
		}
		else element.innerHTML += a + "<br />";
	}

	return {
		Recurse: Recurse
	};

}());