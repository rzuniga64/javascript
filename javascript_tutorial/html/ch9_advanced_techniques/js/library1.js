/**
 * JavaScript Library 1
 * The Format function, which formats a number,  is private. It cannot be accessed outside the anonymous function.
 * Once the anonymous function ends it is lost forever
 *
 * But any code inside the anonymous function can reference the Format function because of Closures.
 * Call the function by using () and then put the whole anonymous function into braces
 */

(function() {
	function Format1(num) {
		return Math.floor(num);
	}

    // call the ShowMessage function in library2.js
	ShowMessage("You are viewing a lesson in section " + Format1(9.1));
}() );
