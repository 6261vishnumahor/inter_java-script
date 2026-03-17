

let dropDown=true;
let nav = document.getElementsByClassName("nav")
let header = document.getElementById("header")

let url ="https://fakestoreapi.com/products/"

  async function  callApi(url){
    try{
        let response=await fetch(url)
        let data=await response.json()
        // console.log(data)
        header.innerHTML=""
        data.map((item)=>{
            return header.innerHTML += `<div class="card">
                <img src=${ item.image } alt="Product Image" class="card-img">

                <div class="card-content">
                     <h2 class="title">${ item.title.substring(0, 11) + "..." }</h2>

                    <p class="description">
  
                      ${ item.description.substring(0, 70) + "..." }
                     </p>

                    <div class="price">₹${ item.price }</div>

                     <div class="rating">
                        ⭐⭐⭐⭐☆
                        <span>${ item.rating.rate }</span>
                    </div>
                </div>
            </div>`
           
        })
        extractAllCategory(data)

    }
    catch(err){
        console.log("Internal server error: ",err)
    }
}
callApi(url)

 function extractAllCategory(data){
         try{
             let duplicategoryArray=[]
           if(dropDown){
             duplicategoryArray=data.map(item=>item.category);
            // console.log(duplicategoryArray)
           }
           let arr=[]
             let category =""
             for(let i=0; i<duplicategoryArray.length; i++){
                 if (!arr.includes(duplicategoryArray[i])) {
                     arr.push(duplicategoryArray[i]);
                 }

              

           }
          console.log(arr)

         }


         catch (err) {
             console.log("Internal server error: ", err)
         }
       
}

 