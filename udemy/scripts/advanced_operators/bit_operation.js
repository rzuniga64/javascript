// AND operator
var a = 12;         //1100
var b = 5;          //0101
var out = a & b;    //0100 = 4
console.log(out);

// OR operator
var out = a |b;     //1101 = 13
console.log(out);

// XOR operator
var out = a ^ b;    //1001 = 9
console.log(out);

// NOT operator
var out = ~a;       //0011 = -13
console.log(out);

// bit shifting used to multiply/divide by 2
var a = 16;         // 10000 = 16
var out = a >> 3;   // 00010 = 2
console.log(out);

var a = 2;          // 00010 = 2
var out = a << 3    // 10000 = 16