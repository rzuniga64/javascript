// JavaScript Object Prototypes
var msg = document.getElementById("message");

// car constructor
function Car(make, model, color) {
	this.make = make || "unknown";
	this.model = model || "model";
	this.color = color || "unpainted";
}

/**
 * Every object you create is given a special prototype property which associates an object with its constructor 
 * function Our display prototype does not need to be defined first. We can add it at any point even if we've created 
 * ch7_objects already. Everything in jsvascript is an object. The car object is simply an instance of the Base object 
 * type. Eisplay method for all car ch7_objects
 */

Car.prototype.display = function() {
    msg.innerHTML += "<p>Your car is a "+this.color+" "+this.make+" "+this.model+".</p>";
};

// create objects
var c1 = new Car("Ford", "Mustang", "blue");
var c2 = new Car("Ford", "GTO", "white");
var c3 = new Car();

// change properties and run methods
c2.color = "red";
c1.display = function() { msg.innerHTML += "<p>Not telling!</p>"; };
c1.display();
c2.display();
c3.display();