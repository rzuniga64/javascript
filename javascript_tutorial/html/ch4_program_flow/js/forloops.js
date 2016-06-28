// prompt for number
var msg = document.getElementById("message");
var num = Number(prompt("Factorial", 5));

// counter, test, update
for (var i = 2, factorial = 1; i <= num; i++) {
	factorial *= i;
}

// output factorial message
msg.textContent = num + "! = " + factorial;