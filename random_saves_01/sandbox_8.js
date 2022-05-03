let age = 25;

// loose comparison (different types can still be equal)

// console.log(age == 25); // Return true
// console.log(age == '25');

// console.log(age != 25); // Return false
// console.log(age != '25');

// string comparison (different types cannot be equal)

// console.log(age === 25); // Return true
// console.log(age === '25'); // Return false
// console.log(age !== 25);  // Return false
// console.log(age !== '25'); // Return true


// type conversion

// let score = '100';
// console.log(typeof score);  
// score = Number(score);
// console.log(score + 1);
// console.log(typeof score);

// let result = Number('hello');

// let result = String(50);

// let result = Boolean(0) // False
let result = Boolean('0') // True // String are true, but when empty, return false

console.log(result, typeof result);