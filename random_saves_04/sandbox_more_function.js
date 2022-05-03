// arguments & parameters

// const speak = function(name = 'luigi', time = 'night') {
//     console.log(`good ${time} ${name}`)
// };
// speak();
// speak('shaun');


// Returning values 

// const calcArea = function(radius) {
//     return 3.14 * radius**2;
// };



// Arrow Function

// const calcArea = radius =>  3.14 * radius**2;


// const area = calcArea(5);
// console.log('area is', area);


// Practise arrow functions

// const greet = () => 'hello, world';
// const result = greet();
// console.log(result);


// NORMAL FUNCTION

// const bill = function(product, tax){
//     let total = 0;
//     for(let i = 0; i < product.length; i++){
//         total += product[i] + product[i] * tax;
//     }
//     return total;
// }

// ARROW FUNCTION

const bill = (product, tax) => {
    let total = 0;
    for(let i = 0; i < product.length; i++){
        total += product[i] + product[i] * tax;
    }
    return total;
}

console.log(bill([10, 15, 30], 0.2));

