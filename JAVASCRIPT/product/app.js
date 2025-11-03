let display= (data)=>{

    console.log(data);
    let main=document.querySelector("main")

    data.map((ele)=>{
        console.log(ele);

        let div=document.createElement("div")
        div.classList.add("card")

        div.innerHTML=`<h4>title : ${ele,title}</h4>`

        main.append(div)
        
    })
    
}

let getdata= async()=>{

    try{
        let res=await fetch("https://fakestoreapi.com/products")
        let data =  res.json

        display(data)
    }
}

display()