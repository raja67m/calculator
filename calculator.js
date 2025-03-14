
   let screen=document.querySelector(".calculator-output");
   let buttons=document.querySelectorAll(".calculator-key");
   let clear=document.querySelector(".calculator-Ac");
   let equal=document.querySelector(".calculator-key-equal");
   let del=document.querySelector(".calculator-Del");

// added the values of buttons
buttons.forEach(function(button){
button.addEventListener('click',function(e){
let value=e.target.dataset.num;  // retrive the values of buttons
if(value !== undefined){  // if the values not define 
   screen.value +=value;  // if the values append the screent value
}
});
});

// equal the operation

equal.addEventListener('click', function(e){
if(screen.value===''){
   screen.value="Please enter the value";
}
else{
   try{
let answer=eval(screen.value); // eval is the articmatic expression ,it is used to put the screen of value.
      screen.value=answer;

   }
   catch{
screen.value="error";
   }
}
});

// clear screen
clear.addEventListener('click',function(e){
   screen.value='';
});

// delete paticular digit
del.addEventListener('click',function(e){
   screen.value=screen.value.substring(0,screen.value.length-1);
})

