/**
 *	Passing arguments to functions
 *	Make functions arguments as flexible as possible. In this example we can call the Write function in a number of
 *  different ways.
 *
 *  @author Raul Zuniga
 */
var Lib = Lib || {};

Lib.Output = (function() {
    /**
     *  This method writes message to the screen in the HTML element's location
     *  @param msg
     */
	function Write(msg, element, start, end, color) {

        // Check the parameters
		msg = msg || [];
		if (msg.constructor != Array)
            msg = [msg];

        element = element || "message";

        if (!element.nodeType)
            element = document.getElementById(element);

        if (!element || msg.length == 0)
            return;

        // If all parameters check out do the following
		start = Math.max(0, Math.min(start, msg.length-1)); // normalizes the value since 0 < start < msg.length - 1

        // if 'end' is defined normalize it otherwise set it to length of array minus 1
		end = (end ? Math.max(0, Math.min(end, msg.length-1)) : msg.length-1);

        color = color || "#000";
		element.innerHTML += '<p style="color:'+color+'">'+msg.slice(start,end+1).join(" ")+'</p>';
	}

    /**
	 *  Returns an object which points to the functions that we want available outside the code.
	 *  @return An alias name and the function name (kept the same here)
	 */
	return {
		Write: Write,
		$: Write
	};
}());