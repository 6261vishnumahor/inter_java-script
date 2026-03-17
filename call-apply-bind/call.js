//  let obj1={
//     name:"vishnu mahor",
//     age:23,
//     class: "mca"
//  }


//  function greedy(){
//     console.log("hello ",this.name)

//  }

//  greedy.call(obj1);



//  ===========================borrowing the object===============================


// let person={
//     name: "vishnu mahor",
//     age: 23,
//     class: "mca"
// }


// let person1 = {
//     name: "akash mahor",
//     age: 22,
//     class: "BCA"
// }

// function greedy(){
//     console.log("hello",this.name)
// }

// greedy.call(person)
// greedy.call(person1)


// =====================Function Reuse===========================

// function show(city){
//     console.log( this.name+" hello",city )
// }

// let obj={
//     name:"Vishnu"
// }
// show.call(obj,"morena")




// =====================Constructor Chaining===========================

function constructor(name) {
    this.name = name
}


function constructor1(name, course) {
    constructor.call(this, name)
    this.course = course;
}

let s1 = new constructor1("vishnu", "BCA")

console.log(s1)