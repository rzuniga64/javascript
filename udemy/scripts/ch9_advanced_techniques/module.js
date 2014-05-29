// Revealing Module Pattern
// A module is a collection of functions and variables
// They will be related in some way to define a particular role
// Only one global variable is ever defined
// Essentially it is an object which can have any number of properties or methods
// Example: a module that handles screen outputs or mouse input events or formats dates

// single global object variable
var Lib = Lib || {};    // if Lib exists use it otherwise create an empty object

// Lib.Output is a self executing function that will run as soon as the code is encountered
// Now we can write any number of internal functions and variables
Lib.Output = (function() {

	// define output element
	var element = document.getElementById("message");
	var color = "#000";

	// write message to the screen in the location where we have the element
	function Write(msg) {
		element.innerHTML += FormatMessage(msg);
	}

	// set color
	function SetColor(col) {
		color = col;
	}

	// clear all messages
	function Clear() {
		element.innerHTML = "";
	}

	// format a number
	function FormatMessage(msg) {
		return '<p style="color:'+color+'">'+msg+'</p>';
	}

    // return an object which points to the functions that we want available outside the code
	// returns an alias name and the function name (kept the same here)
    return {
		Write: Write,
		$: Write,
		SetColor: SetColor,
		Clear: Clear
	};

}());