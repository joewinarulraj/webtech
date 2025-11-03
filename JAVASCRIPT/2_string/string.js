//! how to declare string

let  str1 ="hello"

console.log(str1);
console.log(typeof str1);

let str2='H!'

console.log(str2);
console.log(typeof str2);

let str3=`hello everyone`

console.log(str3);
console.log(typeof str3);


//! how to know the length of the string

console.log(str1.length);


//! method of string
     
    //! 1.toUpperCase()
    // this statement is used to convert any string into uppercase and it will return one new string 
    // it will not modify the original string

    let sname="tamilselvan"

    console.log(sname.toUpperCase());
    console.log(sname);

    let upper=sname.toUpperCase()
    console.log(upper);


    //! 2.toLowerCase()

     // this statement is used to convert any string into lowercase and it will return one new string 
    // it will not modify the original string

    let city="CHENNAI"
    let lower =city.toLowerCase()

    console.log(lower);
    console.log(city);


    //! 3.trim()

    // this method is used to remove the white space from both the side of the string and it will retun one new string

    // 1.trimStart()
    // 2.trimEnd()

    let msg="    good morning  "

    console.log(msg);
    console.log(msg.length);

    let msg2=msg.trim()

    console.log(msg2);


    //! 4. indexof()

    // it is used to retun  the   index oh the given character from the string 
    // it will take the first occurance of the given character

    let subject="javascript"

    console.log(subject.indexOf("y")); //-1

    //! 5.lastIndexof()

    // it is used to remove the last occurance of the given character from the string 

    console.log(subject.lastIndexOf("a")); //3

    //! 6.charat()

    // this is use to know the character which is present at the given index

    console.log(subject.charAt(4));  //s

    //! 7.concat()

    // it is used to combine two  or more than two  string and it will return one new string 

    let msg3="heloo everyone"
    let msg4="good morning"
    console.log(msg3.concat(" ",msg4));

    let combine=msg3.concat(" ",msg4," bye");
    console.log(combine);

    //! 8 imcludes()

    // it is used to know the given string is present or not  .if it is present it will return true else it will return false.

    console.log(msg3.includes("a"));        // false
    console.log(msg3.includes("e"));        //true 
    console.log(msg3.includes("heloo"));    //true

    //! 9 replace
    // it is used to replace one string with another string and it will return one new string. 
    // it will replace only the first occurance.

    let msg5="i am from bangalore"

    console.log(msg5.replace("a","6"));

    //! 10. replaceAll()

    console.log(msg5.replaceAll("m","j"));
    
    
    //! 11. split()

    // this method is used to convert any string into array.

    let str4="good afternoon everyone";

    console.log(str4.split(" "));
     
     //! 12.slice()

     // it is used to extract one string from another string
     // it will take  two parametes(startIndex,endIndex)
     // it will not include the end index value
     // here we can give negative index value also
     // we can traverse only from left to right side

     let str5="good afternoon"

     console.log(str5.slice(0,5));  //good

     console.log(str5.slice(3)); //d afternoon

     console.log(str5.slice(-4)); //noon

     console.log(str5.slice(-4,-1)); //noo

     console.log(str5.slice(0,-1)); //good afternoo    

     console.log(str5.slice(3,0)); //no  output

     //! 13.substring

     // it is used to extract one string from another string
      // it will take  two parametes(startIndex,endIndex)
     // it will not include the end index value
     // here negative value convert to 0
     // if your are give right to left index value it will swap the index value

     console.log(str5.substring(0,5)); //good

     console.log(str5.substring(3)); //d afternoon

     console.log(str5.substring(-4)); //good afternoon  

     console.log(str5.substring(7,0)); //good af


     //! string interpolation

     let a=10
     let b=20

     // the addtition of 10 and 20 is 30 

     console.log(`the addition of ${a} and ${b} is ${a+b}`);


     let arr=[2,1,3,5,4,2]

