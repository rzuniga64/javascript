var dateObject = new Date();
var month = dateObject.getMonth();
var monthArray = new Array("January","February","March","April","May","June","July","August","September","October","November","December");

function getTodayDate() {
    var dateToday = monthArray[month] + " " + dateObject.getDate() + ", " + dateObject.getFullYear();
    document.forms[0].dateToday.value = dateToday;
}