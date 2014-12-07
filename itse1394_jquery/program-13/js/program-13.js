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
            progressbar();
            break;
        case "option2":
            setClassToHidden(options);
            document.getElementById("test2").setAttribute("class","show" );
            slider();
            break;
        case "option3":
            setClassToHidden(options);
            document.getElementById("test3").setAttribute("class","show" );
            spinner();
            break;
        case "option4":
            setClassToHidden(options);
            document.getElementById("test4").setAttribute("class","show" );
            tabs();
            break;
        case "option5":
            setClassToHidden(options);
            document.getElementById("test5").setAttribute("class","show" );
            tooltips();
            break;
        default:
            setClassToHidden(options);
            document.getElementById("test1").setAttribute("class","show" );
            break;
    }
}

/*  1.	Implement a progressbar widget with the following attributes:
 *       •	value: 10
 *       •	max: 100
 *       •	Implemented via a function named progress()
 *       •	setTimeout ( progress, 100 ) ; within the progress() function • setTimeout ( progress, 1000 );
 *       for initial invocation of progress()
 */
function progressbar() {
    var progressbar = $("#progressbar");
    $( "#progressbar" ).progressbar({
        value: 10,
        max: 100
    });
    function progress() {
        var val = progressbar.progressbar( "value" ) || 0;
        progressbar.progressbar( "value", val + 1 );
        if ( val < 99 ) {
            setTimeout( progress, 100 );
        }
    }
    setTimeout( progress, 1000 );
}

/*
 * 2    Implement a slider widget with the following attributes:
 *      •	uses a range
 *      •	min: 0
 *      •	max: 1000
 *      •	Initial values of 275 and 750
 *      •	Displays the selected range in text
 */
function slider() {
    $("#slider").slider({
        range:true,
        min: 0,
        max: 1000,
        values: [ 275, 750 ],
        slide: function( event, ui ) {
            $("#range").val(ui.values[0] + " - " + ui.values[1]);
        }
    });
        $( "#range" ).val( $( "#slider" ).slider( "values", 0 ) +
        " - " + $( "#slider" ).slider( "values", 1 ) );

}

/*  3.	Implement a spinner widget with the following attributes:
 *      •	min: 0
 *      •	max: 10
 *      •	Displays the values with $
*/
function spinner() {
    $( "#spinner" ).spinner({
        min: 0,
        max: 10,
        culture:"de-DE",
        numberFormat: "C"
    });
}
/*
 * 4.   Implement a tabs widget with the following attributes:
 *        •	Four tabs for cities: Austin, Dallas, Houston, San Antonio
 *        •	Activate with mouseover (does not require click)
 *        •	Displays relevant text for each city
 *        •	Displays a relevant image for each city
 */
function tabs() {
    $( "#tabs1" ).tabs({
        event: "mouseover"
    });
}

/*  5.  Include three textboxes with the appropriate labels (First Name, Home City, Favorite Sport).
 *      Include a tooltip for each of the textboxes that advises the user with something like
 *      “Please enter your first name.”
 */
function tooltips() {
    $(function() {
        $("#tooltip1").tooltip();
        $("#tooltip2").tooltip();
        $("#tooltip3").tooltip();
    });
}



