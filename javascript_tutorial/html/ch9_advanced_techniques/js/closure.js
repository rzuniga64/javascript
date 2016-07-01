/**
 // Closure
 // the value of the 'message' variable is local to the function 'function'
 // Once the code block ends the value of 'message' is lost
 // JavaScript retains a reference to the 'message' variable because of the inner anonymous function.
 */

function CreateFunction() {
	var message = "I was created by CreateFunction()"; // variable is local to the function
	return function() {     // anonymous function that displays a message and is returned
		alert(message);
	};
}
var f = CreateFunction();   // assign function to a variable.
f();                        // run the function
