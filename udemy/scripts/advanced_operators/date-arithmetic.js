// JavaScript Date Arithmetic
// Math.PI;         //n
// Math.E;          //Euler's constant
// Math.LN10;       //natural logarithm of 10
// MathLN2;         //natural logarithm of 2
// MATH.LOG10E;     //nautural logarithm of E
// MATH.SQRT1_2;    //square root of 1/2
// MATH.SQRT2;      //square root of 2
// MATH.ROUND(9.5)  //10
// MATH.CEIL(9.5)   //10
// MATH.FLOOR(9.5)  //9
// MATH.ABS-9.5)    //9.5
// MATCH.POW(10,2); //100
// MATH.SQRT(100);  //10
// MATH.MIN(0,9)    //0
// MATH.MAX(0.9)    //9
// MATH.RANDOM();   // 0-1 exclusive
// MATH.FLOOR(MATH.RANDOM() * 10 + 1) // 1-10
// Javascript works in radians (0-2*pi)
// Trigonometry
// Math.acos(x);    // arccosine of a number
// Math.asin(x);    // arcsine of a number
// Math.atan(x);    // arctangent of a number
// Math.atan2(x,y)  // arctangent of the quotient of its arguments
// Math.cos(x)      // cosine of a number
// Math.exp(x)      // E to power of number
// Math.log(x)      // natural logarithm of a number
// Math.sin(x)      // sine of a number
// Math.tan(x)      // tangent of a number

// convert from radians to degrees
// function degrees(x) {
//    return x/360 * 2 * Math.PI;
//}

//Math.sin(degrees(90));  //1


var msg = document.getElementById("message");

var dateNow = new Date();
var date2020 = new Date(2020,0,1);

var days2020 = "?";
var date7days = "?";

msg.innerHTML += "<p>Days remaining to 2020: "+ days2020 +"</p>";
msg.innerHTML += "<p>Date in 7 days: "+ date7days +"</p>";