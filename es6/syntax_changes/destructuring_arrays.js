// Destructuring allows you to de-structure a complex object into simpler ones.
// Pull out by position.
let numbers = [1, 2, 3];

let [a, b, c, d] = numbers;
// output should be 1 2 3 undefined
console.log(a);
console.log(b);
console.log(c);
console.log(d);

// output should be [1,2,3]
console.log(numbers);

let [x, ...y] = numbers; //use the rest operator to pull out all remaining items.
// output should be [2, 3]
console.log(y);

let [e = 'Default', f, g, h='Default'] = numbers;
// output should be 1 2 3 Default
console.log(e);
console.log(f);
console.log(g);
console.log(h);

let i = 5;
let j = 10;
//swap values, output should be 10, 5
[i, j] = [j, i];
console.log(i);
console.log(j);

let [k,,l] = numbers;
// Output should be 1 3
console.log(k);
console.log(l);

let [m, n] = [0, 1];
// Output should be 0 1
console.log(m);
console.log(n);