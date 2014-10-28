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
            document.getElementById("test6").setAttribute("class","show" );
            document.getElementById("para6").setAttribute("class","hide" );
            document.getElementById("test7").setAttribute("class","show" );
            $("#div6").append("<button class='btn btn-primary' id='btn7' onmouseup='removeImagesAfter()'>Remove After</button>");
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
        $("#attrbtn1").click(function(){
            window.alert("Value: " + $("#textbox1").val() + " Attribute: " + $("#textbox1").attr("style"));
        });
    });
}

/*   3.	Include an HTML element with an event to set the value and style attribute of an <input> text box element.
 */
function setAttrOfInput() {
    $(document).ready(function(){
        $("#attrbtn2").click(function(){
            $("#textbox2").val("Hello, World!") + $("#textbox2").attr("style", "color:red");
        });
    });
}

/*  4.	Use a callback to accomplish the following: include an HTML element with an event to change an
 *      attribute value of a <div> and display the original value.
 */
function changeAttrValueOfDiv() {
    $(document).ready(function() {
        $("#attrbtn3").click(function(){
            var x = $("#textbox3").val();
            $("#div13").attr("style", "font-size:14px color:white");
        });
    });
}

/*  5.	Create an ordered list and a text box. Use the content of the text box to create new list items that are added to the list.
 */
function addToOrderedList() {
    $(document).ready(function() {
        $("#attrbtn4").click(function(){
            $("ol").append("<li>" + $("#textbox3").val() + "</li>");
        });
    });
}

/*  6.	Include an image. Include a button to insert two images before the original image and another
 *      button to insert three images after the original image.
 */
function addImagesBefore() {
    $(document).ready(function() {
        $("#btn5").click(function(){
            var meercat = "<img src='assets/meercat.png' id='meercat'/>";
            var peacock = "<img src='assets/peacock.png' id='peacock'/>";
            $("#dog").before(meercat, peacock);
        });
    });
}

function addImagesAfter() {
    $(document).ready(function() {
        $("#btn6").click(function(){
            var fish = "<img src='assets/fish.png' id='fish'/>";
            var koala = "<img src='assets/koala.jpg' id='koala' />";
            var rhino = "<img src='assets/rhino.png' id='rhino'/>";
            $("#dog").after(fish, koala, rhino);
        });
    });
}

/* 7. Include a button to remove the three images that were inserted after the original image in item 6.
 */
function removeImagesAfter() {
    $(document).ready(function() {
        $("#btn7").click(function(){
            $("#fish").remove();
            $("#koala").remove();
            $("#rhino").remove();
        });
    });
}

/* 8.   Include an HTML element with an event to toggle the class setting of three <div>. Make the class named
 *      “toggleClass” set the background-color to red and increase the size of the three <div> from 20x20px to 50x50px.
 */
function toggleClass() {
    $(document).ready(function() {
        $("#toggleClass").mouseup(function(){
            $("#div1").toggleClass("div1", "false");
            $("#div2").toggleClass("div2", "false");
            $("#div3").toggleClass("div3", "false");
            $("#div1").toggleClass("toggleClass", "true");
            $("#div2").toggleClass("toggleClass", "true");
            $("#div3").toggleClass("toggleClass", "true");
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