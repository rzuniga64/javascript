
let person = {
    name: 'Max'
};

let boss = {
    name: 'Anna'
};

console.log(person.__proto__ === Object.prototype);

Object.setPrototypeOf(person, boss);

console.log(person.__proto__ === Object.prototype);
console.log(person.__proto__ === boss);

console.log(person.name);