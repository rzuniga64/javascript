var formData = location.search;
formData = formData.substring(1, formData.length);
while (formData.indexOf("+") != -1) {
    formData = formData.replace("+", " ");
}
formData = unescape(formData);
var formArray = formData.split("&");
document.write("<p>");
for (var i=0; i < formArray.length; ++i) {
    document.writeln(formArray[i] + "<br />");
}
document.write("</p>");

