// once the html DOM is loaded then it will call the ready method and won't wait for all external files to be loaded.
/* jq_obj html_doc jq func anonymous_func
/      /        /           /          */
$('dcoument').ready(function()
    {
        alert("jquery is installed and accessible");
    }
);

