//? JSON (javascript object notation) is a lightweight data-interchange format
//? that is easy for human to read and write, and easy for machines to parse and generate.

//!  Advantages of JSON :-

//! 1.Human-readable:

//? Json's structure is easy for developers to understand and write.

//! 2. lightweight:-

//? JSON is a minimal format that reduces the size of the data being transmitted.

//! 3. language-Indepent :-

//? JSON can be used with many programming language,
//? including javascript,python,ruby,java,etc.


let person ={

    personName : "rohit",
    age : 35 ,
    city:"chennai",
    isPlayer : true
}

console.log(person);

//! 1. JSON.stringify()

//? this method is used to convert any javascript object into json.

let jsonData = JSON.stringify(person)

console.log(jsonData);

console.log(typeof jsonData);

//! 2. JSON.parse()

//? this is used to convert any json into javascript object.

let ob1 = JSON.parse(jsonData)

console.log(ob1);

console.log(typeof ob1);


let employee = [
    {
        eid : 1,
        ename : "miller",
        sal : 7000
    },
    {
        eid : 2,
        ename : "adams",
        sal : 5000
    },
    {
        eid : 3,
        ename : "scott",
        sal : 3000
    }
]
console.log(employee);

let a =employee.map((ele)=>{
    return ele.ename
    
});
console.log(a);

let b =employee.map((ele)=>{
    return ele.sal
    
});
console.log(b);

//! *** object destructure ***

let student = {

    sname : "rahul",
    age : 10,
    isStudent : true,
    skills : ['html','css','js']

}

let {isStudent , skills,sname,age} = student

console.log(sname);
console.log(skills);

//! rest parameter

//? 

let display =(a,b,c)=>{
    console.log(a);
    console.log(b);
    console.log(c);
    
}
display(10,20,30,40,50)

let display1 =(a,b,...c)=>{
    console.log(a);
    console.log(b);
    console.log(c);
    
}
display1(10,20,30,40,50,60,70)

let arr9 = [1,2,3,4,5,6,7,8,9,10,11,12,13]

let [d,e,...f] = arr9

console.log(d);
console.log(e);
console.log(f);


//! spread operator


let arr4 = [10,20,30]
let arr5 = [40,50,60]

let arr6 =[arr4,arr5]
console.log(arr6);


let arr1 = [10,20,30]
let arr2 = [40,50,60]

let arr3 =[...arr1,...arr2]
console.log(arr3);

