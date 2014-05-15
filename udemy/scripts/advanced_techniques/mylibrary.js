// My JavaScript Library

(function() {
// The Format function is private
// It cannot be accessed outside the anonymous function
// Once the anonymous function ends it is lost forever

// But any code inside the anonymous function can reference
// the function because of Closures.
	// format a number
	function Format(num) {
		return Math.floor(num);
	}

	// output message
	ShowMessage("You are viewing a lesson in section " + Format(9.1));

}());