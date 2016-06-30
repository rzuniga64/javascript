/**
 *  Bitwise Operators
 *  AND operator     OR operator     XOR operator        NOT operator
 *  a    b   out     a   b   out     a   b   out         a   out
 *  0    0   0       0   0   0       0   0   0           0   1
 *  0    1   0       0   1   1       0   1   1           1   0
 *  1    0   0       1   0   1       1   0   1
 *  1    1   1       1   1   1       1   1   0
 *  var out= a&b    var out= a|b    var out= a^b        var out= ~a
 */
var msg = document.getElementById("message");
// AND
var a = 12; // 1100
var b =  5; // 0101
// out = 4 = 0100
msg.innerHTML += "<p>12 & 5: " + (a & b) + "</p>";

// OR
var a = 12; // 1100
var b =  5; // 0101
var out = a | b;
// out = 13 = 1101
msg.innerHTML += "<p>12 | 5: "+(a | b) +"</p>";

// XOR
var a = 12; // 1100
var b =  5; // 0101
msg.innerHTML += "<p>12 ^ 5: "+ (a ^ b) +"</p>";
// out = 9 = 1001

// NOT
// out = -13 = 0011
msg.innerHTML += "<p>~12: "+ ~a +"</p>";

// Bit Shifting
var c = 16
msg.innerHTML += "<p>c >> 3: "+ (c >> 3) +"</p>";   // out = 2 = 00010
msg.innerHTML += "<p>c << 3: "+ (c << 3) +"</p>";   // out = 128 = 10000000
