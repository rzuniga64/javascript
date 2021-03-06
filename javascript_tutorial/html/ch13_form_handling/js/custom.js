/**
 *  Custom Controls
 *
 *  Client-side JavaScript form validation is not a substitute for server-side data validation.  That's because
 *  JavaScript can be disabled in the browser.
 *
 *  Use HTML5 form controls which provide JavaScript-less form validation. Input types:
 *  - email
 *  - date
 *  - password
 *
 *  JavaScript is still required for custom validation.
 *
 *  Form event types:
 *  - form submission
 *  - field changes
 *  - key presses
 *
 */
var form = {	// DOM nodes
	register:	document.getElementById("register"),
	email:		document.getElementById("email"),
	pass1:		document.getElementById("pass1"),
	pass2:		document.getElementById("pass2"),
	strength:	document.getElementById("strength")
};

// Form submit: for browsers that understand HTML5 it won't be called until the form is actually valid
form.register.addEventListener( "submit", CheckForm );

// check email field when its changed, inline anonymous function
form.email.addEventListener( "change", function(e) {
	if (e.target.value == "") alert("You forgot the email!");
} );

form.pass1.addEventListener( "keypress", NoSpaces );		// stop space character
form.pass2.addEventListener( "keypress", NoSpaces );
form.pass1.addEventListener( "keyup", PasswordStrength );	// password strength

function NoSpaces(e) {	// stop spaces being entered
	if (e.charCode == 32) e.preventDefault();
}

// check password strength
var strtext = ["weak", "average", "strong"];
var strcolor = ["#c00", "#f80", "#080"];  //red, amber, green

function PasswordStrength(event) {

	var pass = form.pass1.value;
	var uc = pass.match(/[A-Z]/g);		// count uppercase
	uc = (uc && uc.length || 0);

	var nm = pass.match(/\d/g);			// count numbers, \d represent a numeric character
	nm = (nm && nm.length || 0);

	var nw = pass.match(/\W/g);			// count symbols, \W indicates it's not a letter, number or _
	nw = (nw && nw.length || 0);

	// determine password strength
	var s = pass.length + uc + (nm * 2) + (nw * 3); // < 10 weak, 10 <= x <=20 average, > 20 strong
    // return a number between 0 and 2
	s = Math.min(Math.floor(s / 10), 2); // convert the score to a number between 0 and 2

	form.strength.textContent = strtext[s];
	form.strength.style.color = strcolor[s];
}

var reEmail = /^[a-z0-9._%-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;    // email form submit validation

/**
 *  Always run when a submit occurs. Won't be run on Chrome, Safari, Opera or Firefox until the data is actually valid.
 *  @param: event
 */
function CheckForm(e) {

	var msg = "";

	// check email
	if (!reEmail.test(form.email.value))
		msg += "\nyour email address";

	// check passwords
	if (form.pass1.value == "" || form.pass1.value != form.pass2.value)
		msg += "\nyour passwords";

	// complete message
	msg = (msg != "" ? "Please check: " + msg : "Form is valid!\nSubmitting...");

	alert(msg);
	e.preventDefault();
}