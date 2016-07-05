/**
 * Cookie library
 */

/**
 * This method extracts individual cookies from document.cookie  and parses cookies
 */
 var Cookie = Cookie || (function() {

    // extract individual cookies from document.cookie
	var
		cookieList = {},
		ac = document.cookie.split(";"),
		c, i;

	for (i = 0; i < ac.length; i++) {
		c = ac[i].split("=");
		if (c.length > 1) {
			cookieList[c[0].trim()] = unescape(c[1]);
		}
	}

    /**
     * This method defines and updates cookies
     */
	function Set(name, value, expiry, path) {

		var cookieExpiry = cookiePath = "";

		if (expiry) {
			var date = new Date();
			date.setTime(date.getTime() + expiry * 60000); // add number of minutes defined in ms
			cookieExpiry = "; expires=" + date.toGMTString();
		}

		if (path) cookiePath = "; path=" + path;

		// store cookie
		document.cookie = name + "=" + escape(value) + cookieExpiry + cookiePath;

		// update cookieList
		if (expiry && expiry < 0)
			delete cookieList[name]; // delete cookie
		else
			cookieList[name] = value; // add cookie
	}

    /**
     * This method deletes a cookie
     * @type: Delete
     */
	function Delete(name) {
		Set(name, "", -1);
	}


    /**
     * This method retrieves a cookie
     * @type: Get
     */
	function Get(name) {
		return cookieList[name] || undefined;
	}

    /**
     * Public methods
     * @type: Get, Delete, Set
     */
	return {
		Set: Set,
		Delete: Delete,
		Get: Get
	};
}());