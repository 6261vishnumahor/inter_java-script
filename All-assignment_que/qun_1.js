
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




let num = 5;
let star = ""
for (let i = 1; i <= 5; i++) {
    for (let j = 1; j <= 5; j++) {
        if (i === j) {
            star += " *"
            console.log(star)
        }
       
        
       
    }
    star += ""
}
