var dateObject = new Date();
var month = dateObject.getMonth();
var monthArray = ["January","February","March","April","May","June","July","August","September","October","November","December"];
var isLocationShown = false;

function getTodayDate() {
    document.forms[0].dateToday.value = monthArray[month] + " " + dateObject.getDate() + ", " + dateObject.getFullYear();
    getTomorrowDate();
}

function getTomorrowDate() {
    document.forms[0].dateTomorrow.value = monthArray[month] + " " + (dateObject.getDate()+1) + ", " + dateObject.getFullYear();
}

function validateLoginSubmission() {
    var retValue = true;

    if (document.forms[0].username.value == "") {
        window.alert("You did not fill in one of the following required fields:" +
            " Username.");
        return false;
    } else {
        document.getElementById("para1").innerHTML = "Hello, " + document.forms[0].username.value;
        location.href = 'currency.htm' + '?' + 'name='+ document.forms[0].username.value;
    }

    return retValue;
}

function validateCurrencySubmission() {
    var currencySelected = false;
    var retValue = true;

    if (document.forms[0].amount.value == "") {
        window.alert("You did not fill in one of the following required fields:" +
        "  Amount");
        return false;
    }

    if (document.forms[0].username.value == "") {
        window.alert("You did not fill in one of the following required fields:" +
        " Username.");
        return false;
    } else {
        document.getElementById("para1").innerHTML = "Hello, " + document.forms[0].username.value;
    }

    /* Check whether a button is selected in the currency group */
    for (var i = 0; i < 3; ++i) {
        if (document.forms[0].optionsRadios[i].checked== true) {
            currencySelected = true;
            break;
        }
    }
    if (currencySelected != true) {
        window.alert("You did not select one of the following required fields:" +
        " Currency.");
        return false;
    }

    if (document.forms[0].hiddenName.value == "") {
        document.forms[0].hiddenName.value = document.forms[0].username.value;
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

function showLocation() {
    if (isLocationShown) {
        isLocationShown = false;
        document.getElementsByTagName("li")[0].setAttribute("class", "active hide");
        document.getElementById("tab1").setAttribute("class", "hide");
        document.getElementsByTagName("a")[1].innerHTML ="See nearest location";
    } else {
        isLocationShown = true;
        document.getElementsByTagName("li")[0].setAttribute("class", "active show");
        document.getElementById("tab1").setAttribute("class", "show");
        document.getElementsByTagName("iframe")[0].src = "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3447.134772184985!2d-97.758653!3d30.233233!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8644b4eb9282ed59%3A0xb727cce3a041b384!2s2910+S+Congress+Ave!5e0!3m2!1sen!2sus!4v1403601115192" + "width=\"100%\"" + "height=\"200\"" + "style=\"border:0\" ";
        document.getElementsByTagName("a")[1].innerHTML ="See the site";
    }
}