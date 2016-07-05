/**
 *  File Handling (doesn't work for <= IE9)
 *  HTML5 API that allows the user to browse to a file and upload it.
 *  Allows you to react when one or more files are dragged to the browser window.
 *  It can also check for file types and read them into memory.
 *  You could allow the user to drag dozens of image files, load them onto a hidden Canvas element, resize them all,
 *  convert them to the correct image type, show a preview, and upload them one by one to the server using AJAX.
 */
function Output(msg) {
    var m = document.getElementById("output");
    m.innerHTML = msg + m.innerHTML;
}

/**
 * Drop box hover effect
 */
function FileHover(e) {
    e.preventDefault();
    e.target.className = (e.type == "dragover" ? "hover" : "");
}

/**
 * File selection
 */
function FileSelect(e) {
    FileHover(e); // will remove styling if its been applied
    // obtain a list of files via either a file select box or drop file element has a data transfer file list.
    // Return a collection retaining one or more file references.
    var files = e.target.files || e.dataTransfer.files;

    // process all files
    for (var i = 0, f; f = files[i]; i++) {
        ParseFile(f);
    }
}

/**
 * Output file information
 */
function ParseFile(file) {

    // examine file name, type, and size
    Output(
        "<p>File information: <strong>" + file.name +
        "</strong> type: <strong>" + file.type +
        "</strong> size: <strong>" + file.size +
        "</strong> bytes</p>"
    );

    // display an image
    if (file.type.indexOf("image") == 0) {
        var reader = new FileReader();
        // when file is loaded into memory it outputs the file with its name and an image tag.
        // 'result' property is a data encoded string representation of our graphic
        reader.onload = function(e) {
            Output(
                "<p><strong>" + file.name + ":</strong><br />" +
                '<img src="' + e.target.result +
                '" /></p>'
            );
        }
        reader.readAsDataURL(file); // get the binary data
    }

    // display text
    if (file.type.indexOf("text") == 0) {
        var reader = new FileReader();
        reader.onload = function(e) {
            Output(
                "<p>" + file.name +
                ": <p><pre>" + e.target.result +
                "</pre>"
            );
        }
        reader.readAsText(file);
    }
}
// initialization
// check if File, FileList and FileReader are available in this browser
if (window.File && window.FileList && window.FileReader) {

    // select box used
    var fileselect = document.getElementById("fileselect");
    fileselect.addEventListener("change", FileSelect, false);

    // drop box used
    var filedrop = document.getElementById("filedrop");
    filedrop.addEventListener("dragover", FileHover, false);
    filedrop.addEventListener("drop", FileSelect, false);
}