
// let n = 100
// for (let i = 1; i <= n; i++) {

//     // console.log(i)

//     console.log(n - i + 1)
// }



// =======qun=3==all even no.======================brute force solutionrd

// let n = 1000000000n

// console.time()

// for(let i=1; i<=n; i++){
//     if(i%2===0){
//         console.log(i)
//     }
// }
// console.timeEnd()






// =======qun=4==  SUM OF NATURAL no.======================brute force solutionrd

// console.time("sumTime")
// let n=100

// let sum=0

// for(let i=1; i<=n; i++){
//     sum+=i
// }
// console.log(sum)
// console.timeEnd("sumTime")




// =======qun=5==  Factorial no.======================

// let num = 5;
// let fact = 1
// for (let i = 1; i <= num; i++) {
//     fact = fact * i
// }
// console.log("factorial of 5=  ",fact)




// let num = 5;
// let star = ""
// for (let i = 1; i <= 5; i++) {
//     for (let j = 1; j <= 5; j++) {
//         if (i === j) {
//             star += " *"
//             console.log(star)
//         }



//     }
//     star += ""
// }








// let num = 5;
// let star = ""
// for (let i = 1; i <= 5; i++) {
//     for (let j = i; j <= 5; j++) {

//         star += " "

//     }
//     for (let k = 1; k <= i; k++) {
//         star += "*"

//     }

//     console.log(star)
//     star = ""

// }




//      *
//     **
//    ***
//   ****
//  *****






// let num = 5;
// let star = ""
// let j=0
// for (let i = 1; i <= 5; i++) {
//     for (let j = i; j <= 5; j++) {

//         star += " "

//     }
//     for (let k = 1; k <= i; k++) {
//         if(k===i||k==1||i==5){
//             star += "*"
//         }
//        else{
//         star+=" "
//        }

//     }

//     console.log(star)
//     star = ""

// }



//      *
//     **
//    * *
//   *  *
//  *****



// let num = 5;
// let star = ""
// let j = 0
// for (let i = 1; i <= 5; i++) {
//     for (let j = 1; j <= i; j++) {
//         if(i===j || j===1 || i===5)
//         star += "*"
//         else
//             star+=" "

//     }

//     console.log(star)
//     star = ""

// }


// *
// **
// * *
// *  *
// *****




// let num = 5;
// let star = ""
// let j = 0
// for (let i = 1; i <= 5; i++) {
//     for (let j = i; j <= 5; j++) {

//             star += "*"


//     }

//     console.log(star)
//     star = ""

// }



// *****
// ****
// ***
// **
// *


// let num = 5;
// let star = ""
// let j = 0
// for (let i = 1; i <= num; i++) {
//     for (let j = i; j <= num; j++) {
//         if (i === 1 || j === i || j === num  ){
//             star += "*"
//         }
//         else{
//             star += " "
//         }

//     }

//     console.log(star)
//     star = ""

// }


// *****
// *  *
// * *
// **
// *





// let n = 5;

// for (let i = 1; i <= n; i++) {
//     let row = "";

    
//     for (let j = 1; j <= n - i; j++) {
//         row += " ";
//     }

    
//     for (let k = 1; k <= (2 * i - 1); k++) {
//         row += "*";
//     }

//     console.log(row);
// }

//     *
//    ***
//   *****
//  *******
// *********




// let n = 5;

// for (let i = 1; i <= n; i++) {
//     let row = "";


//     for (let j = 1; j <= i; j++) {
//         row += " ";
//     }


//     for (let k = 1; k <= (2*(n-i)+1); k++) {
//         row += "*";
//     }

//     console.log(row);
// }


//  *********
//   *******
//    *****
//     ***
//      *


let n = 5;

for (let i = 1; i <= n; i++) {
    let row = "";


    for (let j = 1; j <= i; j++) {
        row += " ";
    }


    for (let k = 1; k <= (2 * (n - i) + 1); k++) {

        if(i==1||k===i)
        row += "*";
       else
            row += " ";

    }

    console.log(row);
}