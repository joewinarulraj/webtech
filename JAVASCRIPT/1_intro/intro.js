// js is single thread
// js is dynamic


console.log("i am external javascript");

// how to declare variable


//! let keyword
let sname="sathish";
console.log(sname);

// let sname; local scope   //!  re-declaration is not possible in let keyword




//! var keyword

var age
age=30

console.log(age);

var age=40

console.log(age);  //! re-delaration is possible in var keyword 
// global scope

//! const keyword

const aadharNo =1234567890

console.log(aadharNo);

 //aadharNo=9999999999

// console.log(aadharNo)  //!re-initialization is not possible in const keyword



//const no;
//no=87;    //!in const we have to do declaration and initialization in the same line



//!  datatype 2 types

// 1.primitive  2.non-primitive

//! primitive datatype

//! 1.number

let phno=987654321
console.log(phno);

console.log(typeof phno);


let salary=20000.50

console.log(salary);

console.log(typeof salary);


// how to know the datatype

//  by using typeof operator



//!2.boolean

let IsMarried =true

console.log(IsMarried);
console.log(typeof IsMarried);

let hasKid=false

console.log(hasKid);
console.log(typeof hasKid);

//! 3.string


let city="chennai"
let state='tamilnadu'
let country=`india`


console.log(city);
console.log(typeof city);

console.log(state);
console.log(typeof state);

console.log(country);
console.log(typeof country);


//! 4.undefined

//  any variable is declared but not initialized is called undefined

let WifeName

console.log(WifeName);
console.log(typeof WifeName);



//! 5.null

let hasGF=null
console.log(hasGF);
console.log(typeof hasGF);


//! 6.bigint

let LargeNumber=2n;
console.log(LargeNumber);
console.log(typeof LargeNumber);



//! non-primitive datatype

// 1.array, 2.function, 3.object

//! 1.array

let arr =[20,"htnl",false,undefined];

console.log(arr);

//! 2.function

function add()
{
    console.log("i am add function");
    
}

add()


//! 3.object

let emp ={
    ename :"miller",
    eid :1001
}

console.log(emp);

console.log(emp.ename);






















