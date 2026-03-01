// let obj = {
//     id: 101,
//     id: 201,
//     name1: "vishnu",
//     "last name": "Mahor",
//     101: 1000

// }


// console.log(obj.id)
// console.log(obj["id"])

// console.log(obj["last name"])
// console.log(obj[101])
// console.log(this.obj.id)



// let obj1={
//     id:1,
//     name:"vishnu",
//     hello:function(){
//         console.log("hello vishnu")
//     }
// }

// // obj1.hello()
// console.log(obj1)



// let h1={
//     id:102,
//     name:"vishnu",
//     mark:[1,2,3,56,7]
// }

// console.log(h1.mark[3])
// console.log(h1["mark"][3])



// let vishnu={
//     id:109,
//     "first name":"vishnu mahor",
//     arr:[23,54,67,78,46,"vipin","vishal"],
//     hello:{
//         id:103,
//         name:"akash",
//         mark:[34,"jdjf",45,76,87],
//         student:{
//             first:"abc",
//             1:"bfh",
//             mark:{
//                 math:78,
//                 phisics:57
//             }
//         }
//     }
// }
// console.log(vishnu.hello["student"].mark.math)
// console.log(vishnu.hello.student.mark.math)








let obj3 = { id: 101, user: "vishnu mahor" }
let { user } = obj3
console.log(user)
// let obj4={id:obj3.id}
// console.log(obj4.id)


// let person = {
//     name: "vishnu",
//     age: 24,
//     class: "mern"  //change the key  value of the object
// }

// person.age = 21
// person = 67
// console.log(person)
// person="person2"    //we can easly change  the object person and asign the value of person2
// console.log(person)



// const person = {
//     name: "vishnu",
//     age: 24,
//     class: "mern"  //change the key value of the object person
// }

// person.age = 34    //change the key value of the object person

// person="person2"   //we can not change the object name person because a person object  declare in constent variable

// console.log(person)




//============================== mathode key and hasOwnproperty ===================================

let obj = {
    id: 101,
    name1: "vishnu",
    "last name": "Mahor",
    101: 1000,

    hello: {
        sname: "akash",
        sno: 62734
    },
    56: "vishal"
}

// console.log(Object.keys(obj))
// console.log(obj.hasOwnProperty("id"))


// ============for in loop=================

// for (let k in obj.hello) {
//     console.log(k, obj.hello[k])
//     console.log(k, obj[k])
// }


//===================== freeze method and seal methode=============================


// console.log(object.freeze(obj))
// Object.freeze(obj)
// obj.id = 201
// console.log(obj)




// Object.seal(obj)
// delete obj.id
// console.log(obj)

