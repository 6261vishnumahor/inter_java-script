// function patturn1() {
//  let ans=""
// for(let i=1; i<=5; i++){
//     for(let j=1; j<=5; j++){
//         ans+= " "+j
//     }
//     console.log(ans)
//     ans=""
// }
// }

// patturn1()


// output===

// 1 2 3 4 5
// 1 2 3 4 5
// 1 2 3 4 5
// 1 2 3 4 5
// 1 2 3 4 5


// function patturn2(){
// let ans = ""
// for (let i = 1; i <= 5; i++) {
//     for (let j = 1; j <= 5; j++) {
//         ans += " " + i
//     }
//     console.log(ans)
//     ans = ""
// }
// }

// patturn2()

// output==
// 1 1 1 1 1
// 2 2 2 2 2
// 3 3 3 3 3
// 4 4 4 4 4
// 5 5 5 5 5


// function patturn3() {
// let ans = ""
// for (let i = 1; i <= 5; i++) {
//     for (let j = 0; j <i ; j++) {
//         ans += " " + (j+1)
//     }
//     console.log(ans)
//     ans = ""
// }
// }

// patturn3()


// output==
// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5



// function patturn4() {
// let ans = ""
// for (let i = 1; i <= 5; i++) {
//     for (let j = 0; j <i ; j++) {
//         ans += " " + i
//     }
//     console.log(ans)
//     ans = ""
// }
// }

// patturn4()

// output==
// 1
// 2 2
// 3 3 3
// 4 4 4 4
// 5 5 5 5 5


// function patturn5() {
// let ans = ""
// for (let i = 1; i <= 5; i++) {
//     for (let j = 0; j <i ; j++) {
//         ans += " " +"*"
//     }
//     console.log(ans)
//     ans = ""
// }
// }

// patturn5()

//  *
//  * *
//  * * *
//  * * * *
//  * * * * *



// function patturn6() {
//  let ans=""
// for(let i=1; i<=5; i++){
//     for(let j=1; j<=5; j++){
//         ans+= " "+"*"
//     }
//     console.log(ans)
//     ans=""
// }
// }

// patturn6()

// output==
//  * * * * *
//  * * * * *
//  * * * * *
//  * * * * *
//  * * * * *



// function patturn7() {
// let ans = ""
// for (let i = 1; i <= 5; i++) {
//     for (let j = 1; j <=5-i-1 ; j++) {
//         ans += " " +"*"
//     }
//     console.log(ans)
//     ans = ""
// }
// }

// patturn7()


// output==

//  * * * * *
//  * * * *
//  * * *
//  * *
//  *

// function patturn8() {
//     let ans = ""
//     for (let i = 1; i <= 5; i++) {
//         for (let j = 1; j <= 5 - i +1; j++) {
//             ans += " " + i
//         }
//         console.log(ans)
//         ans = ""
//     }
// }

// patturn8()

// 1 1 1 1 1
// 2 2 2 2
// 3 3 3
// 4 4
// 5


// function patturn9() {
//     let ans = ""
//     for (let i = 1; i <= 5; i++) {
//         for (let j = 1; j <= 5 - i + 1; j++) {
//             ans += " " + j
//         }
//         console.log(ans)
//         ans = ""
//     }
// }

// patturn9()

// 1 2 3 4 5
// 1 2 3 4
// 1 2 3
// 1 2
// 1


// function patturn10() {
// let ans = ""
//        let spas=""
//         for (let i = 1; i <= 5; i++) {
//             for (let j = 4-i; j >= 0; j--) {
//                 spas +=" "
//             }
//             for(let k=1;k<=i; k++){
//             ans += "* "
//             }
//            console.log(spas+ans)
//            ans="";
//            spas="";

//     }

// }

// patturn10()

//     *
//    * *
//   * * *
//  * * * *
// * * * * *



// function patturn11() {
// let ans = ""
//        let spas=""
//         for (let i = 1; i <= 5; i++) {
//             for (let j = 4-i; j >= 0; j--) {
//                 spas +=" "
//             }
//             for(let k=1;k<=i; k++){
//             ans += " "+i
//             }
//            console.log(spas+ans)
//            ans="";
//            spas="";

//     }

// }

// patturn11()


//        1
//       2 2
//      3 3 3
//     4 4 4 4
//    5 5 5 5 5


// function patturn12() {
//     let ans = ""
//     let spas = ""
//     for (let i = 1; i <= 5; i++) {
//         for (let j = 4 - i; j >= 0; j--) {
//             spas += " "
//         }
//         for (let k = 1; k <= i; k++) {
//             ans += " " + k
//         }
//         console.log(spas + ans)
//         ans = "";
//         spas = "";

//     }

// }

// patturn12()





// function patturn13() {
//     let ans = ""
//     let spas = ""
//     for (let i = 1; i <= 5; i++) {
//         for (let j = 4 - i; j >= 0; j--) {
//             spas += " "
//         }
//         for (let k = 1; k <= i; k++) {
//             ans += " "+i
//         }
//         console.log(spas + ans)
//         ans = "";
//         spas = "";

//     }

// }

// patturn13()

//     1
//    2 2
//   3 3 3
//  4 4 4 4
// 5 5 5 5 5


// function patturn14() {
//     let ans = ""
//     let spas = ""
//     for (let i = 1; i <= 5; i++) {
//         for (let j = 4 - i; j >= 0; j--) {
//             spas += " "
//         }
//         for (let k = 1; k <= i; k++) {
//             ans += " " + k
//         }
//         console.log(spas + ans)
//         ans = "";
//         spas = "";

//     }

// }

// patturn14()

//     1
//    1 2
//   1 2 3
//  1 2 3 4
// 1 2 3 4 5




// function patturn15() {
//     let ans = ""
//     let spas = ""
//     for (let i = 1; i <= 5; i++) {
//         for (let j = 4 ; j > 5-i; j--) {
//             spas += " "
//         }
//         for (let k = 1; k <=5-i+1; k++) {
//             ans += "* " 
//         }
//         console.log(spas + ans)
//         ans = "";
//         spas = "";

//     }

// }

// patturn15()

    // * * * * * 
    //  * * * * 
    //   * * * 
    //    * * 
    //     * 


// function patturn16() {
//     let ans = ""
//     let spas = ""
//     for (let i = 1; i <= 10; i++) {
//         for (let j = 9; j >10- i; j--) {
//             spas += " "
//         }
//         for (let k = 1; k <= 5 - i + 1; k++) {
//             ans += "* "
//         }
//         console.log(spas + ans)
//         ans = "";
//         spas = "";

//     }

// }

// patturn16()




// function patturn17() {
//     let ans = ""
//     let spas = ""
//     for (let i = 1; i <= 5; i++) {
//         for (let j = 5-i; j >= 1; j--) {
//             spas += " "
//         }
//         for (let k = 1; k <= i; k++) {
//             ans += "*"
//         }
//         console.log(spas + ans)
//         ans = "";
//         spas = "";

//     }

// }

// patturn17()

//     *
//    **
//   ***
//  ****
// *****



// function patturn18() {
//     let ans = ""
//     let spas = ""
//     for (let i = 1; i <= 5; i++) {
//         for (let j = 5 - i; j >= 1; j--) {
//             spas += " "
//         }
//         for (let k = 1; k <= i; k++) {
//             ans += i
//         }
//         console.log(spas + ans)
//         ans = "";
//         spas = "";

//     }

// }

// patturn18()

    //     1
    //    22
    //   333
    //  4444
    // 55555  





//     function patturn18() {
//     let ans = ""
//     let spas = ""
//     for (let i = 1; i <= 5; i++) {
//         for (let j = 5 - i; j >= 1; j--) {
//             spas += " "
//         }
//         for (let k = 1; k <= i; k++) {
//             ans += k
//         }
//         console.log(spas + ans)
//         ans = "";
//         spas = "";

//     }

// }

// patturn18()


//        1
//       12
//      123
//     1234
//    12345



//   function patturn19() {
//     let ans = ""
//     let spas = ""
//     for (let i = 1; i <= 5; i++) {
//         for (let j = 5; j >= 5-i; j--) {
//             spas += " "
//         }
//         for (let k = i; k <=5; k++) {
//             ans += "*"
//         }
//         console.log(spas + ans)
//         ans = "";
//         spas = "";

//     }

// }

// patturn19()




// function patturn20() {
//     let ans = ""
//     let spas = ""
//     for (let i = 1; i <= 5; i++) {
//         for (let j = 5; j >= 5 - i; j--) {
//             spas += " "
//         }
//         for (let k = i; k <= 5; k++) {
//             ans += i
//         }
//         console.log(spas + ans)
//         ans = "";
//         spas = "";

//     }

// }

// patturn20()





function patturn21() {
    let ans = ""
    let spas = ""
    for (let i = 1; i <= 5; i++) {
        for (let j = 5; j >= 5 - i; j--) {
            spas += " "
        }
        for (let k = i; k <= 5; k++) {
            ans += k
        }
        console.log(spas + ans)
        ans = "";
        spas = "";

    }

}

patturn21()