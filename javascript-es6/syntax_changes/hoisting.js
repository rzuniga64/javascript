// must declare variable before initializing it.
let age;
age = 27;
console.log(age);

// I can declare my variable after a function and have it be hoisted.
function dosomething() {
    myage = 27;
}

// It is declared before it is being used.
let myage;
dosomething();
console.log(myage);