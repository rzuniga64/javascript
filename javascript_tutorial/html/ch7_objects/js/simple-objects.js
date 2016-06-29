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
var mycar = mycar || {};

mycar.make = "Ford";		// alternate syntax is mycar["make"] = "Ford";
mycar.model = "Mustang";
mycar.color = "Blue";

mycar.display = function() {
	msg.innerHTML += "<p>Your car is a "+this.color+" "+this.make+" "+this.model+"</p>";
};

// or use object literal notation
var car = car || {
	make: "Ford",
	model: "Mustang",
	color: "blue",
	display: function() {
		msg.innerHTML += "<p>Your car is a "+this.color+" "+this.make+" "+this.model+".</p>";
	}
};

// clone to car2
var car2 = car2 || {};

// copy by value
for (var prop in car) {
	if (car.hasOwnProperty(prop)) {
		car2[prop] = car[prop];
	}
}

// change car2 properties
car2.color = "pink";
car2.model = "GTO";

// display car and car2
car.display();
car2.display();