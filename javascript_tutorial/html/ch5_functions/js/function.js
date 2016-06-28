/**
 *   Functions are treated the same as any other value. they are just a type of object.
 *   We can assign a function to a variable and call it in exactly the same way as a regular function.
 *   If assigning a function to a variable you must do it before they are called.
 *
 *   When the JavaScript program runs the interpreter goes through all the code in the script and works out which
 *   functions exist and which don't. But you are assigning a function to a variable that can only be done at runtime.
 */

// prompt for number
var msg = document.getElementById("message");

// calculate factorials
// var factorial = function(num) {
function factorial(num) {
    // ensure that parameter is a Number
    num = Number(num);
    var f = 1;

    // ensure that the number is not negative. If so return.
    if (num < 0)
        return null;

    for (var i = 2; i <= num; i++)
        f *= i;

    return f;
}

var f = factorial;
console.log( 10 + "! = " + f(10));

do {
    var num = prompt("Factorial (hit OK to end)", "");
    if (num !== "") {
        msg.textContent = num + "! = " + factorial(num);
    } else {
        msg.textContent = "Finished";
    }
} while (num);



