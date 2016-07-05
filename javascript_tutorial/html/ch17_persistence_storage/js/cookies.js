/**
 *  Cookies: allow us to maintain state.
 *
 *  A small chunk of text data which is sent with every HTTP request.
 *  Essential because the web is stateless. Stateless means that every request that a browser makes to a web server is
 *  independent. So if page X is loaded from the server it doesn't know if page Y was loaded or HTML before that.
 *  The browser sends cookie data to the server when it makes a request. The server responds with the same cookie data
 *  or changed cookie data in the HTTP header when it returns the file or image or whatever.  Either side can change
 *  the cookie at any time. Without them we couldn't implement shopping baskets or web application logons.
 *
 *  Cookies are specific to a domain, e.g. domain1.com and, optionally, a path on that domain, e.g. domain1.com/path1/
 *  Cookies can expire at a set date and time.
 *  If no timeout is set then cookies is deleted when browser is closed called session cookies.
 *  Cookies can be SECURE so can only be transferred when an HTTPS connection is being used.
 *  Domains are limited to 20 cookies.
 *  No cookie can be greater than 4 Kb.
 *
 *  The Bad:
 *  Everything is handled using a single DOM cookie property.
 *  So you need to develop cookie handling utilities.
 *
 *  Make this better:
 *  Write a cookie library which stores multiple values in one cookie.
 *  Perhaps you can do that by defining an object and then serialize and deserialize the object to a string using
 *  JSON.stringify and JSON.parse.
 *  You can have a window onunload event which only saves the cookie when the page is reloaded or changed.
 */

/*
// Set a cookie
// native cookie handling in JavaScript
document.cookie = "a=100; expires=Wed, 01 Jan 2020 00:00:00 GMT; path=/scripts/";
document.cookie = "b=200; expires=Wed, 01 Jan 2020 00:00:00 GMT; path=/scripts/";
document.cookie = "c=300; expires=Wed, 01 Jan 2020 00:00:00 GMT; path=/scripts/";

// Stream that is output by document.cookie. Very hard to extract cookie a, b, and c from a string.
document.getElementById("output").textContent = document.cookie;
*/

// using cookielib.scriptsIf no timeout is set then cookies is deleted when browser is closed.
Cookie.Set("a", 101, 10);
Cookie.Set("n", 202, 20);
Cookie.Set("c", 303, 30);

Cookie.Delete("b");

document.getElementById("output").innerHTML =
	"<p>cookie a = " + Cookie.Get("a") + "</p>" +
    "<p>cookie b = " + Cookie.Get("b") + "</p>" +
	"<p>cookie c = " + Cookie.Get("c") + "</p>";