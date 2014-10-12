var landing = " Safe Landing";

/*  3.	Write an aircraft object that contains the following data and functionality:
        •	Data: type, manufacturer, maxPassengers, maxRange
        •	Functionality: takeOff(), climb(), descend(), land()
    4.	HTML element events to get and set the aircraft object data and display the results.
    5.	HTML element events that call the member functions and display confirmation of the calls.
    6.	Include a global variable with the value “Safe Landing” that is accessed and displayed by the land() function.
*/

function Aircraft(type, manufacturer, maxPassengers, maxRange) {
    this.type = type;
    this.manufacturer = manufacturer;
    this.maxPassengers = maxPassengers;
    this.maxRange = maxRange;
    this.getType = function() {
        return this.type;
    };
    this.setType = function(type) {
        return this.type = type;
      };
    this.getManufacturer = function() {
        return this.manufacturer;
    };
    this.setManufacturer = function(manufacturer) {
        return this.manufacturer = manufacturer;
    };
    this.getMaxPassengers = function() {
        return this.maxPassengers;
    };
    this.setMaxxPassengers  = function(maxPassengers) {
        return this.maxPassengers = maxPassengers;
    };
    this.getMaxRange = function() {
        return this.maxRange;
    };
    this.setMaxRange = function(maxRange) {
        return this.maxRange = maxRange;
    };
    this.display = function() {
        document.getElementById("message").innerHTML += "Type: " + this.getType()+" Manufacturer:\t\t\t"+this.manufacturer+" Max Passengers:\t"+this.getMaxPassengers() + " Max Range:\t"+this.getMaxRange()+".<br />";
    };
    this.takeoff = function() {
        document.getElementById("message").innerHTML += "Takeoff: In 10...9...8...7...6...5...4...3...2...1...blastoff!<br />";
    };
    this.climb = function() {
        document.getElementById("message").innerHTML += "Climb: The airplane is climbing to 30,0000 ft.<br />";
    };
    this.descend = function() {
        document.getElementById("message").innerHTML += "Descend: The airplane is descending for landing.<br />";
    };
    this.land = function() {
        document.getElementById("message").innerHTML += "Land: The airplane has had a" + landing + "<br />";
    };
}

function setClassToHidden(options) {
    for (var i = 0; i < options.length; ++i) {
        if (options[i].checked) {
            continue;
        }
        document.getElementById("test"+ (i+1).toString()).setAttribute("class","hidden");
    }
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
            break;
        case "option2":
            setClassToHidden(options);
            document.getElementById("test2").setAttribute("class","show" );
            break;
        case "option3":
            setClassToHidden(options);
            document.getElementById("test3").setAttribute("class","show" );
            useAircraftObject();
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
            break;
        case "option7":
            setClassToHidden(options);
            document.getElementById("test7").setAttribute("class","show" );
            break;
        case "option8":
            setClassToHidden(options);
            document.getElementById("test8").setAttribute("class","show" );
            break;
        case "option9":
            setClassToHidden(options);
            document.getElementById("test9").setAttribute("class","show" );
            setMyDate();
            break;
        case "option10":
            setClassToHidden(options);
            document.getElementById("test10").setAttribute("class","show" );
            break;
        case "option11":
            setClassToHidden(options);
            document.getElementById("test11").setAttribute("class","show" );
            displayLargestAndSmallestNumber();
            break;
        default:
            setClassToHidden(options);
            document.getElementById("test1").setAttribute("class","show" );
            break;
    }
}

/*  1.  User can enter a Fahrenheit temperature and the page displays a message based on the value entered.<br />
*       Use if-else-if statements. Use reasonable judgment to determine if the appropriate message should be cold,<br />
*       chilly, freezing, warm, hot, etc. Produce an error message if the value entered in less than -50 or greater than<br />
*       140. Use try/catch to handle the error.
*/
function displayFahrenheitMessage() {
    document.getElementById("message1").innerHTML = "";

    try {
        var temp = Number(document.forms[0][0].value);

        if (temp >= -50 && temp <= 32)
            document.getElementById("message1").innerHTML += "The temperature is freezing!";
        else if (temp > 32 && temp <= 50)
            document.getElementById("message1").innerHTML += "The temperature is cold.";
        else if (temp > 50 && temp <= 70)
            document.getElementById("message1").innerHTML += "The temperature is chilly.";
        else if (temp > 70 && temp <= 90)
            document.getElementById("message1").innerHTML += "The temperature is warm.";
        else if (temp > 90 && temp <= 140)
            document.getElementById("message1").innerHTML += "The temperature is hot!";
        else if (temp < -50 || temp >140 )
            throw "The temperature you entered is invalid! Range: -50-140 °F";

        return true;
    } catch(tempError) {
        window.alert(tempError);
        return false;
    }
}

/*   2.  User can enter a number between 1-12 (error message otherwise – use try/catch to handle the error).
*       Use a switch statement to output the month name based on the number entered.
*/
function displayMonthMessage() {

    try {
        var monthArray = new Array("January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December");
        var month = Number(document.forms[1][0].value);

        if (month >=1 && month <=12)
            document.getElementById("message2").innerHTML = "The month is " + monthArray[month-1];
        else
            throw "The number you entered must be in the range 1-12.";
    } catch(monthError) {
        window.alert(monthError);
        return false;
    }
}

/*   3. User can enter a number between 1-12 ((error message otherwise – use try/catch to handle the error).
 *      Use “Common Code and Fall-Through” to display the following messages:
 *      • 12, 1, 2: “Winter”
 *      • 3, 4, 5: “Spring”
 *      • 6, 7, 8: “Summer”
 *      • 9, 10, 11: “Fall”
 */
function displaySeasonMessage() {
    try {
        var month = Number(document.forms[2][0].value);

        if (month >=1 && month <=12)
            switch(document.forms[2][0].value) {
                case "1":
                case "2":
                case "12":
                    document.getElementById("message3").innerHTML = '12, 1, 2: "Winter"';
                    break;
                case "3":
                case "4":
                case "5":
                    document.getElementById("message3").innerHTML = '3, 4, 5: "Spring""';
                    break;
                case "6":
                case "7":
                case "8":
                    document.getElementById("message3").innerHTML = '6, 7,,8: "Summer"';
                    break;
                case "9":
                case "10":
                case "11":
                    document.getElementById("message3").innerHTML = '9, 10, 11: "Fall"';
                    break;
            }
        else
            throw "The number you entered must be in the range 1-12.";
    } catch(monthError) {
        window.alert(monthError);
        return false;
    }
}

/*  4. Create a birthMonth object with the 12 month names for keys and person names for the value of each month.
 *  For example, January: “Julia”. Use an HTML element event to call a function you wrote named displayBirthMonth()
 *  that uses a for/in loop to display the month and person names.
 * function displayBirthMonth() {
 */
function displayBirthMonth() {
    try {
        var monthArray = new Array("January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December");
        var birthMonthArray = {January: "Julia", February: "Fred", March: "Mary", April: "Andy", May: "Marie", June: "Jacky", July: "Janet", August: "Arthur", September: "Sam", October: "Oscar", November: "Nicholas", December:"David"};
        var month = Number(document.forms[3][0].value);

        if (month >=1 && month <=12)
            document.getElementById("message4").innerHTML = "The  birth month for " + birthMonthArray[monthArray[month-1]] + " is " + monthArray[month-1] + ".";
        else
            throw "The number you entered must be in the range 1-12.";
    } catch(monthError) {
        window.alert(monthError);
        return false;
    }
}

/*  5. Create a month array which contains the names of all months. Use an HTML element event to call a function you
 *  wrote named displaySelectMonths() that uses a while loop and the month array to display month names January, March,
 *  April, May, and December in an '<'h2'>' element.
 */
function displaySelectMonth() {
    var monthArray = new Array("January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December");
    var month = 1;

    while (month <= 12) {
        if (month != 1 && month != 3 && month != 4 && month != 5 && month != 12) {
            month++;
            continue;
        }
        else
            document.getElementById("message5").innerHTML += monthArray[month - 1]+ "&nbsp";

        month++;
    }
}

/*  6. Use an HTML element event to call a function you wrote named changejQueryMessage() that uses a regular
 *  expression to replace a user entered string “JavaScript makes me cry” to “JavaScript makes me smile”. Display
 *  the modified string in an '<'h2'>' element with the font-weight set to bold and the color set to blue.
 */
function changeQueryMessage(){
    var fieldValue = document.forms[4][0].value;
    var sentence = new RegExp("JavaScript makes me cry");
    if (fieldValue == "") {
        window.alert("You did not fill in the sentence field");
        return false;
    } else if (fieldValue.search(sentence) == '-1') {
        window.alert("You did not enter the sentence 'JavaScript makes me cry' correctly.");
        return false;
    }

    document.getElementById("message6").innerHTML = fieldValue.replace("cry", "smile");

    return true;
}

//  7. Write and display an example that demonstrates Strict Mode.
function testStrictMode(){
    //"use strict";
    try {
        x = 3.14; // This causes an error.
        return true;
    } catch(e) {
        window.alert(e);
    }
}

try {
    testStrictMode();
}
catch(e) {
    window.alert(e);
}
    //  #3-6: A function to use the aircraft object.
function useAircraftObject() {
    var airBus777 = new Aircraft("747","AirBus", "400", "3000 mi" );
    airBus777.display();
    document.getElementById("message").innerHTML += "getType: "+ airBus777.getType()+"<br />";
    document.getElementById("message").innerHTML += "getManufacturer: "+ airBus777.getManufacturer()+"<br />";
    document.getElementById("message").innerHTML += "getMaxPassengers: "+ airBus777.getMaxPassengers()+"<br />";
    document.getElementById("message").innerHTML += "getMaxRange: "+ airBus777.getMaxRange()+"<br />";
    document.getElementById("message").innerHTML += "setType: "+ airBus777.setType("747")+"<br />";
    document.getElementById("message").innerHTML += "setManufacturer: "+ airBus777.setManufacturer("Boeing")+"<br />";
    document.getElementById("message").innerHTML += "setMaxPassengers: "+ airBus777.setMaxxPassengers("300")+"<br />";
    document.getElementById("message").innerHTML += "setMaxrange: "+ airBus777.setMaxRange("2500 mi")+"<br /><br />";
    airBus777.display();
    airBus777.takeoff();
    airBus777.climb();
    airBus777.descend();
    airBus777.land();
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




