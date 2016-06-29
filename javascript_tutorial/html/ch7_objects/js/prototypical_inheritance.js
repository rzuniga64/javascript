/**
 * Prototypical Inheritance
 *
 * Everything in Javascript is an object. The Car object is simply an instance of the base Object type.
 * Every object you create is given a special prototype property which associates an object with its constructor.
 * The display prototype does not need to be defined first. We can add it at any point even if we've created
 * objects already.
 *
 * The prototype keyword says that display is a method for all objects of type Car.
 * The display method is now associated with all Car objects. JavaScripts looks at the individual car objects and looks
 * to see if it has a display method. c1 does not have an individual display method defined with the object itself.
 * JavaScripts knows c1 is a type of object named Car so it looks for a display method defined there.
 * It finds the display method below and runs it.
 *
 * There is something else unique to JavaScript. A prototype does not need to be defined first.  It can be added at any
 * point even if objects have already been created.  The display method, for example, now applies to every instance
 * of the Car object.  It applies to every object that has been created or will be created.
 * 
 * Javascript looks for a display method associated with the each object. 
 * If none is found JavaScripts looks to see if there is a display method associated with the Car object. 
 * If none is found it looks for one in the base Object.
 *
 * */

var msg = document.getElementById("message");

// car constructor
function Car(make, model, color) {
	this.make = make || "unknown";
	this.model = model || "model";
	this.color = color || "unpainted";
}

// Object.prototype.display = function() {
Car.prototype.display = function() {
    msg.innerHTML += "<p>Your car is a "+this.color+" "+this.make+" "+this.model+".</p>";
};

// create objects
var c1 = new Car("Ford", "Mustang", "blue");
var c2 = new Car("Ford", "GTO", "white");
var c3 = new Car();

// change properties and run methods
c2.color = "red";
// create a display method just for c1 Car
c1.display = function() { msg.innerHTML += "<p>Not telling!</p>"; };

c1.display();
// The is not display function associated with c2 and c3 so it uses the car prototype and runs its display method.
c2.display();
c3.display();