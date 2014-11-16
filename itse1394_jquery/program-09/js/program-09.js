var isBlue = false;
var isRed =false;
var isBlack=false;
var isPurple=false;
var isGreen=false;

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
            addClass();
            document.getElementById("navbar").setAttribute("class","hide" );
            break;
        case "option2":
            setClassToHidden(options);
            document.getElementById("test1").setAttribute("class","show" );
            document.getElementById("test2").setAttribute("class","show" );
            break;
        case "option3":
            setClassToHidden(options);
            document.getElementById("test1").setAttribute("class","show" );
            document.getElementById("test3").setAttribute("class","show" );
            break;
        case "option4":
            setClassToHidden(options);
            document.getElementById("test1").setAttribute("class","show" );
            document.getElementById("test4").setAttribute("class","show" );
            break;
        case "option5":
            setClassToHidden(options);
            document.getElementById("test1").setAttribute("class","show" );
            document.getElementById("test5").setAttribute("class","show" );
            break;
        case "option6":
            setClassToHidden(options);
            document.getElementById("test1").setAttribute("class","show" );
            document.getElementById("test6").setAttribute("class","show" );
            break;
        default:
            setClassToHidden(options);
            document.getElementById("test1").setAttribute("class","show" );
            break;
    }
}

/*  1.  Include the following elements: <header>, <section>, <article>, <nav>, <footer>. Include <p> elements
 *      in the <header> and <footer>. Include <div> elements in the <section>, <article>, and <nav>.
 *      Use lightgrey borders and text to identify the elements. All of the requirements below use this page structure.
 */
function addClass() {
    $(document).ready(function() {
        $("body").eq(0).addClass("ancestors");

        var h2 = document.createElement("h2");
        var title = document.getElementsByTagName("title")[0].innerHTML +"(header)";
        var textNode = document.createTextNode(title);
        h2.appendChild(textNode);
        var parent = document.getElementsByTagName("div")[3];
        parent.insertBefore(h2, parent.childNodes[1]);
    });
}

/*   2.	Create a button with a click event that uses jQuery and CSS to identify with a blue border the direct parents
 *      of the <p> and <div> elements. When clicked, the button should toggle the borders from default (lightgrey)
 *      to blue to default etc.
 */
function showParents() {
    $(document).ready(function(){
        if (isBlue) {
            $("p, div").parent().css({"display":"block","border":"2px solid lightgrey"});
            isBlue = false;
        }
        else {
            $("p").parent().css({"display":"block","border":"2px solid lightskyblue"});
            $("div").parent().css({"display":"block","border":"2px solid blue"});
            isBlue = true;
        }
        return isBlue;
    });
}

/*   3.	Assign an id to a <div> in the <nav> element. Create a button with a click event that uses jQuery and CSS
        to identify with a red border ALL ancestor elements of the <div> with the id. When clicked, the button
        should toggle the borders from default (lightgrey) to red to default etc.
 */
function showAncestors() {
    $(document).ready(function(){
        if (isRed) {
            $("#div2").parents().css({"display":"block","border":"2px solid lightgrey"});
            isRed = false;
        }
        else {
            $("#div2").parents().css({"display":"block","border":"2px solid red"});
            isRed = true;
        }
        return isRed;
    });
}

/*  4.  Create a button with a click event that uses jQuery and CSS to identify the children of the <nav> and
 *      <article> tags with a black border. When clicked, the button should toggle the borders from default
 *      (lightgrey) to black to default etc.
 */
function showChild() {
    $(document).ready(function() {
        if (isBlack) {
            $("article,nav").children().css({"display": "block", "border": "2px solid lightgrey"});
            isBlack = false;
        } else {
            $("article,nav").children().css({"display": "block", "border": "2px solid black"});
            isBlack = true;
        }
    });
}

/*  5.	Create a button with a click event that uses jQuery and CSS to identify with a #90F border the descendants
 *      of the <section> that are <div> elements. When clicked, the button should toggle the borders from default
 *      (lightgrey) to #90F to default etc.
 */
function showDescendants() {
    $(document).ready(function() {
        if (isPurple) {
            $("section").find("div").css({"display": "block", "border": "2px solid lightgrey"});
            isPurple = false;
        } else {
            $("section").find("div").css({"display": "block", "border": "2px solid #90F"});
            isPurple = true;
        }
    });
}

/*  6.  Create a button with a click event that uses jQuery and CSS to identify with a #3C3 border the siblings of
        the <p> that are children of the <header> element. When clicked, the button should toggle the borders from
        default (lightgrey) to #3C3 to default etc.
 */
function showSiblings() {
    $(document).ready(function() {
        if (isGreen) {
            $("header").children("p").siblings().css({"display": "block", "border":"2px solid lightgrey"});
            isGreen = false;
        } else {
            $("header").children("p").siblings().css({"display": "block", "border": "2px solid #3C3"});
            isGreen = true;
        }
    })
}


