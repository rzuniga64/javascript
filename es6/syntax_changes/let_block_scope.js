// use 'let' to declare a varaible. "let" gives you block scoping
let name = "Max";

//block scoping
if (true) {
    let name = "Roy";
    console.log(name);
}

console.log(name);