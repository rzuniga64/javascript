// output information
function Output(msg) {
    var m = document.getElementById("output");
    m.innerHTML = msg + m.innerHTML;
}

// drop box hover effect
function FileHover(e) {
    e.preventDefault();
    e.target.className = (e.type == "dragover" ? "hover" : "");
}

// file selection
function FileSelect(e) {
    FileHover(e);
    var files = e.target.files || e.dataTransfer.files;

    // process all files
    for (var i = 0, f; f = files[i]; i++) {
        ParseFile(f);
    }
}

// output file information
function ParseFile(file) {

    // file information
    Output(
        "<p>File information: <strong>" + file.name +
        "</strong> type: <strong>" + file.type +
        "</strong> size: <strong>" + file.size +
        "</strong> bytes</p>"
    );

    // display an image
    if (file.type.indexOf("image") == 0) {
        var reader = new FileReader();
        reader.onload = function(e) {
            Output(
                "<p><strong>" + file.name + ":</strong><br />" +
                '<img src="' + e.target.result +
                '" /></p>'
            );
        }
        reader.readAsDataURL(file);
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