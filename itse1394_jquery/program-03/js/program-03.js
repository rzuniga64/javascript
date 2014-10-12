var landing = " Safe Landing";
var newPlayer;

/*  9. Use an object constructor to create a player object with the following data members:
 *  firstName, lastName, height, yearsInLeague. Use the keyword “this” to set the values.
 *  Include a function in the object to update the yearsInLeague data.
 */
    function Player(firstName, lastName, height, yearsInLeague) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.height = height;
    this.yearsInLeague = yearsInLeague;
    document.getElementById("message9").innerHTML += "In the Player constructor.<br />";

    this.getFirstName= function() {
        return this.firstName;
    };

    this.getLastName = function() {
        return this.lastName;
    };

    this.getHeight= function() {
        return this.height;
    };

    this.getYearsInLeague= function() {
        return this.yearsInLeague;
    };

    this.setYearsInLeague = function(yearsInLeague) {
        document.getElementById("message10").innerHTML += "In the Player setYearsInLeague() function.<br />";
        return this.yearsInLeague = yearsInLeague;
    };

    this.display = function() {
        document.getElementById("message9").innerHTML += "In the Player display() function.<br />"
        document.getElementById("message9").innerHTML += "First Name: " + this.getFirstName() + " Last Name:" + this.getLastName()+" Height:"+this.getHeight() + " Years in league:"+this.getYearsInLeague()+".<br />";
        document.getElementById("message10").innerHTML += "In the Player display() function.<br />"
        document.getElementById("message10").innerHTML += "First Name: " + this.getFirstName() + " Last Name:" + this.getLastName()+" Height:"+this.getHeight() + " Years in league:"+this.getYearsInLeague()+".<br />";
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
            break;
        case "option2":
            setClassToHidden(options);
            document.getElementById("test2").setAttribute("class","show" );
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
            initializePlayer();
            break;
        case "option10":
            setClassToHidden(options);
            document.getElementById("test10").setAttribute("class","show" );
            updatePlayer();
            break;
        case "option11":
            setClassToHidden(options);
            document.getElementById("test11").setAttribute("class","show" );
            addTeamDataMember();
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

/*  9. Use an HTML element event to call a function you wrote named initializePlayer()
 *  that creates a new player instance and displays the new instance data.
 */
function initializePlayer() {
    newPlayer = new Player("Tony","Parker", "72 in", "15" );
    newPlayer.display();
}

/* 10 Use an HTML element event to call a function you wrote for the player object to update the yearInLeague data.
 *  Display the result (a confirmation of the update).
 */
function updatePlayer() {
    initializePlayer();
    newPlayer.setYearsInLeague("16");
    newPlayer.display();

}

/*  11.	Use the prototype property to add a new data member to the player prototype named team. Use the prototype
 *   property to add a function to the player prototype which changes the team data. Use an HTML element event to
 *   call that function and display the result (a confirmation of the update).
 */
function addTeamDataMember() {
    initializePlayer();
    Player.prototype.team = "Spurs";
    Player.prototype.getTeam = function() {
        document.getElementById("message11").innerHTML += "In the new Player getTeam() function.<br />";
        return this.team;
    };

    Player.prototype.setTeam = function(team) {
        this.team = team;
        document.getElementById("message11").innerHTML += "In the new Player setTeam() function.<br />";
    };
    document.getElementById("message11").innerHTML += "New team data member = " + newPlayer.getTeam() + "<br />";
    newPlayer.setTeam("Rockets");
    document.getElementById("message11").innerHTML += "Updated team data member = " + newPlayer.getTeam() + "<br />";
    return true;
}



