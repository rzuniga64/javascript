// JavaScript Date Arithmetic
var msg = document.getElementById("message");

console.log("Math.round(9.5) = " +Math.round(9.5)); // 10
console.log("math.ceil(9.5) = " + Math.ceil(9.5)); //10, ceil rounds up to nearest integer
console.log("math.floor(9.5) = " + Math.floor(9.5)); //9, floor rounds down to nearest integer
console.log("math.abs(9.5) = " + Math.abs(9.5)); //9.5, abs converts negative value to positive value
console.log("math.pow(10,2) = " + Math.pow(10, 2)); //100, pow raises 10 to power of 2
console.log("math.sqrt(100) = " + Math.sqrt(100)); //100, pow raises 10 to power of 2
console.log("math.min(0, 9) = " + Math.min(0, 9)); //0, compares two values and returns the smallest one
console.log("math.max(0, 9) = " + Math.max(0, 9)); //9, compares two values and returns the largest one
console.log("math.random()) = " + Math.random()); // 0-1 produces a number between 0 and 1 exclusive
console.log("math.random()) = " + Math.floor(Math.random() * 10 + 1)); // 1 - 10 produces a number between 1 and 10 exclusive

// convert a number in radians to degrees
function degrees(x) {
        return x/360 * 2 * Math.PI;
}

console.log("Math.sin(degrees(90)) = " + Math.sin(degrees(90))); //1

msg.innerHTML += "<p>Days remaining to 2020: "+ new Date(2020,0,1) +"</p>";
msg.innerHTML += "<p>Date now: "+ new Date(2020,0,1) +"</p>";