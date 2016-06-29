// JavaScript Object Constructors
var msg = document.getElementById("message");

// Car constructor. We can make any number of car instances from this constructor.
function Car(make, model, color) {
	this.make = make || "unknown";  // default value if user forgets to specify it
	this.model = model || "model";
	this.color = color || "unpainted";
	this.display = function() {
		msg.innerHTML += "<p>Your car is a "+this.color+" "+this.make+" "+this.model+".</p>";
	}
}

// Create instances of a car object from its constructor
var c1 = new Car("Ford", "Mustang", "blue");
var c2 = new Car("Ford", "GTO", "white");
var c3 = new Car();

// Change properties and run methods
c2.color = "red";
c1.display();
c2.display();
c3.display();