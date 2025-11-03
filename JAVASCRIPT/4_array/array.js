let arr =[10,"html",true,[3,4]]
console.log(arr);

//! how to know the length of the arrays

console.log(arr.length);

//! Array methods

//! 1.push()

// it is used to add the element at the end of the array
// if you store in a variable it will retun the size of the array

let arr1=[10,20,30];

console.log(arr1);
arr1.push(40);
console.log(arr1);

//! 2.pop()

// it is used to remove the  last element  in the array
// if you store in a variable it will return the removed element

arr2=[10,20,30];

console.log(arr2);

arr2.pop();

console.log(arr2);

//! 3.unshift()
// this method is used to add the element at the starting of the array.

let arr3= [10,20,30]

arr3.unshift(5);
console.log(arr3);

//! 4.shift()
// it is used to remove the element at the starting of the array

let arr4= [10,20,30];
arr4.shift();
console.log(arr4);

//! 5.includes()

// it is used to know the given element is present or not .
// if the element is present in the array it will return true else it will return false

let arr5=[10,20,30,40,30];

console.log(arr5.includes(20));
console.log(arr5.includes(200));

//! 6.indexof()

// it will show the nearest index value

console.log(arr5.indexOf(30));

//! 7.lastindexof()
// it will show the last index value

console.log(arr5.lastIndexOf(30));

//! 8.concate()

// it is used to combine tow or more then two array and it will return one new array

let sub1=["html","css"];
let sub2=["java","python"]

console.log(sub1.concat(sub2));

//! 9.reverse()

// it is used to revese the array

let arr6=[10,20,30,40,50]

arr6.reverse()

console.log(arr6);

//! 10.join()

// it is used to convert any array into string

let msg=['h','e','l','l','o']

console.log(msg.join(""));

//! reverse the string by inbuild method

let str="hello";

let arr7=str.split("")
console.log(arr7);

let revarr=arr7.reverse()
console.log(revarr);

let revstr = revarr.join("")
console.log(revstr);




//! 1.map()

// map() method is higherorder array method it is used to traverse the array and we can do any operation
// thi method will return a new array
// map() method will take one callback function and it can take 3 parameter(element ,index ,array)

let number=[10,20,30,40,50]

let m1=number.map((ele , index , array)=>{
    return ele +100
})

console.log(m1);

let subject = ['html','css','js','python']

let s1=subject.map((ele)=>{
    return ele.toUpperCase()
})

console.log(s1);

//! 2.filter()

// it is one higherorder array method it is used to traverse the array and check the condition and 
// it will take one call back function and here it can take  3 parameters9(element,index, array)

let m2 =number.filter((ele)=>{
    return ele > 20
})

console.log(m2);  

let m3 =number.filter ((ele)=>{
    return ele!=30
})

console.log(m3);
let arr8=['html','css','js','java']

let m4 =arr8.filter((ele)=>{
    return ele!='css'
})

console.log(m4);

//! 3.reduce()

// it is used to reduce the array element into single value by adding or multiplying
// it is one higher order array method it will take 4 parameter int the callback function

let sum =number.reduce((acc,ele)=>{
    console.log(acc);

    return acc+ele
    
})

console.log(sum);

let multiply =number.reduce((acc,ele)=>{
    return acc*ele
})

console.log(multiply);

//! 4.sort()

// sort() is higerorder array method it is used to sort the array into ascending or descending order
// it take two parameter in the callback function if we are giving firstparameter =secondparameter

let arr9=[5,2,3,1,9,8]

let asc =arr9.sort((a,b)=>{  //? ascending order
    return a-b 
})

console.log(asc);

let des = arr9.sort((a,b)=>{  //? descending order
    return b-a 
})

console.log(des);

//! 5.foreach

// this method can not return 

let arr10 =[2,6,8,10]

arr10.forEach((ele)=>{
    console.log(ele+100);
    
})

























