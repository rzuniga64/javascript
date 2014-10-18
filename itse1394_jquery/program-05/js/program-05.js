function setClassToHidden(options) {
    for (var i = 0; i < options.length; ++i) {
        if (options[i].checked) {
            continue;
        }
        document.getElementById("test"+ (i+1).toString()).setAttribute("class","hidden");
    }
}

// Used to check that a number has been entered
function checkForNumber(fieldValue) {
    document.getElementById("message1").innerHTML = "";
    if (isNaN(fieldValue)) {
        window.alert("You must enter a numeric value!");
        return false;
    }
    else
        return true;
}

function displayTest()
{
    var id;
    var options = document.getElementsByName("options");
    for (var i=0; i < options.length; ++i) {
        if (options[i].checked)
            id = options[i].getAttribute("id");
    }

    switch (id) {
        case "option1":
            setClassToHidden(options);
            document.getElementById("test1").setAttribute("class","show" );
            displaySize();
            break;
        case "option2":
            setClassToHidden(options);
            document.getElementById("test2").setAttribute("class","show" );
            displayLocation();
            break;
        case "option3":
            setClassToHidden(options);
            document.getElementById("test3").setAttribute("class","show" );
            break;
        case "option4":
            setClassToHidden(options);
            document.getElementById("test4").setAttribute("class","show" );
            break;
        case "option5":
            setClassToHidden(options);
            document.getElementById("test5").setAttribute("class","show" );
            break;
        case "option6":
            setClassToHidden(options);
            document.getElementById("test6").setAttribute("class","show" );
            browserInformation()
            break;
        case "option7":
            setClassToHidden(options);
            document.getElementById("test7").setAttribute("class","show" );
            break;
        case "option8":
            setClassToHidden(options);
            document.getElementById("test8").setAttribute("class","show" );
            document.getElementsByTagName("div")[15].addEventListener("click", handleDivClick);
            break;
        case "option9":
            setClassToHidden(options);
            document.getElementById("test9").setAttribute("class","show" );
            domContent();
            break;
        case "option10":
            setClassToHidden(options);
            document.getElementById("test10").setAttribute("class","show" );
            changeContent();
            break;
        case "option11":
            setClassToHidden(options);
            document.getElementById("test11").setAttribute("class","show" );
            createNode();
            break;
        case "option12":
            setClassToHidden(options);
            document.getElementById("test12").setAttribute("class","show" );
            removeNode();
            break;
        case "option13":
            setClassToHidden(options);
            document.getElementById("test13").setAttribute("class","show" );
            changeNodeList();
            break;
        default:
            setClassToHidden(options);
            document.getElementById("test1").setAttribute("class","show" );
            break;
    }
}

/*  1.  Use an HTML element event to call a function you wrote named findAverage() that
 *      uses the argument object to determine and display the average of numbers.
 */
function displaySize() {
    try {
        document.getElementById("message1").innerHTML += "The available screen height is " + screen.availHeight + ".<br />";
        document.getElementById("message1").innerHTML += "The available screen height is " + screen.availWidth + ".<br />";
        document.getElementById("message1").innerHTML += "The screen height is " + screen.height + ".<br />";
        document.getElementById("message1").innerHTML += "The screen height is " + screen.width + ".<br />";
        return true;
    } catch(e) {
        window.alert(e);
        return false;
    }
}

/*   2. se an HTML element event to call a function you wrote named displayLocation()
 *      that displays the URL location of the current page.
 */
function displayLocation() {
    try {
        (function () {
            document.getElementById("message2").innerHTML = "The URL of the current page is " + location.href;
        })();
    } catch(e) {
        window.alert(e);
        return true
    }
}

/*   3. Use an HTML element event to call a function you wrote named changeLocation() that uses
 *      the assign method to change the URL location and load a new document.
 */
function changeLocation() {
    try {
        location.assign("test.html");
    }
    catch(e) {
        window.alert(e);
        return false;
    }
}

/*  4.  Add a button “Back” to your page which loads the previous URL in the history list.
 */
function goBack() {
    document.getElementById("message4").innerHTML =  "You have visited " + history.length + " Web pages";
    var back = history.back();
    history.back();
}

/*  5. Add a button “Forward” to your page which loads the next URL in the history list.
 */
function goForward() {
    document.getElementById("message5").innerHTML =  "You have visited " + history.length + " Web pages";
    history.forward();
}

/*  6.  Use an HTML element event to call a function you wrote named browserInformation() that uses the
 navigator object to display the following information:
 • appName
 • appCodeName
 • product (engine name)

 */
function browserInformation() {
    document.getElementById("message6").innerHTML += "appName: " + navigator.appName + "<br />";
    document.getElementById("message6").innerHTML += "appCodeName: " + navigator.appCodeName+ "<br />";
    document.getElementById("message6").innerHTML += "product(engine name): " + navigator.product;

}

/* 7. Use a confirm box to ask the user if they would like to see the following information from the navigator object:
 *      •	appVersion
 *      •	userAgent
 *      •	platform
*/
function displayNavigatorObjectInfo() {
    try {
        var option = document.getElementsByName("checkbox");
        if (option[0].checked && document.getElementById("message7").innerHTML == "") {
            document.getElementById("message7").innerHTML += "appName: " + navigator.appVersion + "<br />";
            document.getElementById("message7").innerHTML += "appCodeName: " + navigator.userAgent + "<br />";
            document.getElementById("message7").innerHTML += "product(engine name): " + navigator.platform;
        } else if (!option[0].checked) {
            var checkbox =  document.getElementById("message7")
            while (checkbox.firstChild)
                checkbox.removeChild(checkbox.firstChild);
        }
    } catch(e) {
        window.alert(e);
    }
}