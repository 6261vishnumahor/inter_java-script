
let firstOb = document.getElementById("v1")
let button = document.getElementsByClassName("btn")
console.log(firstOb)
console.log(button)


async function callApi(){
    const response = await fetch("https://fakestoreapi.com/products/1")
    const data=await response.json()
    console.log(data)
}

callApi()

button.addEventListener("click",()=>{
    callApi()
})