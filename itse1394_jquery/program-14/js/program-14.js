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
            addClasses();
            break;
        case "option2":
            setClassToHidden(options);
            document.getElementById("test2").setAttribute("class","show" );
            animate();
            break;
        case "option3":
            setClassToHidden(options);
            document.getElementById("test3").setAttribute("class","show" );
            effect();
            break;
        case "option4":
            setClassToHidden(options);
            document.getElementById("test4").setAttribute("class","show" );
            removeClass();
            break;
        case "option5":
            setClassToHidden(options);
            document.getElementById("test5").setAttribute("class","show" );
            switchClass;
            break;
        case "option6":
            setClassToHidden(options);
            document.getElementById("test6").setAttribute("class","show" );
            toggle();
            break;
        case "option7":
            setClassToHidden(options);
            document.getElementById("test7").setAttribute("class","show" );
            toggleClass();
            break;
        default:
            setClassToHidden(options);
            document.getElementById("test1").setAttribute("class","show" );
            break;
    }
}

/*  1.	Include a button with a click event that adds three classes to a &lt;header&gt;.
 *      Include another button with a click event that removes class3. The classes
 *      should have the following properties:
 *      •	class1: cause the header to expand from the center to 960px
 *      •	class2: cause the background-color to change from #FFC to #F96
 *      •	class3: add a blue border
 */
function addClasses() {
    $(document).ready(function() {
        $("#add").click(function() {
            $("#header").removeClass("header1", 1000, "linear")
            $("#header").addClass("width background_color border_color", 1000, "linear")
        });
        $("#remove").mouseup(function() {
            $("#header").removeClass("border_color", 1000, "linear")
        });
    });
}

/*
 * 2    Include a <div> which, when clicked, uses the jQueryUI animate() method
 *      to change the background-color from #F0F to #0FF.
 */
function animate() {
    $(document).ready(function() {
       $("#div2").click(function() {
          $("#div2").animate({
            backgroundColor: "#0FF",
              color: "black"
          })
       })
    });
}

/*  3.	Include eight <div> which, when clicked, implement the effect() method with
 *     the following effects (at least one effect per <div>):
 *       •	blind (include hide() method)
 *       •	clip
 *       •	drop (include show() method)
 *       •	explode
 *       •	fold
 *       •	puff (include show() method)
 *       •	shake (include hide() method)
 *       •	slide
*/
function effect() {
    $(document).ready(function() {
        $("#blind").click(function() {
           $("#blind").effect("blind")
        });
        $("#clip").click(function() {
            $("#clip").effect("clip")
        });
        $("#drop").click(function() {
            $("#drop").effect("drop")
        });
        $("#explode").click(function() {
            $("#explode").effect("explode")
        });
        $("#fold").click(function() {
            $("#fold").effect("fold")
        });
        $("#puff").click(function() {
            $("#puff").effect("puff")
        });
        $("#shake").click(function() {
            $("#shake").effect("shake")
        });
        $("#slide").click(function() {
            $("#slide").effect("slide")
        })
    });
}
/*
 * 4.   Include a button to add a class to the <body> element which adds
 *      a background image. Include another button to remove the class
 *      to the <body> element that added the background image.
 */
function removeClass() {
    $(document).ready(function() {
        $("#addBodyClass").click(function() {
            $("body").addClass("sky", 1000, "linear")
        });
        $("#removeBodyClass").mouseup(function() {
            $("body").removeClass("sky", 1000, "linear")
        });
    });
}

/*  5.  Use the switchClass() method (with a button) to implement similar
 *       behavior to item 4. That is, start with a class for &lt;body&gt; without
 *       a background image (just color) and switch to a class with a background
 *       image. One button should be able to switch back and forth between the classes.
 *       Use:<br /><br />
 *       •	Two seconds for the transition <br />
 *       •	Apply an easing setting (other than default) that you like <br />
 */
function switchClass() {
    $(document).ready(function() {
        $("#btnSwitch").click(function() {
            $(".body").switchClass("body","sky",2000, "linear")
            $(".sky").switchClass("sky","body",2000, "linear")
            return false;
        });
    });
}

/*
 *  6.	Use the toggle() method with three of the effects (of your choosing)
 *      you implemented in item 3. Use three buttons to toggle the effects
 */
function toggleExplode() {
    $("#effect").toggle('explode',300);
}

function toggleShake() {
    $("#effect").toggle('shake',300);
}

function toggleSlide() {
    $("#effect").toggle('slide',300);
}

/*
 *  7.  Implement item 4 using a button that calls the toggleClass() method.
 */
function toggleClass() {
    $(".body").toggleClass("sky",1000);
}
