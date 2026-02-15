//Project//Password Generator Web Application

//Accessing Elements

const displayPassword = document.getElementById('display-password');
const copybtn = document.getElementById('copy-btn')
const legthValue = document.getElementById('length-value');
const rangeValue = document.getElementById('range-value');
const upperCase = document.getElementById('upper-case');
const lowerCase = document.getElementById('lower-case');
const numbers = document.getElementById('numbers');
const symbols = document.getElementById('symbols');
const strength = document.getElementById('strength');
const generatebtn = document.getElementById('generate-btn');

//All Variables  

let upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz';
let allNumbers = '0123456789';
let allSymbols = '!@#$%^&*~';


//Dynamically update length 

rangeValue.addEventListener('input', ()=>{
  legthValue.textContent = rangeValue.value ;
})


//Password generator function

generatebtn.addEventListener('click', function(){

let passwordLength = rangeValue.value;
let initialPassword = "";

  if(upperCase.checked){
    initialPassword += upperCaseLetters;
  }

  if(lowerCase.checked){
    initialPassword += lowerCaseLetters;
  }

  if(numbers.checked){
    initialPassword += allNumbers;
  }

  if(symbols.checked){
    initialPassword += allSymbols;
  }

  //If no password is selected

  if(initialPassword == ''){
    alert('Please select at least one option !')
    return false ;
  }

  let finalPassword = "";

  for( i = 0; i < passwordLength ; i++){
   let randomIndex = Math.floor( Math.random() * initialPassword.length)
   finalPassword += initialPassword[randomIndex];
  }

  displayPassword.value = finalPassword ;

  let regEx = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*~])[a-zA-Z0-9!@#$%^&*~]{12,24}$/
  if(regEx.test(finalPassword)){
    strength.textContent = "STRONG";
  }
  else{
    strength.textContent = "WEAK"
  }
})

 
function reset(){
  displayPassword.value = "";
  rangeValue.value = 8 ;
  legthValue.textContent = 8 ;
  strength.textContent = "WEAK";
}



copybtn.addEventListener('click', function(){
  if(displayPassword.value === ""){
    alert('No password to copy !')
  }
  else{
    navigator.clipboard.writeText(displayPassword.value);
    alert('Password copied to clipboard!')
  }
  
})
