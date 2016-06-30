// JavaScript Date Arithmetic
var msg = document.getElementById("message");

msg.innerHTML += "<p>Date now: "+ new Date() +"</p>";

// set a date/time using IETF standard date syntax
msg.innerHTML += "<p>Set date/time using IETF standard date syntax: "+ new Date("31 Dec 2012 23:59:59 GMT") +"</p>";

// set a data/time using IETF standard date syntax
msg.innerHTML += "<p>Set date/time using IETF standard date syntax: "+ new Date(2012, 11, 31, 23, 59, 59) +"</p>";

// milliseconds since Jan 1 197- 00: 00: 00
msg.innerHTML += "<p>Milliseconds since Jan 1 1970 00: 00: 00 "+ new Date(1000) +"</p>";

// ALTERING DATES
var d = new Date();
// modify
d.setFullYear(2012);
d.setMonth(11);
d.setDate(31);

d.setHours(23);
d.setMinutes(59);
d.setSeconds(0);
d.setMilliseconds(0);

msg.innerHTML += "<p>Dec 31 2012 23: 59: 00 - "+ d +"</p>";

var f = new Date();

// Modify date
f.setFullYear(2012, 11, 31);// year, month, date
f.setMonth(11, 31);         // month, date
f.setHours(23, 59, 59, 0);  // hour, minute, second, ms
f.setSeconds(59, 0);        // second, ms

// Set time
f.setTime(1000);

// Altering UTC dates and time. UTC is single time standard which regulates world clocks.  Synonymous with GMT but is more
// precisely defined and isn't affected by Daylight Savings Time or any other factors.
var d = new Date();
// modify
d.setUTCFullYear(2012);
d.setUTCMonth(11);
d.setUTCDate(31);

d.setUTCHours(23);
d.setUTCMinutes(59);
d.setUTCSeconds(0);
d.setUTCMilliseconds(0);

// Modify date
f.setUTCFullYear(2012, 11, 31);// year, month, date
f.setUTCMonth(11, 31);         // month, date
f.setUTCHours(23, 59, 59, 0);  // hour, minute, second, ms
f.setUTCMinutes(59, 59, 0);    // hour, minute, second, ms
f.setUTCSeconds(59, 0);        // second, ms

// EXAMINING DATES
var c = new Date();
msg.innerHTML += "<p>c.getFullYear() - "+ c.getUTCFullYear() +"</p>";
msg.innerHTML += "<p>c.getMonth() - "+ c.getUTCMonth() +"</p>";
msg.innerHTML += "<p>c.getDate() - "+ c.getUTCDate() +"</p>";

msg.innerHTML += "<p>c.getHours() - "+ c.getUTCHours() +"</p>";
msg.innerHTML += "<p>c.getMinutes() - "+ c.getUTCMinutes() +"</p>";
msg.innerHTML += "<p>c.getSeconds() - "+ c.getUTCSeconds() +"</p>";
msg.innerHTML += "<p>c.getMilliseconds() - "+ c.getUTCMilliseconds() +"</p>";

msg.innerHTML += "<p>c.getUTCFullYear() - "+ c.getUTCFullYear() +"</p>";
msg.innerHTML += "<p>c.getUTCMonth() - "+ c.getUTCMonth() +"</p>";
msg.innerHTML += "<p>c.getUTCDate() - "+ c.getUTCDate() +"</p>";

msg.innerHTML += "<p>c.getUTCHours() - "+ c.getUTCHours() +"</p>";
msg.innerHTML += "<p>c.getUTCMinutes() - "+ c.getUTCMinutes() +"</p>";
msg.innerHTML += "<p>c.getUTCSeconds() - "+ c.getUTCSeconds() +"</p>";
msg.innerHTML += "<p>c.getUTCMilliseconds() - "+ c.getUTCMilliseconds() +"</p>";

//Outputting Formatted Dates
var b = new Date(2012, 11, 31, 23, 59, 59);
msg.innerHTML += "b.toString() - "+ b.toString() +"</p>";
msg.innerHTML += "b.toLocaleString() - "+ b.toLocaleString() +"</p>";
msg.innerHTML += "b.toUTCString() - "+ b.toUTCString() +"</p>";
msg.innerHTML += "user defined string - "+ b.getFullYear() + "-" + (d.getMonth()+1) + "-" + d.getDate() +"</p>";

// Date and time information
var a = new Date();
// getTimezoneOffset, difference in minutes between locale time and UTC
msg.innerHTML += "a.getTimezoneOffset() - "+ a.getTimezoneOffset() +"</p>"; // -120
// Date parse, ms since 01-01-1970 (local time)
msg.innerHTML += "Date.parse(Jan 1, 2020) - "+ Date.parse("Jan 1, 2020") +"</p>";
// Date UTC, ms since 01-01-1970 (UTC)
msg.innerHTML += "Date.UTC(Jan 1, 2020) - "+ Date.UTC("Jan 1, 2020") +"</p>";

/**
 *  Write code to calculate:
 *  1. The number of days between now and January 1, 2020.
 *  2. The date 7 days from now.
 */

 // The number of days between now and January 1, 2020.
var dateNow = new Date();
var date2020 = new Date(2020, 0, 1);

var days2020 = Math.ceil((date2020 - dateNow)/86400000);    // 86400000 = 1000 / 60 / 60 / 24;
var date7days = new Date(dateNow.getFullYear(), dateNow.getMonth(), dateNow.getDate() + 7).toDateString();

msg.innerHTML += "Days remaining to 2020: "+ days2020 +"</p>";
msg.innerHTML += "Date in 7 days: "+ date7days +"</p>";