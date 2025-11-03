console.log("this is timing function");
console.log("start");


let display=()=>{
    console.log("i am display function");
    
}
// display();

//! setTimeOut()

setTimeout(display,4000)


console.log("end");

setTimeout(()=>{
    console.log(" i am setTimeOUT function");
    
},5000)


let wish=()=>{
    console.log("happy birthday");
    
}

let sc=setTimeout(wish,3000);

//* clearTimeout(sc) // to stop the timeout function


//! setInterval()

let sorry=()=>{

    console.log("i am sorry")
    
}

let st=setInterval(sorry,2000);

 clearInterval(st) //to stop the interval function

 let si = setInterval(()=>{
    console.log("i am setinterval function");
    
 },1000)

 console.log(si);
 




