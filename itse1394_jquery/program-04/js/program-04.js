var newPlayer;

/*8. Create a JavaScript string containing JSON syntax. The array name within the string should be skiResorts
*  and the keys should be: resortName and resortState. For example, Alta and Utah. There should be at least 3 key:value
*  pairs in the array.
*/
var skiResorts = '{"skiResorts":[' +
    '{"resortName":"Alta","resortState":"Utah" },' +
    '{"resortName":"Keystone","resortState":"Colorado" },' +
    '{"resortName":"Snowbird","resortState":"Utah" }]}';

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
        document.getElementById("message9").innerHTML += "In the Player display() function.<br />";
        document.getElementById("message9").innerHTML += "First Name: " + this.getFirstName() + " Last Name:" + this.getLastName()+" Height:"+this.getHeight() + " Years in league:"+this.getYearsInLeague()+".<br />";
        document.getElementById("message10").innerHTML += "In the Player display() function.<br />";
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
            findAverage(65, 85, 77, 88, 100 );
            break;
        case "option2":
            setClassToHidden(options);
            document.getElementById("test2").setAttribute("class","show" );
            selfinvoke();
            break;
        case "option3":
            setClassToHidden(options);
            document.getElementById("test3").setAttribute("class","show" );
            closureExample();
            break;
        case "option4":
            setClassToHidden(options);
            document.getElementById("test4").setAttribute("class","show" );
            colorChange();
            break;
        case "option5":
            setClassToHidden(options);
            document.getElementById("test5").setAttribute("class","show" );
            fontSizeChanged();
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
            document.getElementById("test11").setAttribute("class","show");
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
*       uses the argument object to determine and display the average of numbers.
*/
function findAverage() {
    document.getElementById("message1").innerHTML = "";

    try {
        var sum = 0;

        for (var i=0; i < arguments.length; ++i) {
            sum += arguments[i];
        }
        var ave = sum/arguments.length;
        document.getElementById("message1").innerHTML = "The average of numbers passed as parameters to findAverage() function is " + ave + ".";
        return true;
    } catch(tempError) {
        window.alert(tempError);
        return false;
    }
}

/*   2. Write a function named selfInvoke() that uses a self-invoking function to display
*       “#2 Hello from selfInvoke”.
*/
function selfinvoke() {
    try {
        (function () {
            document.getElementById("message2").innerHTML = "#2 Hello from self-invoke.";
        })();
    } catch(e) {
        window.alert(e);
        return true
    }
}

/*   3. Use an HTML element event to call a function you wrote named closureExample()
*       that uses a closure to append user-supplied names. Update/display the name list after
*       each addition. For example, (first time: “Abe” is displayed, second time: “Abe Bill” is
*       displayed, third time: “Abe Bill Charlie” is displayed, etc.).
 */
function closureExample() {
    try {
        var add = (function(name) {
            var nameList = "";
            return function(name) {
                nameList += name + " ";
                document.getElementById("message3").innerHTML += nameList + "<br />";
            }
        })();
        add("Abe");
        add("Bill");
        add("Charlie");
    }
     catch(e) {
        window.alert(e);
        return false;
    }
}

/*  4.  Use an HTML element event to call a function you wrote named colorChange () that
        changes the background-color of HTML elements with the CSS class changeMyColor.
 */
function colorChange() {
    document.getElementsByTagName("p")[6].setAttribute("class", "changeMyColor");
    document.getElementsByTagName("h4")[0].setAttribute("class", "changeMyColor");
    document.getElementById("message4").innerHTML = "I have changed the background-color with the CSS class changeMyColor.";
}

/*  5.  Use an HTML element event to call a function you wrote named fontSizeChange()
*       that changes the font size of HTML elements based on their tag name.
 */
function fontSizeChanged() {
    document.getElementsByTagName("p")[7].setAttribute("style", "font-size:16px");
    document.getElementsByTagName("h2")[0].setAttribute("style","font-size:12px");
    document.getElementById("message5").innerHTML = "I have changed the font-size of HTML elements based on their tag name.";
}

/*  6.  Demonstrate the onmouseover and onmouseout events by changing an image source
*       to display a different image.
 */
function imageSwap1() {
    var swapped = true;
    if (swapped) {
        swapped = false;
        document.getElementById("img1").setAttribute("src", "assets/basket.jpg");
    }
    else{
        swapped = true;
        document.getElementById("img1").setAttribute("src", "assets/quilt.jpg" );
    }
    return true;
}

function imageSwap2() {
    var swapped = true;
    if (swapped) {
        swapped = false;
        document.getElementById("img1").setAttribute("src", "assets/quilt.jpg");
    }
    else{
        swapped = true;
        document.getElementById("img1").setAttribute("src", "assets/basket.jpg" );
    }
    return true;
}

/*  7. Demonstrate the onmousedown and onmouseup events by changing the text and color of a
 *     <div> element.
 */
function changeOnMouseDown() {
    document.getElementsByTagName("div")[14].setAttribute("style","color:red; font-size:10px");
}

function changeOnMouseUp() {
    document.getElementsByTagName("div")[14].setAttribute("style","color:yellow;font-size:30px");
}

/*  8. Add an eventlistener to a <div> element for the click event that produces an alert.
       The listener should call a function that you write named handleDivClick().
       Use bubbling propagation.
 */
function handleDivClick() {
    window.alert("Higher level <div> event listener triggered!");
}

function handleButtonClick() {
    window.alert("Lower level button event listener triggered!");
}

/*  9.  Use an HTML element event to call a function you wrote named domContent() that writes
 *      all of the HTML content to an alert.
 */
function domContent() {
    var html = document.getElementsByTagName("html")[0];
    var container = document.createElement("div");
    container.appendChild(html.cloneNode(true));
    window.alert(container.innerHTML);
}

/*  10. Use an HTML element event to call a function you wrote named changeContent() that gets the firstChild.nodeValue
 *  of a <p> element and uses it to rest the innerHTML of an <h1> element
 */
function changeContent(){
    var target = document.getElementsByTagName("h1")[1];
    target.firstChild.nodeValue = "THIS IS AN H1";
    var y = 2;
}

/*  11.	Use an HTML element event to call a function you wrote named createNode()
 *      which creates a <p> element with the content “This is a new paragraph element”
 *      and append that <p> element to an existing <div> element.
 */
function createNode() {
    var para = document.createElement("p");
    var node = document.createTextNode("This is a new <p> node added to a <div>.");
    para.appendChild(node);

    var parent = document.getElementsByTagName("div")[19];
    parent.appendChild(para);
}

/*  12.	Use an HTML element event to call a function you wrote named removeNode() to
 *      reverse the operation of requirement 16 by removing the new <p> element.
 */
function removeNode() {
    var parent = document.getElementsByTagName("div")[19];
    parent.removeChild(parent.childNodes[0]);
}

/*  13.	Use an HTML element event to call a function you wrote named changeNodeList()
 *      to change the background-color of all <div> elements in a node list.
 */
function changeNodeList() {
    var parent = document.getElementsByClassName("starter-template")[0];
    var divs = parent.getElementsByTagName("div");
    for (var i = 0; i < divs.length; ++i) {
        divs[i].setAttribute("style", "background-color:#008000")
    }
}



