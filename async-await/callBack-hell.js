// function getData(dataId, callback) {
//     setTimeout(() => {
//         console.log("Data:", dataId);
//         if (callback) {
//             callback();
//         }
//     }, 1000);
// }

// getData(1, () => {
//     getData(2, () => {
//         getData(3, () => {
//             getData(4, () => {
//                 console.log("All data received");
//             });
//         });
//     });
// });





// function callback( id, fun){
//      console.log("dataID :", id)
//      fun();
// }

// let a=1
// callback(a,()=>{
//     callback(a,()=>{
//         callback(a,()=>{
//             console.log("data received")
//         })
//     })
// })


function product() {
    try {
        fetch('https://fakestoreapi.com/products').
            then((res) => res.json()).
            then((data) => {
                // console.log("all product",data)
                let singleCategory = data[1].category;
                console.log(singleCategory)
                fetch(`https://fakestoreapi.com/products/category/${ singleCategory }`).
                    then((res) => res.json()).
                    then((data) => {
                        console.log("singleCategory i.e", singleCategory, "all product", data)
                        let id = data[0].id;
                        console.log("id is", id)

                        fetch(`https://fakestoreapi.com/products/${ id }`).
                            then((res) => res.json()).
                            then((single) => {

                                console.log("single item is", single)
                            })
                    })
            })
    }
    catch (err) {
        console.log("error", err)
    }

}
product()