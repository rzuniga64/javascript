/**
 *  Form Events
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
var form = {    // DOM nodes
	register:	document.getElementById("register"),
	email:		document.getElementById("email"),
	pass1:		document.getElementById("pass1"),
	pass2:		document.getElementById("pass2")
};

// Form submit: for browsers that understand HTML5 it won't be called until the form is actually valid
form.register.addEventListener( "submit", CheckForm );

// check email field when its changed, inline anonymous function
form.email.addEventListener( "change", function(event) {
	if (event.target.value == "") alert("You forgot the email!");
} );

form.pass1.addEventListener( "keypress", NoSpaces );        // stop space character
form.pass2.addEventListener( "keypress", NoSpaces );

function NoSpaces(event) {  // stop spaces being entered
	if (event.charCode == 32) event.preventDefault();
}

var reEmail = /^[a-z0-9._%-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;    // email form submit validation

/**
 *  Always run when a submit occurs. Won't be run on Chrome, Safari, Opera or Firefox until the data is actually valid.
 *  @param: event
 */
 function CheckForm(event) {

	var msg = "";   // variable to hold error messages

	// check email
	if (!reEmail.test(form.email.value)) msg += "\nyour email address";

	// check passwords aren't empty and match each other
	if (form.pass1.value == "" || form.pass1.value != form.pass2.value) msg += "\nyour passwords";

	// complete message
    msg = (msg != "" ? "Please check: " + msg : "Form is valid!\nSubmitting...");
	alert(msg);
	event.preventDefault();     // the form will not be submitted whether the data is valid or not
}