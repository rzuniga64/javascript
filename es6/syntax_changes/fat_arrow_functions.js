function fn() {
    console.log("Hello");
}

fn();

// Fat arrow function
var fn2 = () => {
    console.log("Fat Arrow Function");
};
fn2();

// Fat arrow function
var fn3 = () => console.log("fat arrow function");
fn3();

// Fat arrow function
var fn4 = () => "Hello!";
console.log(fn4());

// Fat arrow function
var fn5 = () => {
    let a = 2;
    let b = 3;
    return a + b;
};

console.log(fn5());

// Fat arrow function
var fn5 = (a, b) => {
    return a + b;
};

console.log(fn5(3, 8));

// Fat arrow function
var fn5 = (a, b) => a + b;
console.log(fn5(5, 5));

// Fat arrow function
var fn = a => a + 5;
console.log(fn(3));

// using fat arrow function in callback
setTimeout(() => console.log("Goodbye"), 1000);

// Fat arrow function and the 'this' keyword
var button = document.querySelector("button");

function func() {
    console.log(this); // refers to button that called func
}
var func2 = () => console.log(this);

// this refers to window object. Fat arrow function keeps its context.
// won't need bind, apply, or call to get this to the right context.
// It will keep the context in which this function is defined.
// if inside a function it will change to whatever it refers.
button.addEventListener('click', func2);