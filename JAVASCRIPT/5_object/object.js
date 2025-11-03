

//! how to declare object

let student ={

    sname: "join" ,
    sid : 100,
    isStudent:true,
    skill:["html","css","javascript"],

     work : ()=>{
        console.log("eat sleep repat");
        
     },

     address:{
        city:"chennai",
        state:"tamilnadu"
     }
     
}

console.log(student);

console.log(student.sname);

console.log(student.skill[1]); //css

student.work()

console.log(student.address.city);//chennai

let emp={
    ename:"miller",
    eid:2001,
    salary:20000

}
//! how to access the element

console.log(emp.ename);



//! how to update the value

console.log(emp);

emp.eid=3001;

console.log(emp);

//! how to add any property

 emp.phono= 123456789

console.log(emp);

//! how to delete any property

delete emp.eid;
console.log(emp);

   //! object method

//! 1.object.keys()
// it is used to return all the keys in the form of array

let player ={
    playername:"rohit",
    isCaptain:true,
    age:35
}

let keyS =Object.keys(player)
console.log(keyS);

//! 2.object.values()

// it is used to return all the values in the form of array

let values=Object.values(player)
console.log(values);

//! 3.object.entries()

// it will return one nested array where all the key value pair will store in one one array

let entrier=Object.entries(player)
console.log(entrier);

//! 4.object.freez()

// this method is used to make any object frozen then we can't add ,modifyor delete any property

let ob1={
    obname:"pen",
    price:20
}

console.log(ob1);

Object.freeze(ob1)

ob1.price=30; // we can't modify
delete ob1.price; // we can't delete
ob1.color="red" //we can't add

console.log(ob1);

//! 5.object.isfrozen()

// this method is used to know the object is frozen or not.if it is frozen it will return true else it will return false

console.log(Object.isFrozen(ob1));
console.log(Object.isFrozen(emp));

//! 6.object.seal()
// this method is similar to object.freeze(),here also we can't add or modify any property but here we can modify the property

let ob2={
    obname:"marker",
    price:30
}
console.log(ob2);

Object.seal(ob2)

delete ob2.price // we can't delete
ob2.color="red"// we can't add
ob2.price=40 //! we can modify 
console.log(ob2);

//! 7.object.issealed()
// this method is used to know the object is sealed or not.if it is sealed it will return true else it will return false


console.log(Object.isSealed(ob2));
console.log(Object.isSealed(emp));

//! 8 object.assign()
//it is used to combine two or more then tw0 object  and it will return in first object 

let ob3={
    obname:"car",
    price:200000
}
let ob4={
    city:"mumbai",
    country:"india"
}

let combine= Object.assign({},ob3,ob4)

console.log(combine);

console.log(ob3);
console.log(ob4);

//! hasOwnnProperty()

// it is used to know the property is present or not 

console.log(ob4.hasOwnProperty("city"));



























