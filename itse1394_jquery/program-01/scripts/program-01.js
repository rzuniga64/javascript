var dateObject = new Date();
var month = dateObject.getMonth();
var monthArray = new Array("January","February","March","April","May","June","July","August","September","October","November","December");

function getTodayDate() {
    var dateToday = monthArray[month] + " " + dateObject.getDate() + ", " + dateObject.getFullYear() + " " + dateObject.getHours() +
        ":" + dateObject.getMinutes() + ":" + dateObject.getSeconds();
    document.getElementById("time").innerHTML = dateToday;
}