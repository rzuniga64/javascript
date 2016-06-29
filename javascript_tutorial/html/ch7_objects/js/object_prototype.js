var msg = document.getElementById("message");

String.prototype.reverse = function() {
    return this.split("").reverse().join("");
};

var s= "reverse me";

String.prototype.display = function () {
    msg.innerHTML += "<p>The reversed string is: " + s.reverse() + "</p>";
};

s.display();

for (var c in s) {
    if (s.hasOwnProperty(c)) {
        console.log(c);
    }
}