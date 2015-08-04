//When you put jquery code within a function that tells
// jquery to wait until the browser has loaded the rest of the
// website and then execute this code.
$(function(){
    $('#alertMe').click(function(e) {
        e.preventDefault();
        $('#successAlert').slideDown();
    });
});



function validateSubmission() {
    var sendSelected = false;
    if (document.forms[0].fname.value == ""
        || document.forms[0].lname.value == ""
        || document.forms[0].mobile.value == ""
        || document.forms[0].email.value == ""
        || document.forms[0].address.value == ""
        || document.forms[0].city.value == ""
        || document.forms[0].State.value == ""
        || document.forms[0].zip.value == ""
        || document.forms[0].groupNumber.value == "" ) {
        window.alert("You must enter your contact information.");
        return false;
    }

    /* Check whether a selection is selected in the tour group */
    if (document.forms[0].select.value == "-1") {
        window.alert("You must select a work status.");
        return false;
    }

    var groupSize = document.forms[0].groupNumber.value;
    var tour = document.forms[0].select.value;

    calcCost(groupSize, tour);
    return true;
}

function confirmReset() {
    var resetForm = window.confirm("Are you sure you want to reset the form?");
    if (resetForm == true)
        return true;
    return false;
}

function showLocation() {
    $("div#moreInfo").toggle()
}

function calcCost(groupSize, tour) {
    var cost = 0;
    var totalCost =0;
    var italyRate = 4575;
    var hawaiiRate = 3500;
    var costaricaRate = 3000;
    if (tour === "1")
        cost = groupSize * italyRate;
    else if (tour == "2")
        cost = groupSize * hawaiiRate;
    else if (tour === "3")
        cost = groupSize * costaricaRate;

    totalCost = cost * 1.0825;
    totalCost = Math.round(totalCost);
    document.getElementById("totalCost").innerHTML = "Your total cost is $" + totalCost;
}