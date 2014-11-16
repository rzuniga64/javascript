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
        default:
            setClassToHidden(options);
            document.getElementById("test1").setAttribute("class","show" );
            break;
    }
}

/*  1.  Create a file named program-10.txt with the following content: 
        <div>
            <p id="p1">This is p1.</p>
            <p id="p2">This is p2.</p>
        </div>
                        
    Using the program-10.txt file content, create a button with a click event that uses 
    jQuery and AJAX to load only the <p> with id=”p2” into a <div>. Include a callback 
    function that produces an alert with a successful message or error message based on the status.
 */
function ajaxLoad() {
    $("button#btn1").click(function(){
      $("#div1").load("program-10.txt #p2",function(responseTxt,statusTxt,xhr){
        if(statusTxt==="success")
          alert("External content loaded successfully!");
        if(statusTxt==="error")
          alert("Error: "+xhr.status+": "+xhr.statusText);
      });
    });
}

/*   2.	Create a file named program-10.php with the following PHP code: 
 * 
 *  <?php
 *  $name = &_POST["name"];
 *  $country = $_POST["country"];
 *  echo "Hello".$name". ";
 *  echo "you were born in ".$country.".";
 *  ?>
 *  Create a button with a click event that uses jQuery and AJAX to 
 *  post sample name and country data to the server. Output the two 
 *  “echo” statements in the program-10.php file to an alert or other 
 *  suitable mechanism. 
 */
function postDataToServer() {
    $(document).ready(function(){
        $("button#btn2").click(function(){
            $.post("program-10.php",
            {
              name:"Raul Zuniga",
              country:"United States"
            },
            function(data,status){
                $("#para2").text(data);
            });
        });
    });
}


