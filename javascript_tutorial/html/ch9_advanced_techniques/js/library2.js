// Another JavaScript Library

// show message
function ShowMessage(msg) {
    document.getElementById("message").innerHTML += Format(msg);
}

// format a number
function Format(msg) {
	return "<p>" + msg + "</p>";
}