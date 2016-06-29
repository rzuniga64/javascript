/**
 * In other languages you initially define an object template known as a class.
 * The class defines variables and methods that other parts of the program has access to.
 * The class code on its own cannot be run. An object of the class is instantiated or an instance of the class is
 * created as a real executable object.  Any number of objects can be created from the same class.
 *
 * Javascript does not have a class keyword.  JavaScript implements object oriented methods.
 * 1. EVERYTHING in JavaScript is an object (or it behave like one.
 * 2. You can still use object oriented techniques such as access modifies and inheritance.
 * 3. You create objects dynamically on the fly.
 * 4. You can extend or modify instances of a single object without affecting others.
 * 5. You can extend every instance of an object.
 */

var msg = document.getElementById("message");
// create a new empty object and add properties or methods
var mycar = mycar || {};    // if the mycar variable exists then use it else create a new object.
mycar.make = "Ford";		// alternate syntax is mycar["make"] = "Ford";
mycar.model = "Mustang";
mycar.color = "blue";

mycar.display = function() {
	msg.innerHTML += "<p>Your car is a "+this.color+" "+this.make+" "+this.model+"</p>";
};

// OBJECT LITERAL NOTATION
var car = car || {
	make: "Ford",
	model: "Mustang",
	color: "red",
	display: function() {
		msg.innerHTML += "<p>Your car is a "+this.color+" "+this.make+" "+this.model+".</p>";
	}
};

var car2 = car2 || {};             // clone to car2
for (var prop in car) {            // clone the car object
	if (car.hasOwnProperty(prop))  // the property must be part of standard car object
		car2[prop] = car[prop];    // copy by value(not reference) so a true copy instead of reference to original value
}

// change car2 properties
car2.color = "pink";
car2.model = "GTO";

var myprop = "color";
car[myprop] = "purple";

mycar.display();
car["display"]();
car2.display();