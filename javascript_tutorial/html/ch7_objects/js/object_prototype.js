/**
 * Prototypes can be applies to any object type in Javascript including Strings and Numbers.
 * There is no method in JavaScript to reverse a string but we can make one ourselves and it will look like a native
 * part of the language. Dangerous because if you start changing the default methods it could make your code
 * incompatible with other developers.
 */

var msg = document.getElementById("message");

// Take a String, splits it into an array, reverse it, and make it back into a string again.
String.prototype.reverse = function() {
    return this.split("").reverse().join("");
};

var s= "reverse me";

String.prototype.display = function () {
    msg.innerHTML += "<p>The reversed string is: " + s.reverse() + "</p>";
};

s.display();

// Don't extend native objects with your own methods!
// If another developer came across this code it would fail when it came across a reverse function.
// That is because it wouldn't know what to do with it. 'hasOwnProperty' returns true if a property
// method directly belongs to String s.  It does not belong to an object further up the prototypical chain.
for (var c in s) {
    //if (s.hasOwnProperty(c))
        msg.innerHTML += "<p>" + c + "</p>";
}