// prompt for number
var msg = document.getElementById("message");
var num = String(prompt("Bank Account Number", ""));

do { // loop executes at least once
    num = "0" + num;
} while (num.length < 8);

// This runs much faster than doing a loop
// num = ("00000000" + num).substr(-8);

// output factorial message
msg.textContent = num;