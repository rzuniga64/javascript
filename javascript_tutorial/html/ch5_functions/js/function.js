/**
 *   Functions are treated the same as any other value. they are just a type of object.
 *   We can assign a function to a variable and call it in exactly the same way as a regular function.
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

do {
    var num = prompt("Factorial (hit OK to end)", "");
    if (num !== "") {
        msg.textContent = num + "! = " + factorial(num);
        console.log( num + "! = " + f(10));
    } else {
        msg.textContent = "Finished";
    }
} while (num);



