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
            colorRows();
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

/*  1.  Use the jQuery hide() method to hide all three colored <div> when a hide button is clicked.
 *      Use the jQuery show() method to show all three colored <div> when a show button is clicked.
 *      Set the hide() and show() to occur over 300 milliseconds.
 */

function hideShowDiv() {
    $(document).ready(function(){
        $("#hide").click(function(){
            $("#div1, #div2, #div3").hide(300);
        });
        $("#show").click(function(){
            $("#div1, #div2, #div3").show(300);
        });
    });
}
/*   2. Use the jQuery toggle() method to hide/show the three <div> from item 1.
 *      Set the toggle() to occur over 700 milliseconds.
 */
function toggleDiv() {
    $(document).ready(function(){
        $("#toggle").click(function(){
            setTimeout(function(){$("#div4, #div5, #div6").toggle()},0);
        });
    });
}

/*   3. Include a table with at least 10 rows. Odd and even rows should be different colors.
 *      Include a button to toggle hide/show the odd rows and a button to toggle hide/show the even rows.
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

/*  4. Include an element that uses jQuery to toggle-fade a <footer> element on the page for 1000 milliseconds.
 */
function toggleFadeFooter() {
    $(document).ready(function() {
        //setTimeout(function(){$("footer").toggle()},1000);
        $("footer").toggle(1000);
    });
}

/*  5. Include an element that uses jQuery to fade a <section> from black to 20% of black to reveal the word “Hello”.
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

/* 7.   Include two 100x100px <div> elements. Float one to the left (left-div) and the other to the right (right-div).
 *      Include a button “#7 Move Left-Div” which moves the left-div to the right 200px. Include a button “#7 Move Right-Div”
 *      which moves the right-div to the left 200px.
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

/* 8.	Include the text “jQuery Growing” in a <div> element. Include a <button> that causes the text to animate slowly up to 5em.
 */
function animateText() {
    $(document).ready(function() {
        $("#animateText").click(function(){
            $("#animateDiv").animate({fontSize:'5em'}, "slow");
        });
    });
}

/* 9.	This is similar to item 7 but uses a callback and only one button. Include two 100x100px <div> elements.
 *       Float one to the left (left-div) and the other to the right (right-div). Include a button “#9 Demonstrate
 *       Callback” which moves the left-div to the right 200px and then invokes a callback to move the right-div to
 *       the left 200px.
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

/* 10.	Start with a 100x100px <div>. Include a button which invokes animation to increase the height to 400px.
 *      Using chaining, hide the <div> over 3000 milliseconds. .
 */
function demonstrateChaining() {
    $(document).ready(function() {
        $("#chaining").click(function(){
            $("#animateDiv2").animate({height:'400px'}).fadeOut(3000);
        });
    });
}