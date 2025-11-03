let fetchdata=fetch("https://fakestoreapi.com/products")
console.log(fetchdata);    //promise

fetchdata
.then((data)=>{
    console.log(data);  //response

    let jsondata=data.json()
    console.log(jsondata);  //promise


    jsondata
    .then((data)=>{
        console.log(data);  // original data

        let outer=document.querySelector(".outer")
        let ol=document.createElement("ol")
        outer.append(ol)
        let title=data.map((ele)=>{
            let li=document.createElement("li")
            ol.append(li)
            li.innerHTML=`<P><b>title</b>  ${ele.title}</P>`
            console.log(li);
            
        })
        
    })
    .catch((err)=>{
        console.log(err);
        
    })
    
    
})

.catch((err)=>{
    console.log(err);
    
})
