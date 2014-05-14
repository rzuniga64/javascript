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


// Javascript gets the current date/time from
// the PC's clock. It will be different in
// different time zones. So be a little wary
// when using JS to handle dates and sending them
// to a server for storage.
var dateNow = new Date();           // now
console.log(dateNow);

// set a date/time using IETF standard date syntax
var date = new Date("31 Dec 2012 23:59:59 GMT");
console.log(date);

// set a date/time using IETF standard date syntax
// months are 0-11
var date = new Date(2012, 11, 31, 23, 59, 59);
console.log(date);

// milliseconds since 1 January 1970 00:00:00
var date = new Date(1000);
console.log(date);
// Date {Thu Jan 01 1970 00:00:01 GMT+0000 (GMT Standard Time)}

// modify
date.setFullYear(2012);
date.setMonth(11);
date.setDate(31);

date.setHours(23);
date.setMinutes(59);
date.setSeconds(59);
date.setMilliseconds(0);
console.log(date);

date.setFullYear(2012,11,31);   // year, month, date
date.setMonth(11,31);           // month, date
date.setSeconds(59,0);          // second, ms
console.log(date);

date.setTime(10000);
console.log(date);

date.setUTCFullYear(2012);
date.setUTCMonth(11);
date.setUTCDate(31);

date.setUTCHours(23);
date.setUTCMinutes(59);
date.setUTCSeconds(59);
date.setUTCMilliseconds(0);

date.setUTCFullYear(2012, 11, 31);  // year, month,
date.setUTCMonth(11,31);            // month, date

date.setUTCHours(23,59,59,0);       // hour, minute, second, ms
date.setUTCMinutes(59,59,0);        // minute, second, ms
date.setUTCSeconds(59,0);           // second, ms

console.log(date.getFullYear());
console.log(date.getMonth());
console.log(date.getDate());

console.log(date.getHours());
console.log(date.getMinutes());
console.log(date.getSeconds());
console.log(date.getMilliseconds());

console.log(date.getUTCFullYear());
console.log(date.getUTCMonth());
console.log(date.getUTCDate());

console.log(date.getUTCHours());
console.log(date.getUTCMinutes());
console.log(date.getUTCSeconds());
console.log(date.getUTCMilliseconds());

// outputting formatted dates
console.log(date.toString());
console.log(date.toLocaleString());
console.log(date.toUTCString());
console.log(date.getFullYear() + "-" + (date.getMonth()+1) + "-" + date.getDate());

// date and time information
// difference in minutes between locale time and UTC
console.log(date.getTimezoneOffset());       // -120 means 2h ahead of UTC

// ms since 01-01-1970 (local time)
console.log(Date.parse("Jan 1, 2009"));

// ms since 01-01-1970 (UTC)
console.log(Date.UTC(2009, 0, 1));

// Write code to calculate
// 1. the number of days between now and January 1, 2020.
// 2. the date 7 days from now

var msg = document.getElementById("message");
var date2020 = new Date(2020,0,1);

var days2020 = Math.ceil((date2020 - dateNow)/86400000);
var date7days = new Date(dateNow.getFullYear(), dateNow.getMonth(),
                dateNow.getDate() + 7).toLocaleDateString();

msg.innerHTML += "<p>Days remaining to 2020: "+ days2020 +"</p>";
msg.innerHTML += "<p>Date in 7 days: "+ date7days +"</p>";