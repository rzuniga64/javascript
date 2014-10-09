var dateObject = new Date();
var month = dateObject.getMonth();
var monthArray = new Array("January","February","March","April","May","June","July","August","September","October","November","December");

function getTodayDate() {
    var dateToday = monthArray[month] + " " + dateObject.getDate() + ", " + dateObject.getFullYear();
    document.forms[0].dateToday.value = dateToday;
    getTomorrowDate();
}

function getTomorrowDate() {
    var dateTomorrow = monthArray[month] + " " + (dateObject.getDate()+1) + ", " + dateObject.getFullYear();
    document.forms[0].dateTomorrow.value = dateTomorrow;
}

function validateSubmission() {
    var currencySelected = false;
    var retValue = true;

    if (document.forms[0].amount.value == "") {
        window.alert("You did not fill in one of the following required fields:" +
            " Amount or Currency.");
        return false;
    }

    /* Check whether a button is selected in the currency group */
    for (var i = 0; i < 3; ++i) {
        if (document.forms[0].currency[i].checked== true) {
            currencySelected = true;
            break;
        }
    }
    if (currencySelected != true) {
        window.alert("You must select a currency option.");
        return false;
    }

    return retValue;
}

function checkForNumber(fieldValue) {
    var numberCheck = isNaN(fieldValue);
    if (numberCheck == true) {
        window.alert("You must enter a numeric value!");
        return false;
    }
    else
        return true;
}