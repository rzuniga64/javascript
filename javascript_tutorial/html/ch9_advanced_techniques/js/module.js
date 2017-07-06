/**
 *	Revealing Module Pattern
 *	A module is a collection of functions and variables. They will be related in some way to define a particular role.
 *	Only one global variable is ever defined. Essentially it is an object which can have any number of properties or
 *	methods. Example: a module that handles screen outputs or mouse input events or formats dates.
 *
 *  @author Raul Zuniga
*/
var Lib = Lib || {};    // If Lib exists use it otherwise create an empty object.

/**
 * This function is a self executing function that will run as soon as the code is encountered. It contains any number
 * of internal functions and variables.
 */
Lib.Output = (function() {  // self executing function which will run as soon as the code is encountered.

	// define output element
	var element = document.getElementById("message");
	var color = "#000";

    /**
     *  This method writes message to the screen in the HTML element's location
     *  @param msg
     */
	function Write(msg) {
		element.innerHTML += FormatMessage(msg);
	}

    /**
     *  This method set the color of a message written to an HTML element
     *  @param col the color
     */
	function SetColor(col) {
		color = col;
	}

    /**
     *  This method clears any messages written to an HTML element
     *  @param none
     */
	function Clear() {
		element.innerHTML = "";
	}

    /**
     *  This method formats a message written to an HTML element
     *  @param msg
     */
	function FormatMessage(msg) {
		return '<p style="color:'+color+'">'+msg+'</p>';
	}

    /**
     *  Returns an object which points to the functions that we want available outside the code.
     *  @return An alias name and the function name (kept the same here)
     */
    return {
		Write: Write,   // alias name and function
		$: Write,       // second alias which points to same function
		SetColor: SetColor,
		Clear: Clear
	};
}());