// Inialize an object with some variables you already have (can be overridden)

let name = 'Anna';
let age = 25;

let obj = {
    name,
    age : 30,
    greet() {
        console.log(this.name + ', ' + this.age)
    }
};

console.log(obj);
obj.greet();

// Add a dynamic property, cannot infer that 'age' = "age"
let ageField = "age";
let obj2 = {
    "name" : "Roy",
    age,
    [ageField] : 28,
    "greet me"() {
        console.log(this.name + ', ' + this.age);
    }
};
console.log(obj2);
obj2["greet me"]();
// Reuse dynamic variables to access properties
console.log(obj2["age"]);
console.log(obj2.age); // can still access with dot notation
console.log(obj2[ageField]);