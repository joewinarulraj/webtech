// it is block of code


//! 1.named function

function display() {

    console.log("i am display function"); 
}
display();

//! function with parameter

function add(a,b){
    console.log(a+b);
    
}

add(5,6);

//! function with return keyword

function sub(a,b){
    return a-b;
}

let res=sub(30,25);
console.log(res);

//console.log(sub(10,5));

//! function with expression

let msg=function(){
    console.log("heloo");
    
}

msg();


//! arrow function

let multiply =(a,b)=>{
    console.log(a * b);
    
}
multiply(30,3)

//! nested function

let outer=()=>{
    console.log("i am outer function");

    let inner=()=>{
        console.log(" i am inner function");
    }

    inner();
    
}
outer();

//! lexical scopping ***

// in nested function the inner function can access all the properties of outer function but 
// outer funtion can't access the properties of inner function this is called lexical scopping


let parent =()=>{
    let a =10;
    let child =()=>{
        let b=20
        console.log(a);
        console.log(b);
        
        
    }

   // console.log(b); //error
    
    child();
}
parent();


//! higher order function and callback function ***

// any function that takes another function as parameter
// the funtion  we are sending as a parameter  to the higher order function is called call back function

let hof=(a)=>{
    a();
}

hof(()=>{
    console.log("higher order and callback function");
    
});

//! IIFE(immediate Invoke Function Expression)


(function(){
    console.log("i am IIFE");
    
})

()









