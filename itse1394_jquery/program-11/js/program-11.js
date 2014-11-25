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
            draggable();
            break;
        case "option2":
            setClassToHidden(options);
            document.getElementById("test2").setAttribute("class","show" );
            draggable_x_axis();
            break;
        case "option3":
            setClassToHidden(options);
            document.getElementById("test3").setAttribute("class","show" );
            break;
        case "option4":
            setClassToHidden(options);
            document.getElementById("test4").setAttribute("class","show" );
            droppable();
            break;
        case "option5":
            setClassToHidden(options);
            document.getElementById("test5").setAttribute("class","show" );
            resizable();
            break;
        case "option6":
            setClassToHidden(options);
            document.getElementById("test6").setAttribute("class","show" );
            resize_height_width();
            break;
        case "option7":
            setClassToHidden(options);
            document.getElementById("test7").setAttribute("class","show" );
            alsoResize();
            break;
        case "option8":
            setClassToHidden(options);
            document.getElementById("test8").setAttribute("class","show" );
            selectable();
            break;
        case "option9":
            setClassToHidden(options);
            document.getElementById("test9").setAttribute("class","show" );
            sortable();
            break;
        default:
            setClassToHidden(options);
            document.getElementById("test1").setAttribute("class","show" );
            break;
    }
}

/*  1.	Create two <div> elements, one inside the other. Ensure the inner <div> can be dragged
 *      but only within the outer <div>.
 */
function draggable() {
    $("#div1 div").draggable ({
        containment : "#div1"
    });
}

/*   2.	Create two <div> elements, one inside the other. Ensure the inner <div> can be dragged
 *      only along the x-axis and only within the outer <div>.
 */
function draggable_x_axis() {
    $("#div2 div").draggable ({
        axis : "x"
    });
}

/*  3.	Create two <div> elements, one inside the other. Ensure the inner <div> can be dragged only
 *      for the first ten seconds after the page has been opened. Display the countdown in seconds
 *      for the user.
*/
var timer = setInterval(function(){setTimer()},1000);
var time_interval = 10;
function setTimer(){
    document.getElementById("timer").value = time_interval + " seconds";
    if (time_interval !== 0) {
        $("#div3 div").draggable ({
            containment : "#div3"
        });
    }else {
        clearInterval(timer);
        $("#div3 div").draggable("disable");
    }
    time_interval -= 1;
}

/*  4.	Create two <div> elements on the left (L1, L2) and two <div> elements on the right (R1, R2).
 *      Set the options such that only L1 can be dropped in R1 and only L2 can be dropped in R2.
 *      Also, L1 should be considered dropped when it touches R1 and L2 must be contained within
 *      R2 before it is considered dropped. R1 and R2 should change colors when L1 and L2 hover over
 *      their targets.
 */
function droppable() {
    $(function() {
        $("#leftDiv1").draggable();
        $("#leftDiv2").draggable();

        $("#rightDiv1").droppable({
            accept: "#leftDiv1",
            tolerance: "touch",
            hoverClass: "drop-hover",
            drop: function (event, ui) {
                $(this).addClass("ui-state-highlight").find("span").html("Dropped with a touch");
            }
        });

        $("#rightDiv2").droppable({
            accept: "#leftDiv2",
            tolerance: "fit",
            hoverClass: "drop-hover",
            drop: function (event, ui) {
                $(this).addClass("ui-state-highlight").find("span").html("Dropped only when fully inside me!");
            }
        });
    });
}

/*  5.	Create a resizable <article> element with the ghost option enabled. */
function resizable() {
    $(function() {
       $("article#resizable").resizable({
           ghost:true
       });
    });
}

/*  6.	Demonstrate the use of the containment, minheight, and minWidth options on a <nav> element
 *      within a <section> element.
 */
function resize_height_width(){
    $(function(){
         $("#nav").resizable({minHeight:150, minWidth:150});
    });
}

/*  7.	Create four small <div> elements that are side-by-side. Make all four resizable. If any one
 *       of the <div> elements is resized, the other three are resized also.
 */
function alsoResize() {
    $(function() {
        var r1 = $('#resize1').attr('id');
        var r2 = $('#resize2').attr('id');
        var r3 = $('#resize3').attr('id');
        var r4 = $('#resize4').attr('id');
        var alsos = '#' + r1 + ', #' + r2 + ', #' + r3 + ', #' +r4;

        $(".resize").resizable({
           alsoResize:alsos
        });
    });

}

/*  8.	Create an ordered list of seven items. Use the selectable method along with the filter option
 *      to ensure only the first and last elements of the list are selectable.
 */
function selectable() {
    $(function() {
        var list_items = $("li:last-child").add($("li:first-child"));
        $( ".selectable" ).selectable({
            filter : list_items
        });
    });
}

/* 9.	Create an ordered list of seven items. Use the sortable method along with the placeholder option
 *      to make the list sortable which means that the user can rearrange the items.
  */
function sortable() {
    $(function() {
        $( ".sortable" ).sortable({
            placeholder: "ui-sortable-placeholder"
        });
    });
}


