

//! how to target elements

   // by id

   let logo = document.getElementById("logo")
   console.log(logo);

   // by className
   
   let card =document.getElementsByClassName("card")
   console.log(card);

   let secondcard=card[1];
   console.log(secondcard);
   
   let button=document.getElementsByClassName("btn")
   console.log(button[0]);

   // by tag name

   let list=document.getElementsByTagName("li")
   console.log(list[2]);

   // querryselector

   let logo1=document.querySelector("#logo")
   console.log(logo1);

   let logo2=document.querySelector(".card")
   console.log(logo2);

   let logo3=document.querySelector("li")
   console.log(logo3);

   // queryselectorall

   let logo4=document.querySelectorAll(".card")
   console.log(logo4);



//! how to get/set content inside element

   let cardss=document.getElementsByClassName("card")

   console.log(cardss[1].innerText);

   console.log(cardss[1].innerHTML);

   cardss[2].innerHTML="<h2> i am from javascript file</h2> <p> hi </p>"

   //cardss[2].innerText="<h1> heloo</h1>"


//! bow to apply css 

   let target = document.getElementsByTagName("li")
   console.log(target);

   let about = target[1]

   console.log(about);

   // apply css

   about.style.color="red"
   about.style.textDecoration="underline"

//! how to give class

   let firstcard = document.querySelector(".card")

   console.log(firstcard.classList);

   firstcard.classList.add("dark")

   console.log(firstcard.classList);

//! how to create any element 
    
     let div =document.createElement("div")

     div.classList.add("circle")
           
      //cardss[2].append(div)     //! inside after the text present
     // cardss[2].prepend(div)       //! inside before the text present 
     cardss[2].after(div)           //! next to
     //cardss[2].before(div)*/     //! in front of

     let footer =document.createElement("div")

     footer.classList.add("footer")

     footer.innerHTML="<p>this is footer from js file , DOM example of 2025</p>"

     let main = document.querySelector("main")
     
     console.log(main);
     
     main.after(footer)

     
     


    
   
   

   
   
   
   
   
   
   
   

      