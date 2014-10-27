function setClassToHidden(options) {
    for (var i = 0; i < options.length; ++i) {
        if (!(options[i].checked))
            document.getElementById("test" + (i + 1).toString()).setAttribute("class", "hidden");
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
            break;
        case "option10":
            setClassToHidden(options);
            document.getElementById("test10").setAttribute("class","show" );
            break;
        default:
            setClassToHidden(options);
            document.getElementById("test1").setAttribute("class","show" );
            break;
    }
}

/*  1.  Include two buttons to display the “text” and “html” properties of a <p> element that uses the <code>
 *      text-level attribute to identify some of the text as code.
 */
function showText() {
    $(document).ready(function(){
        $("#textbtn").click(function(){
            window.alert("Text: " + $("#para2").text());
        });
    });
}

function showHTML() {
    $(document).ready(function(){
        $("#htmlbtn").click(function(){
            window.alert("HTML: " + $("#para2").html());
        });
    });
}

/*   2.	Include an HTML element with an event to display the value and style attribute of an <input> text box element.
 */
function getAttrOfInput() {
    $(document).ready(function(){
        $("#attrbtn").click(function(){
            window.alert("Value: " + $("#textbox").val() + " Attribute: " + $("#textbox").attr("style"));
        });
    });
}

/*   3.	Include an HTML element with an event to set the value and style attribute of an <input> text box element.
 */
function colorRows() {
    $(document).ready(function(){
        $(".table1 tr:odd").css("background-color", "#BFBFBF");
    });
}

function hideShowEvenRows(){
    $(document).ready(function () {
        $("#even").click(function () {
            $(".table1 tr:even").toggle();
        });
    });
}

function hideShowOddRows(){
    $(document).ready(function () {
        $("#odd").click(function () {
            $(".table1 tr:odd").toggle();
        });
    });
}

/*  4.	Use a callback to accomplish the following: include an HTML element with an event to change an
 *      attribute value of a <div> and display the original value.
 */
function toggleFadeFooter() {
    $(document).ready(function() {
        //setTimeout(function(){$("footer").toggle()},1000);
        $("footer").toggle(1000);
    });
}

/*  5.	Create an ordered list and a text box. Use the content of the text box to create new list items that are added to the list.
 */
function fadeToSection() {
    $(document).ready(function() {
        $("section").fadeTo("slow", 0.8, function(){
            $(".para6").toggleClass("para6");
        });
    });
}

/*  6. Center two <div> elements on the page and use jQuery to toggle-slide the appearance of the lower by clicking the upper.
 */
function toggleSlide() {
    $(document).ready(function() {
        $("#flip").click(function(){
            $("#lowerDiv").slideToggle();
        });
    });
}

/* 7. Include a button to remove the three images that were inserted after the original image in item 6.
 */
function moveLeftDiv() {
    $(document).ready(function() {
        $("#moveLeftDiv").click(function(){
            $("#leftDiv").animate({left:'200px'});
        });
    });
}

function moveRightDiv() {
    $(document).ready(function() {
        $("#moveRightDiv").click(function(){
            $("#rightDiv").animate({right:'200px'});
        });
    });
}

/* 8.   Include an HTML element with an event to toggle the class setting of three <div>. Make the class named
 *      “toggleClass” set the background-color to red and increase the size of the three <div> from 20x20px to 50x50px.
 */
function animateText() {
    $(document).ready(function() {
        $("#animateText").click(function(){
            $("#animateDiv").animate({fontSize:'5em'}, "slow");
        });
    });
}

/* 9. Include an HTML element with an event that invokes the .css method on an <h1> to change the font color to blue and font-style to italic.
 */
function demonstrateCallback() {
    $(document).ready(function() {
        $("#callback").click(function(){
            $("#leftDiv2").animate({left:'200px'},function(){
                $("#rightDiv2").animate({right:'200px'});
            });
        });
    });
}

/* 10.	Include a button to display the width, height, innerWidth, innerHeight, outerWidth, and outerHeight of
 *      the <div> in item 8. The outerWidth and outerHeight should include the margin.
 */
function demonstrateChaining() {
    $(document).ready(function() {
        $("#chaining").click(function(){
            $("#animateDiv2").animate({height:'400px'}).fadeOut(3000);
        });
    });
}