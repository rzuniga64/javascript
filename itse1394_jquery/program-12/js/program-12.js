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
            accordion();
            break;
        case "option2":
            setClassToHidden(options);
            document.getElementById("test2").setAttribute("class","show" );
            autocomplete();
            break;
        case "option3":
            setClassToHidden(options);
            document.getElementById("test3").setAttribute("class","show" );
            buttons();
            break;
        case "option4":
            setClassToHidden(options);
            document.getElementById("test4").setAttribute("class","show" );
            datepicker();
            break;
        case "option5":
            setClassToHidden(options);
            document.getElementById("test5").setAttribute("class","show" );
            dialog();
            break;
        case "option6":
            setClassToHidden(options);
            document.getElementById("test6").setAttribute("class","show" );
            menu();
            break;
        default:
            setClassToHidden(options);
            document.getElementById("test1").setAttribute("class","show" );
            break;
    }
}

/*  1.	Implement an accordion widget with four Country “tabs”. Include relevant country data
 *      in each of the expandable content sections. Make the content sections collapsible and
 *      the height-style set to “content”.
 */
function accordion() {
    $( "#accordion-1" ).accordion({
        collapsible: true,
        heightStyle: "fill"
    });
}

/*
 * 2.	Implement an autocomplete widget using days of the week as the source.
 */
function autocomplete() {
    var dayOfWeek = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
    ];
    $( "#automplete-1" ).autocomplete({
        source: dayOfWeek
    });
}

/*  3.  Implement multiple button widgets with the following functionality:
 *       •	simple button
 *       •	toggle button (include a power icon)
 *       •	anchor button
 *       •	buttonset
 *       The benefit of using jQueryUI buttons is the ability to apply themes very efficiently.
 *       Be sure to include a CSS link like that below to see the themes applied. Y
 *       You may substitute another jQueryUI theme for eggplant.
*/
function buttons() {
    $("#button1, #button3").button();
    $("#button2").button({
        icons: {
            primary: "ui-icon-power"
        }
    });
        $( "#button4" ).buttonset();
}

/*
 * 4.	Implement a datepicker widget with Saturday and Sunday disabled.
 */
function datepicker() {
    $( "#datepicker" ).datepicker({
        beforeShowDay : function (date)
        {
            var day = date.getDay ();
            // 0 : Sunday, 1 : Monday, ...
            if (day == 0 || day == 6) return [false];
            else return [true];
        }
    });
}

/*  5.	Implement a dialog widget that requires a checkbox be checked before the dialog
 *     will close.
 */
function dialog() {

    $( "#dialog" ).dialog({
        autoOpen: false,
        buttons: {
            OK: function() {
                $( this ).dialog( "close" );
            }
        },
        beforeClose: function( event, ui ) {
            if ( !$( "#checkbox" ).prop( "checked" ) ) {
                event.preventDefault();
                $( "[for=checkbox]" ).addClass( "invalid" );
            }
        },
        width: 600
    });
    $( "#opener" ).button().click(function() {
        $( "#dialog" ).dialog( "open" );
    });
}

/*  6.	Implement a menu widget with 7 entries. Include a submenu on at least one of the
 *      entries. The submenus should use the ui-icon-circle-triangle-e icon. Produce an
 *      advisory message to the user when the mouse moves over the menu (i.e. when the menu
 *      receives the focus).
 */
function menu(){
    $("#menu").menu({
        icons: {submenu: "ui-icon-circle-triangle-e"},
        focus: function(event,ui) {
            $("#result").append("focus event<br />")
        }
    });
}

