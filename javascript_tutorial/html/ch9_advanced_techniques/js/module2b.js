/**
 *	Passing arguments to functions
 *	Make functions arguments as flexible as possible. this version of the Write function is far easier to use. The
 *  Extend function can be used by any other function within the module.
 *
 *  @author Raul Zuniga
 */
var Lib = Lib || {};

Lib.Output = (function() {
    /**
     *  This method writes message to the screen in the HTML element's location
     *  @param msg
     */
	function Write(opt) {

		// Check if object has been passed. If not then it's a string so create a new object literal and set the message
		// property to our opt parameter
		if (opt.constructor != Object) opt = { msg: opt };

        // Set our default values within another object literal.
        // This is passed to an Extend function with our 'opt' object literal.
        // Any of the parameters can be overridden by a value within 'opt'.
		opt = Extend({
			element: "message",
			msg: [],
			start: 0,
			end: null,
			color: "#000"
		}, opt);

        // Now we can address each argument
		if (opt.msg.constructor != Array)
            opt.msg = [opt.msg];

        opt.element = opt.element || "message";

        if (!opt.element.nodeType)
            opt.element = document.getElementById(opt.element);

        if (!opt.element || opt.msg.length == 0)
            return;
		
		opt.start = Math.max(0, Math.min(opt.start, opt.msg.length));
		opt.end = (opt.end ? Math.max(0, Math.min(opt.end, opt.msg.length)) : opt.msg.length);
	
		opt.element.innerHTML += '<p style="color:'+opt.color+'">'+opt.msg.slice(opt.start,opt.end+1).join(" ")+'</p>';
	}

	/**
	 *  Returns an object which points to the functions that we want available outside the code.
	 *  @return An alias name and the function name (kept the same here)
	 */
	function Extend(obj1, obj2) {
	
		for (var prop in obj2) {
			if (obj2.hasOwnProperty(prop)) obj1[prop] = obj2[prop];
		}
		
		return obj1;
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