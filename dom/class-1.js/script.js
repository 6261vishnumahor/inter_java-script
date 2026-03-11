

const number=document.getElementById("num")

console.log(number)

const btn1 = document.getElementById("btn1")
const btn2 = document.getElementById("btn2")

btn1.addEventListener("click",incriment)
let count=0
function incriment(){
    count++
    number.innerText=`${count}`
    console.log(count)
}
btn2.addEventListener("click", decriment)

function decriment() {
    count--
    number.innerHTML =` ${count}`
}
