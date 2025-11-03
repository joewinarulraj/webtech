


let time = new Date()

console.log(time);


console.log("now hour is:" , time.getHours());
console.log("now min is:" , time.getMinutes());
console.log("now sec is:" , time.getSeconds());
console.log("today date is" , time.getDate());
console.log("today year is" , time.getFullYear());
console.log("today day is" , time.getDay()); //5 (number)


let days = ["sunday","monday","tuesday","wednesday","thursday","friday","saturday"]

console.log("today day is" , days[time.getDay()]);

const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];

console.log("today month " , months[time.getMonth()] );

console.log(time.toLocaleDateString());
console.log(time.toLocaleTimeString());


let displayTime = ()=>{
    let d=new Date()

   // console.log(d.toLocaleTimeString());

    let output=document.querySelector(".outer")

    output.innerHTML = `<h2> ${d.toLocaleTimeString()}</h2>`

    
    
}

//displayTime()

setInterval(displayTime,1000)






//! math object

console.log(Math.sqrt(16));
console.log(Math.abs(-50));

console.log(Math.max(6,8));
console.log(Math.min(6,8));

console.log(Math.cell(6.8));
console.log(Math.cell(5.1));

console.log(Math.floor(5.3));
console.log(Math.floor(6.889789));

console.log(Math.round(6.8));
console.log(Math.round(6.1));


console.log(Math.random() * 10);




