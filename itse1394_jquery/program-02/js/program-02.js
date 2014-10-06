var isBlue = true;
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
        document.getElementById("message").innerHTML += "<p>Default values: " + this.getType()+" Manufacturer:\t\t\t"+this.manufacturer+" Max Passengers:\t"+this.getMaxPassengers() + " Max Range:\t"+this.getMaxRange()+".</p>";
    }
    this.takeoff = function() {
        document.getElementById("message").innerHTML += "<p>Takeoff: In 10...9...8...7...6...5...4...3...2...1...blastoff!</p>";
    };
    this.climb = function() {
        document.getElementById("message").innerHTML += "<p>Climb: The airplane is climbing to 30,0000 ft.</p>";
    };
    this.descend = function() {
        document.getElementById("message").innerHTML += "<p>Descend: The airplane is descending for landing.</p>";
    };
    this.land = function() {
        document.getElementById("message").innerHTML += "<p>Land: The airplane has had a" + landing + "</p>";
    };
}

// Function to show only the test 1
function requirement1() {
    document.getElementById("para2").setAttribute("class","hide");
    document.getElementById("dateTime").setAttribute("class","hide");
    document.getElementById("para2_5").setAttribute("class","hide" );
    document.getElementById("message").setAttribute("class","hide" );
    document.getElementById("para3").setAttribute("class","hide");
    document.getElementById("form1").setAttribute("class","hide");
    document.getElementById("para4").setAttribute("class","hide");
    document.getElementById("form2").setAttribute("class","hide");
    document.getElementById("para5").setAttribute("class","hide" );
    document.getElementById("form3").setAttribute("class","hide" );
    document.getElementById("para6").setAttribute("class","hide" );
    document.getElementById("form4").setAttribute("class","hide" );
    document.getElementById("para7").setAttribute("class","hide" );
    document.getElementById("form5").setAttribute("class","hide" );
    document.getElementById("para8").setAttribute("class","hide" );
    document.getElementById("dateDay").setAttribute("class","hide" );
    document.getElementById("para9").setAttribute("class","hide" );
    document.getElementById("form6").setAttribute("class","hide" );
    document.getElementById("para10").setAttribute("class","hide" );
    document.getElementById("largestAndSmallestNumber").setAttribute("class","hide" );

    document.getElementById("para1").setAttribute("class","show" );
    document.getElementById("clickMe").setAttribute("class","btn btn-success" );
}

// Function to show only the test 2
function requirement2() {
    document.getElementById("clickMe").setAttribute("class","hide btn btn-success" );
    document.getElementById("para1").setAttribute("class","hide" );
    document.getElementById("para2_5").setAttribute("class","hide" );
    document.getElementById("message").setAttribute("class","hide" );
    document.getElementById("para3").setAttribute("class","hide");
    document.getElementById("form1").setAttribute("class","hide");
    document.getElementById("message").setAttribute("class","hide" );
    document.getElementById("para4").setAttribute("class","hide");
    document.getElementById("form2").setAttribute("class","hide");
    document.getElementById("para5").setAttribute("class","hide" );
    document.getElementById("form3").setAttribute("class","hide" );
    document.getElementById("para6").setAttribute("class","hide" );
    document.getElementById("form4").setAttribute("class","hide" );
    document.getElementById("para7").setAttribute("class","hide" );
    document.getElementById("form5").setAttribute("class","hide" );
    document.getElementById("para8").setAttribute("class","hide" );
    document.getElementById("dateDay").setAttribute("class","hide" );
    document.getElementById("para9").setAttribute("class","hide" );
    document.getElementById("form6").setAttribute("class","hide" );
    document.getElementById("para10").setAttribute("class","hide" );
    document.getElementById("largestAndSmallestNumber").setAttribute("class","hide" );

    document.getElementById("para2").setAttribute("class","show" );
    document.getElementById("dateTime").setAttribute("class","show" );
}

// Function to show only the test 3-6
function requirement3() {
    document.getElementById("clickMe").setAttribute("class","hide btn btn-success" );
    document.getElementById("para1").setAttribute("class","hide" );
    document.getElementById("para2").setAttribute("class", "hide");
    document.getElementById("dateTime").setAttribute("class","hide");
    document.getElementById("para3").setAttribute("class","hide");
    document.getElementById("form1").setAttribute("class","hide");
    document.getElementById("para4").setAttribute("class","hide");
    document.getElementById("form2").setAttribute("class","hide");
    document.getElementById("para5").setAttribute("class","hide" );
    document.getElementById("form3").setAttribute("class","hide" );
    document.getElementById("para6").setAttribute("class","hide" );
    document.getElementById("form4").setAttribute("class","hide" );
    document.getElementById("para7").setAttribute("class","hide" );
    document.getElementById("form5").setAttribute("class","hide" );
    document.getElementById("para8").setAttribute("class","hide" );
    document.getElementById("dateDay").setAttribute("class","hide" );
    document.getElementById("para9").setAttribute("class","hide" );
    document.getElementById("form6").setAttribute("class","hide" );
    document.getElementById("para10").setAttribute("class","hide" );
    document.getElementById("largestAndSmallestNumber").setAttribute("class","hide" );

    document.getElementById("para2_5").setAttribute("class","show" );
    document.getElementById("message").setAttribute("class","show" );
    useAircraftObject();
}

// Function to show only the test 7
function requirement4() {
    document.getElementById("clickMe").setAttribute("class","hide btn btn-success" );
    document.getElementById("para1").setAttribute("class","hide" );
    document.getElementById("para2").setAttribute("class","hide");
    document.getElementById("dateTime").setAttribute("class","hide");
    document.getElementById("para2_5").setAttribute("class","hide" );
    document.getElementById("message").setAttribute("class","hide" );
    document.getElementById("para4").setAttribute("class","hide");
    document.getElementById("form2").setAttribute("class","hide");
    document.getElementById("para5").setAttribute("class","hide" );
    document.getElementById("form3").setAttribute("class","hide" );
    document.getElementById("para6").setAttribute("class","hide" );
    document.getElementById("form4").setAttribute("class","hide" );
    document.getElementById("para7").setAttribute("class","hide" );
    document.getElementById("form5").setAttribute("class","hide" );
    document.getElementById("para8").setAttribute("class","hide" );
    document.getElementById("dateDay").setAttribute("class","hide" );
    document.getElementById("para9").setAttribute("class","hide" );
    document.getElementById("form6").setAttribute("class","hide" );
    document.getElementById("para10").setAttribute("class","hide" );
    document.getElementById("largestAndSmallestNumber").setAttribute("class","hide" );

    document.getElementById("para3").setAttribute("class","show" );
    document.getElementById("form1").setAttribute("class","show" );
}

// Function to show only the test 8
function requirement5() {
    document.getElementById("clickMe").setAttribute("class","hide btn btn-success" );
    document.getElementById("para1").setAttribute("class","hide" );
    document.getElementById("para2").setAttribute("class","hide");
    document.getElementById("dateTime").setAttribute("class","hide");
    document.getElementById("para2_5").setAttribute("class","hide" );
    document.getElementById("message").setAttribute("class","hide" );
    document.getElementById("para3").setAttribute("class","hide");
    document.getElementById("form1").setAttribute("class","hide");
    document.getElementById("para5").setAttribute("class","hide" );
    document.getElementById("form3").setAttribute("class","hide" );
    document.getElementById("para6").setAttribute("class","hide" );
    document.getElementById("form4").setAttribute("class","hide" );
    document.getElementById("para7").setAttribute("class","hide" );
    document.getElementById("form5").setAttribute("class","hide" );
    document.getElementById("para8").setAttribute("class","hide" );
    document.getElementById("dateDay").setAttribute("class","hide" );
    document.getElementById("para9").setAttribute("class","hide" );
    document.getElementById("form6").setAttribute("class","hide" );
    document.getElementById("para10").setAttribute("class","hide" );
    document.getElementById("largestAndSmallestNumber").setAttribute("class","hide" );

    document.getElementById("para4").setAttribute("class","show" );
    document.getElementById("form2").setAttribute("class","show" );
}

// Function to show only the test 9
function requirement6() {
    document.getElementById("clickMe").setAttribute("class","hide btn btn-success");
    document.getElementById("para1").setAttribute("class","hide");
    document.getElementById("para2").setAttribute("class","hide");
    document.getElementById("dateTime").setAttribute("class","hide");
    document.getElementById("para2_5").setAttribute("class","hide" );
    document.getElementById("message").setAttribute("class","hide" );
    document.getElementById("para3").setAttribute("class","hide");
    document.getElementById("form1").setAttribute("class","hide");
    document.getElementById("para4").setAttribute("class","hide");
    document.getElementById("form2").setAttribute("class","hide");
    document.getElementById("para6").setAttribute("class","hide" );
    document.getElementById("form4").setAttribute("class","hide" );
    document.getElementById("para7").setAttribute("class","hide" );
    document.getElementById("form5").setAttribute("class","hide" );
    document.getElementById("para8").setAttribute("class","hide" );
    document.getElementById("dateDay").setAttribute("class","hide" );
    document.getElementById("para9").setAttribute("class","hide" );
    document.getElementById("form6").setAttribute("class","hide" );
    document.getElementById("para10").setAttribute("class","hide" );
    document.getElementById("largestAndSmallestNumber").setAttribute("class","hide" );

    document.getElementById("para5").setAttribute("class","show" );
    document.getElementById("form3").setAttribute("class","show" );
}

// Function to show only the test 10
function requirement7() {
    document.getElementById("clickMe").setAttribute("class","hide btn btn-success");
    document.getElementById("para1").setAttribute("class","hide");
    document.getElementById("para2").setAttribute("class","hide");
    document.getElementById("dateTime").setAttribute("class","hide");
    document.getElementById("para2_5").setAttribute("class","hide" );
    document.getElementById("message").setAttribute("class","hide" );
    document.getElementById("para3").setAttribute("class","hide");
    document.getElementById("form1").setAttribute("class","hide");
    document.getElementById("para4").setAttribute("class","hide");
    document.getElementById("form2").setAttribute("class","hide");
    document.getElementById("para5").setAttribute("class","hide" );
    document.getElementById("form3").setAttribute("class","hide" );
    document.getElementById("para7").setAttribute("class","hide" );
    document.getElementById("form5").setAttribute("class","hide" );
    document.getElementById("para8").setAttribute("class","hide" );
    document.getElementById("dateDay").setAttribute("class","hide" );
    document.getElementById("para9").setAttribute("class","hide" );
    document.getElementById("form6").setAttribute("class","hide" );
    document.getElementById("para10").setAttribute("class","hide" );
    document.getElementById("largestAndSmallestNumber").setAttribute("class","hide" );

    document.getElementById("para6").setAttribute("class","show" );
    document.getElementById("form4").setAttribute("class","show" );
}

// Function to show only the test 11
function requirement8() {
    document.getElementById("clickMe").setAttribute("class","hide btn btn-success");
    document.getElementById("para1").setAttribute("class","hide");
    document.getElementById("para2").setAttribute("class","hide");
    document.getElementById("dateTime").setAttribute("class","hide");
    document.getElementById("para2_5").setAttribute("class","hide" );
    document.getElementById("message").setAttribute("class","hide" );
    document.getElementById("para3").setAttribute("class", "hide");
    document.getElementById("form1").setAttribute("class", "hide");
    document.getElementById("para4").setAttribute("class", "hide");
    document.getElementById("form2").setAttribute("class", "hide");
    document.getElementById("para5").setAttribute("class","hide" );
    document.getElementById("form3").setAttribute("class","hide" );
    document.getElementById("para6").setAttribute("class","hide" );
    document.getElementById("form4").setAttribute("class","hide" );
    document.getElementById("para8").setAttribute("class","hide" );
    document.getElementById("dateDay").setAttribute("class","hide" );
    document.getElementById("para9").setAttribute("class","hide" );
    document.getElementById("form6").setAttribute("class","hide" );
    document.getElementById("para10").setAttribute("class","hide" );
    document.getElementById("largestAndSmallestNumber").setAttribute("class","hide" );

    document.getElementById("para7").setAttribute("class","show" );
    document.getElementById("form5").setAttribute("class","show" );
}

// Function to show only the test 12
function requirement9() {
    document.getElementById("clickMe").setAttribute("class","hide btn btn-success");
    document.getElementById("para1").setAttribute("class","hide");
    document.getElementById("para2").setAttribute("class","hide");
    document.getElementById("dateTime").setAttribute("class","hide");
    document.getElementById("para2_5").setAttribute("class","hide" );
    document.getElementById("message").setAttribute("class","hide" );
    document.getElementById("para3").setAttribute("class","hide");
    document.getElementById("form1").setAttribute("class","hide");
    document.getElementById("para4").setAttribute("class","hide");
    document.getElementById("form2").setAttribute("class","hide");
    document.getElementById("para5").setAttribute("class","hide" );
    document.getElementById("form3").setAttribute("class","hide" );
    document.getElementById("para6").setAttribute("class","hide" );
    document.getElementById("form4").setAttribute("class","hide" );
    document.getElementById("para7").setAttribute("class","hide" );
    document.getElementById("form5").setAttribute("class","hide" );
    document.getElementById("para9").setAttribute("class","hide" );
    document.getElementById("form6").setAttribute("class","hide" );
    document.getElementById("para10").setAttribute("class","hide" );
    document.getElementById("largestAndSmallestNumber").setAttribute("class","hide" );

    document.getElementById("para8").setAttribute("class","show" );
    document.getElementById("dateDay").setAttribute("class","show" );
    setMyDate();
}

// Function to show only the test 13
function requirement10() {
    document.getElementById("clickMe").setAttribute("class","hide btn btn-success");
    document.getElementById("para1").setAttribute("class","hide");
    document.getElementById("para2").setAttribute("class","hide");
    document.getElementById("dateTime").setAttribute("class","hide");
    document.getElementById("para2_5").setAttribute("class","hide" );
    document.getElementById("message").setAttribute("class","hide" );
    document.getElementById("para3").setAttribute("class","hide");
    document.getElementById("form1").setAttribute("class","hide");
    document.getElementById("para4").setAttribute("class","hide");
    document.getElementById("form2").setAttribute("class","hide");
    document.getElementById("para5").setAttribute("class","hide" );
    document.getElementById("form3").setAttribute("class","hide" );
    document.getElementById("para6").setAttribute("class","hide" );
    document.getElementById("form4").setAttribute("class","hide" );
    document.getElementById("para7").setAttribute("class","hide" );
    document.getElementById("form5").setAttribute("class","hide" );
    document.getElementById("para8").setAttribute("class","hide" );
    document.getElementById("dateDay").setAttribute("class","hide" );
    document.getElementById("para10").setAttribute("class","hide" );
    document.getElementById("largestAndSmallestNumber").setAttribute("class","hide" );

    document.getElementById("para9").setAttribute("class","show" );
    document.getElementById("form6").setAttribute("class","show" );
}

// Function to show only the test 14
function requirement11() {
    document.getElementById("clickMe").setAttribute("class","hide btn btn-success");
    document.getElementById("para1").setAttribute("class","hide");
    document.getElementById("para2").setAttribute("class","hide");
    document.getElementById("dateTime").setAttribute("class","hide");
    document.getElementById("para2_5").setAttribute("class","hide" );
    document.getElementById("message").setAttribute("class","hide" );
    document.getElementById("para3").setAttribute("class","hide");
    document.getElementById("form1").setAttribute("class","hide");
    document.getElementById("para4").setAttribute("class","hide");
    document.getElementById("form2").setAttribute("class","hide");
    document.getElementById("para5").setAttribute("class","hide" );
    document.getElementById("form3").setAttribute("class","hide" );
    document.getElementById("para6").setAttribute("class","hide" );
    document.getElementById("form4").setAttribute("class","hide" );
    document.getElementById("para7").setAttribute("class","hide" );
    document.getElementById("form5").setAttribute("class","hide" );
    document.getElementById("para8").setAttribute("class","hide" );
    document.getElementById("dateDay").setAttribute("class","hide" );
    document.getElementById("para9").setAttribute("class","hide" );
    document.getElementById("form6").setAttribute("class","hide" );

    document.getElementById("para10").setAttribute("class","show" );
    document.getElementById("largestAndSmallestNumber").setAttribute("class","show" );
    displayLargestAndSmallestNumber();
}

    //   #1.	Call a function when a button is clicked that changes the color and text content
    //   (innerHTML) of the button. Toggle not required but is ok.
    function changeButtonColor() {
    if (isBlue) {
        document.getElementById("clickMe").setAttribute("class","btn btn-success" );
        document.getElementById("clickMe").innerHTML = "Click me again!";
        isBlue = false;
    }
    else {
        document.getElementById("clickMe").setAttribute("class","btn btn-primary" );
        document.getElementById("clickMe").innerHTML = "Click me!";
        isBlue = true;
    }
    return isBlue;
}

   //   #2. Write the current date/time in U.S. central time format directly to the HTML document.
function getTodayDate() {
    var dateObject = new Date();
    var month = dateObject.getMonth();
    var monthArray = new Array("January","February","March","April","May","June","July","August","September","October","November","December");
    var dateToday = monthArray[month] + " " + dateObject.getDate() + ", " + dateObject.getFullYear() + " " + dateObject.getHours() +
        ":" + dateObject.getMinutes() + ":" + dateObject.getSeconds();
    document.getElementById("dateTime").innerHTML = dateToday;
}

    //  #3-6: A function to use the aircraft object.
function useAircraftObject() {
    var airBus777 = new Aircraft("747","AirBus", "400", "3000 mi" );
    airBus777.display();
    document.getElementById("message").innerHTML += "getType: "+ airBus777.getType()+"<br />";
    document.getElementById("message").innerHTML += "getManufacturer: "+ airBus777.getManufacturer()+"<br />";
    document.getElementById("message").innerHTML += "getType: "+ airBus777.getMaxPassengers()+"<br />";
    document.getElementById("message").innerHTML += "getType: "+ airBus777.getMaxRange()+"<br />";
    document.getElementById("message").innerHTML += "setType: "+ airBus777.setType("747")+"<br />";
    document.getElementById("message").innerHTML += "setManufacturer: "+ airBus777.setManufacturer("Boeing")+"<br />";
    document.getElementById("message").innerHTML += "setType: "+ airBus777.setMaxxPassengers("300")+"<br />";
    document.getElementById("message").innerHTML += "setType: "+ airBus777.setMaxRange("2500 mi")+"<br /><br />";
    airBus777.display();
    airBus777.takeoff();
    airBus777.climb();
    airBus777.descend();
    airBus777.land();
}

//  7. User can enter a sentence. Use string methods to replace the word “purple” (if it exists) with “yellow”.
//  Display the original and altered sentence.
function validateStringAndReplace() {
    var retValue = true;
    var sentence = document.forms[0][0].value;

    if (sentence == "") {
        window.alert("You did not fill in the sentence field");
        return false;
    } else if (sentence.indexOf("purple") == '-1') {
        window.alert("You did not enter a sentence with the word 'purple'.");
        return false;
    }
    document.forms[0][1].value= sentence.replace(/purple/g, "yellow");
    return retValue;
}

// Used to clear the modified sentence field if the user types in a new sentence
function clearModifiedSentenceField() {
        document.forms[0][1].value= "";
    }

// Used to check that a number has been entered
function checkForNumber(fieldValue) {
    if (isNaN(fieldValue)) {
        window.alert("You must enter a numeric value!");
        return false;
    }
    else
        return true;
}

// #8.User can enter a number and it is rounded to 2 decimal places (like dollars and cents).
//  Display results including a preceding $.
function roundNumber() {
    var number = parseFloat(document.forms[1][0].value);
    if (isNaN(number)) {
        window.alert("You must enter a numeric value!");
        return false;
    } else {
        number = number.toFixed(2);
        document.forms[1][0].value = number.toLocaleString();
        return true;
    }
}

    // #9. User can enter two numbers. HTML element event which calls a function you wrote named performModulus()
    // which performs the modulus operation and displays the result.
    function performModulus(){
    var numerator = Number(document.forms[2][0].value);
    var denominator = Number(document.forms[2][1].value);
    var modulus;
    if (denominator == 0)
        window.alert("Denominator cannot be zero!");
    else {
        modulus = numerator%denominator;
        modulus = modulus.toFixed(2);
        document.forms[2][2].value = modulus;
    }
}

// #10.	User can enter two strings. Call a function you wrote named stringConcat() that concatenates the strings and displays the results.
function stringConcat() {
    var string1 = document.forms[3][0].value;
    var string2 = document.forms[3][1].value;
    document.forms[3][2].value = string1.concat(string2);
}

// 11.	HTML element event which calls a function you wrote named randomRun() which displays a random number between and including 25 to 75.
function randomRun() {
    document.forms[4][0].value = Math.floor((Math.random() * 50) + 25);
}

// #12.	HTML element event which calls a function you wrote named setMyDate() which creates a Date object and sets the date to 01Jan2020.
// Display the day of the week (e.g. Monday) of that date using the Date object get method(s) and an array containing the day names.
function setMyDate() {
    var dayArray = new Array("Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Firday", "Saturday");
    var monthArray = new Array("January","February","March","April","May","June","July","August","September","October","November","December");
    var dateObject = new Date(2020, 0, 1, 0, 0, 0, 0);
    var day = dateObject.getDay();
    var month = dateObject.getMonth();
    document.getElementById("dateDay").innerHTML = "The day of the week is " + dayArray[day] + " on " +   monthArray[month] + " "
        + dateObject.getDate() + ", " + dateObject.getFullYear() + " " + dateObject.getHours() + ":" + dateObject.getMinutes() + ":" + dateObject.getSeconds();
}

// #13.	User can enter two strings. HTML element event which calls a function you wrote named compareStrings() which determines if the
// strings are equal and displays the results.
function compareStrings(){
    var string1 = document.forms[5][0].value;
    var string2 = document.forms[5][1].value;
    if ( string1 == string2 )
        document.forms[5][2].value = "Strings are the same";
    else
        document.forms[5][2].value = "Strings are not the same";
}

// #14. Display the largest and smallest number possible in JavaScript.
function displayLargestAndSmallestNumber() {
    document.getElementById("largestAndSmallestNumber").innerHTML = "The largest number in Java is " + Number.MAX_VALUE + " and the smallest number is " + Number.MIN_VALUE;
}

