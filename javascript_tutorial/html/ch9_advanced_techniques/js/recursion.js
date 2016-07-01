/**
 *  Recursion
 *
 *  Recursion is away of simplifying a problem by breaking it down into smaller problems of the same type.
 *  When you call a function the computer has to know where to return to. It stores all these return locations on a
 *  stack which keeps track of the current state.
 *  Recursion allows you to write very small functions that are incredibly powerful.  But if you were looking at data
 *  that had a cyclical reference the recursion would run out of control and never end.
 */
 var Lib = Lib || {};


Lib.Array = (function() {

	var element = document.getElementById("message");

    /**
     *  This method iterates through an array recursively
     */
	function Recurse(a) {   // loop through an array
	
		if (a.constructor == Array) {
			for (var i = 0; i < a.length; i++)
				Recurse(a[i]);
		}
		else element.innerHTML += a + "<br />";
	}

    /**
     *  Returns an object which points to the functions that we want available outside the code.
     *  @return An alias name and the function name (kept the same here)
     */
	return {
		Recurse: Recurse
	};
}());