// function sum(x, y, z) {
//     return x + y + z;
// }

// const numbers = [1, 2, 3];

// console.log(sum(...numbers));
// // Expected output: 6

// console.log(sum.apply(null, numbers));
// Expected output: 6






// function myFunction(x, y, z) { }
// const args = [0, 1, 2];
// myFunction(...args);


// let arr1 = [1, 2, 3];
// let arr2 = [[...arr1] +[ ...arr1]]

// console.log(...arr1);

// let a=null;
// console.log(a+1);


// let arr = [1, 2, 3, 4];

// let result = arr.map(function (num) {
//     return num * 2;
// });

// console.log(result);





// let arr = [1, 2, 3, 4];

// arr.forEach(function (num) {
//     console.log(num);
// });


// let arr = [1, 2, 3, 4];

// let sum = arr.reduce((acc, num) => {
//     return acc + num;
// });

// console.log(sum);



// Promise.resolve(5)
//     .then(num => num * 2)
//     .then(num => num + 3)
//     .then(result => console.log(result));




fetch("https://fakestoreapi.com/products/1")
.then(resolve =>resolve.json())
.then(data => console.log(data))
.catch(err => console.log(err))