// Pull out by name.
let obj = {
    name : 'Roy',
    age : 27,
    greet: function() {
        console.log('Hello there!');
    }
};

// reference by name not by position so names have to match.
let {name, greet} = obj;
console.log(name);
greet();
