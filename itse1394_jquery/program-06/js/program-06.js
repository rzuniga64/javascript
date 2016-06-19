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
            colorRows();
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
            changeColorOnFocus();
            break;
        case "option7":
            setClassToHidden(options);
            document.getElementById("test7").setAttribute("class","show" );
            break;
        default:
            setClassToHidden(options);
            document.getElementById("test1").setAttribute("class","show" );
            break;
    }
}

/*  1.  Three <div> elements with background-colors red, green, and blue that become hidden
        when each is clicked. That is, the red <div> is hidden when it is clicked, etc.
 */
function hideDiv() {
    $(document).ready(function(){
        $('#div1').click(function() {
            $("#div1").hide();
        });
        $('#div2').click(function() {
            $("#div2").hide();
        });
        $('#div3').click(function() {
            $("#div3").hide();
        });
    });
}

/*   2. A table with ten rows. Use jQuery to make the even rows one color and the odd rows another.
 *      It is best practice to ensure text can be read easily with selected background colors.
 */
function colorRows() {
    $(document).ready(function(){
        $(".table1 tr:odd").css("background-color", "#BFBFBF");
    });
}

/*   3. At least seven <p> elements, three of which have the class colorChange applied. Use an HTML
 *      element event to call a function you wrote named changeColor() that uses jQuery to change
 *      the color of the <p> elements with the colorChange class applied.
 */
function changeColor() {
    $(document).ready(function() {
        $('button').click(function () {
            if  ($("div#test3 p").eq(1).css("background-color")== "rgb(100, 149, 237)") {
                $("div#test3 p:even").css("background-color", "#6495ED");
                $("div#test3 p:odd").css("background-color", "#003d79");
            } else {
                $("div#test3 p:even").css("background-color", "#003d79");
                $("div#test3 p:odd").css("background-color", "#6495ED");
            }
        });
    });
}
/*  4.  Implement a button image toggle feature. Include at least four <button> elements that
 *       employ background image for the buttons. Use an HTML element event to call a function
 *       you wrote named buttonImageToggle() that uses jQuery to change the background image of all
 *       buttons on the page. When the event is fired again the image revert back to the default.
 */
function buttonImageToggle() {
    $(document).ready(function() {
        $(':button').click(function() {

            if ($("div#test4 button").eq(0).hasClass("button1")){
                $("div#test4 button").eq(0).removeClass("button1");
                $("div#test4 button").eq(0).addClass("button5");

                ($("div#test4 button").eq(1).hasClass("button2"))
                $("div#test4 button").eq(1).removeClass("button2");
                $("div#test4 button").eq(1).addClass("button6");

               ($("div#test4 button").eq(2).hasClass("button3"))
                $("div#test4 button").eq(2).removeClass("button3");
                $("div#test4 button").eq(2).addClass("button7");

               ($("div#test4 button").eq(3).hasClass("button4"))
                $("div#test4 button").eq(3).removeClass("button4");
                $("div#test4 button").eq(3).addClass("button8");
            } else if ($("div#test4 button").eq(0).hasClass("button5")) {
                $("div#test4 button").eq(0).removeClass("button5");
                $("div#test4 button").eq(0).addClass("button1");

                ($("div#test4 button").eq(1).hasClass("button6"))
                $("div#test4 button").eq(1).removeClass("button6");
                $("div#test4 button").eq(1).addClass("button2");

                ($("div#test4 button").eq(2).hasClass("button7"))
                $("div#test4 button").eq(2).removeClass("button7");
                $("div#test4 button").eq(2).addClass("button3");

                ($("div#test4 button").eq(3).hasClass("button8"))
                $("div#test4 button").eq(3).removeClass("button8");
                $("div#test4 button").eq(3).addClass("button4");
            }
        });
    });
}

/*  5.  Use an HTML element event to call a function you wrote named changeFirstParagraph()
 *      that uses jQuery to select the first <p> and change the font-family and increase the font-size.
 */
function changeFirstParagraph() {
    $(document).ready(function() {
        $("div#test5 p").eq(0).css("font-family","Times New Roman, Times, serif");
        $("div#test5 p").eq(0).css("font-size","20px");
    });
}

/*  6.	At least two <input> text boxes that use jQuery to apply the color #FF9 when receiving
 *      the focus. The color should return to #FFF or another default when the focus has left the text boxes.
 */
function changeColorOnFocus() {
    $(document).ready(function() {
        $("div#test6 #textbox1").focus(function(){
            $("div#test6 #textbox1").css("color","#FF9");
        })
        $("div#test6 #textbox1").blur(function(){
            $("div#test6 #textbox1").css("color","white");
        })
        $("div#test6 #textbox2").focus(function(){
            $("div#test6 #textbox2").css("color","#FF9");
        })
        $("div#test6 #textbox2").blur(function(){
            $("div#test6 #textbox2").css("color","white");
        })
    });
}

/* 7.   Increase the size of a <nav> element when the mouse enters the element and return the size to
 *      the default when the mouse leaves. Use color to identify the <nav> element.
 */
function onMouseOver() {
    $(document).ready(function() {
        $("nav").css("width","570px");
        $("nav").css("height","30px");
    });
}

function onMouseOut() {
    $(document).ready(function() {
        $("nav").css("width","1140px");
        $("nav").css("height","20px");
    });
}