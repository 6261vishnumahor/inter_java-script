
// Qun=1=================================
// console.log("hey");
// {
//     let a = 1;
//     let b = 2;
//     console.log(a);
//     console.log(b);
// }
// console.log(a);
// console.log(b);
// Ans =>hey,1,2
// and show the referenceError :a is not defined because let a and let b is a block level veriable introduction in ejs6


//   Qun=2=============================

// console.log("hey");
// {
//     var a = 1;
//     var b = 2;
//     console.log(a);
//     console.log(b);
// }
// console.log(a);
// console.log(b);
// Ans =>
// hey
// 1
// 2
// 1
// 2
// because var is a functional scope variable not a block scope so access the value outside of block

// Qun=3================
// console.log(a);
// var a = () => {
//     console.log("hello");
// }


// Ans => undefined because This is a function expression

// Function expressions are not hoisted

// Only the variable a is hoisted


// qun=4==================
// console.log(a);
// function a() {
//     console.log("hello");
// }

// Ans =>undefined because Function declarations are fully hoisted in JavaScript,
//  so the function is available before execution, and logging it prints the function definition.



// qun=5================================

// var x = 20;
// function printValue() {
//     console.log(x);
//      var x = 10;
// }
// printValue();
// Ans => ans is undefined bcs access x without declare


// qun=6================================

// var x = 20;
// function printValue1() {
//     console.log(x);
//     x = 10;
//     console.log(x);

// }
// console.log(x);
// printValue1();
// Ans => 20
// 20
// 10,because is not declare inside the function





// console.log("start ");
// setTimeout(() => {
//     console.log("setTime");
// }, 0);
// console.log("end");
// Ans =>start
//  end
//  setTime, because first run the syncronouse code





// console.log(y);
// console.log(typeof (y));
// Ans =>1. y is not defined
// 2.undefined because y is not defined



// function abc() {
//     a = 10;
//     b = 20;
//     console.log(a);//10
//     console.log(b);//20
// }
// abc();
// console.log(a);  //10
// console.log(b);  //20
// Ans =>  10
// 20
// 10
// 20 ,a and b is not declare the let var const so a and b is a globle variable


// Q.

// console.log([1, 2, 3] === [1, 2, 3]);
// console.log({ name: "a" } == { name: "a" });
// Ans =>




// console.log(name);
// var name = "John";
// Ans =>




setTimeout(() => {
    console.log("I am setTime out ");
});
Promise.resolve().then(() => {
    console.log("I am Promise  ");
});
console.log("I am end here ");
