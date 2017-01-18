const age = 27;
// uncommenting line below would give an error
//age = 29;
console.log(age);


/**
 * Arrays as well as object are reference types.
 * This mean that the const variable holds a pointer to the array.
 * So we are only changing the value to which THE POINTER IS POINTING.
 * @type {[*]}
 */
const AGES = [27, 29, 31];
console.log(AGES);
AGES.push(25);
console.log(AGES);

const OBJ = {
    age: 27
};

console.log(OBJ);
OBJ.age = 30;
console.log(OBJ); // OBJ.age = 30 because reference to OBJ has changed.