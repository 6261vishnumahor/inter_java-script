
// 1. Write a program to check whether a number is positive or negative.
// 

// let a=prompt("enter the number")
  
// a=Number(a)

// if(a>0)
// {
//     alert("the number is Possitiv" +a)
// }
// else{
//     alert("the number is negative" + a)

// }




// 2. Write a program to check whether a number is even or odd

// let a = prompt("enter the number")

// a=Number(a)

// if(a%2===0)
// {
//     alert("the number is even = " +a)
// }
// else{
//     alert("the number is odd = " + a)

// }





// 3. Check whether a person is eligible to vote(age ≥ 18).

// let age = prompt("enter the age")

// age = Number(age)

// if (age >18) {
//     alert("person is eligible to vote = " + age)
// }
// else {
//     alert("person is NOT eligible to vote =  " + age)

// }



// 5. Check whether a number is divisible by 5


// let a = prompt("enter the number")

// a=Number(a)

// if(a%5===0)
// {
//     alert("the number is divisible by 5 = " +a)
// }
// else{
//     alert("the number is not divisible by 5 = " + a)

// }





// 6. Check whether a character is a vowel or consonant.
// 
// let a = prompt("enter the character")

// a = Number(a)

// if (a==="a"||a==="e"||a==="i"||a==="o"||a==="u") {
//     alert("the character is vowel  = " + a)
// }
// else {
//     alert("the character is consonant = " + a)

// }




// 7. Check whether a number is multiple of 3 and 7.
// 

// let a = prompt("enter the number")

// a = Number(a)

// if (a % 3 === 0 && a%7===0) {
//     alert("the number is divisible by 3 and 7 = " + a)
// }
// else {
//     alert("the number is not divisible by 3 and 7 = " + a)

// }





// 9. Check whether a student passed or failed(pass mark ≥ 35).

// let a = prompt("enter the student Marks")

// a = Number(a)

// if (a >= 35) {
//     alert("the student pass = " + a)
// }
// else {
//     alert("the student is failed = " + a)

// }










// 10. Check whether a number is three - digit or not.

// let a = prompt("enter the number")

// a = Number(a)

// if( (a >= 100 && a<= 999)||(a >= -100 && a <= -999)){
//     alert("the number is three digit = " + a)
// }
// else {
//     alert("the number is not three digit = " + a)

// }



// 🟡 Intermediate Level



// 12. Check whether a number is in the range 1 to 100.

// let a = prompt("enter the number")

// a = Number(a)

// if (a >= 1 ||a <= 100)  {
//     alert("the number is range 1 to 100 = " + a)
// }
// else {
//     alert("the number is NOT range 1 to 100 = " + a)

// }



// 13. Calculate electricity bill based on units:
// ● 0–100 → ₹5 per unit
// ● 101–200 → ₹7 per unit
// ● Above 200 → ₹10 per unit



// let unit = prompt("enter the unit")

// let To_unit=0
// let bill=0
// unit = Number(unit)

// if ( unit <= 100) {
//     bill=unit*5
//     alert("electricity bill  =  "+bill)
// }
//   else if (unit <= 200) {
//      To_unit=unit-100
//      bill=bill+To_unit*7
//     alert("electricity bill  =  " + bill)
//  }
//  else {
//      To_unit = unit-200
//      bill = bill + To_unit * 10
//     alert("electricity bill  =  " + bill)
// }



// 14. Calculate grade of student based on marks:
// ● 90 + → A
// ● 75–89 → B
// ● 60–74 → C
// ● Below 60 → Fail



// let marks = prompt("enter the marks")

// marks = Number(marks)

// if (marks >=90 ) {
    
//     alert("Grade of student A =  " +marks)
// }
// else if (marks >=75 && marks<=89) {
   
//     alert("Grade of student B =  " + marks)

// }
// else if (marks >= 60 && marks <= 74) {

//     alert("Grade of student C =  " + marks)

// }
// else {
   
//     alert("Grade of student fail =  " + marks)

// }



// 15. Check whether a number is prime or not(using if condition logic).

// let a = prompt("enter the number")

// a = Number(a)

// if (a === 2 || a === 3 || a === 5 || a === 7) {
//     console.log("Prime Number");
// }

// else if (a%2===0 &&a%3===0 && a%5===0)  {
//     alert("the number is a not prime = " + a)
// }
// else {
//     alert("the number is  a prime = " + a)

// }





// 16. Create a simple calculator using if-else (+, -, *, /)


let a = prompt("enter the first number")
let b = prompt("enter the secound number")

a = Number(a)
b = Number(b)

if () {
    alert("the number is a not prime = " + (a+b))

}

else if (a % 2 === 0 && a % 3 === 0 && a % 5 === 0) {
    alert("the number is a not prime = " + a)
}
else {
    alert("the number is  a prime = " + a)

}