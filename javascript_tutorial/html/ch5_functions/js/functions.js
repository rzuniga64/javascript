// prompt for number
var msg = document.getElementById("message");

do {
    var num = prompt("Factorial (hit OK to end)", "");
    if (num !== "") {
        msg.textContent = num + "! = " + factorial(num);
    } else {
        msg.textContent = "Finished";
    }
} while (num);

// calculate factorials
// var factorial = function(num) {
function factorial(num) {
    // ensure that parameter is a Number
    num = Number(num);
    var f = 1;

    // ensure that the number is not negative
    if (num < 0)
        return null;

    for (var i = 2; i <= num; i++)
		f *= i;

	return f;
}
