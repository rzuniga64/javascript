/**
 *  Managing Page History
 *
 * back()
 * forward()
 * go(n)
 *
 * Push state: (>IE10). Allows you to define when an action has occurred which should affect history and the back
 * button. When that occurs you can store some data such as the state reference. So could be opening an email and run
 * push state and you store what the user was looking at before they opened it.  When the back button is clicked or you
 * run history.back a window pop state event runs. That event can fetch the data you stored and react accordingly.
 */

// window.history object
var msg = "<p>window.history.length: " + window.history.length + "</p>";
document.getElementById("output1").innerHTML = msg;

// update state
var state = 0,
    o = document.getElementById("output2");

// state button clicked
document.getElementById("updatestate").addEventListener("click", function(e) {

	e.preventDefault();
	state++;
	window.history.pushState({ "state": state }, "title", "?state=" + state);
	o.innerHTML = "<p>state " + state + " pushed</p>" + o.innerHTML;

});

// back/forward hit
window.addEventListener("popstate", function(e) {

	o.innerHTML =
		"<p>location: " + document.location +
		", state: " + JSON.stringify(e.state) + "</p>" +
		o.innerHTML;
});