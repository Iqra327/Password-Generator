export const inputRange = document.getElementById('inputSlider');
export const rangeValue = document.getElementById('sliderValue');
const generateBtn = document.getElementById('js-btn-genPsw')
const inputBox = document.getElementById('passBox');
const lowerCase = document.getElementById('lowercase');
const upperCase = document.getElementById('uppercase');
const numbers = document.getElementById('numbers');
const symbols = document.getElementById('symbols');


rangeValue.textContent = inputRange.value;
inputRange.addEventListener('input', () => {
  rangeValue.textContent = inputRange.value;
});

generateBtn.addEventListener('click', () => {
  inputBox.value = generatePassword(); 
});

const lowerChars = 'abcdefghijklmnopqrstuvwxyz';
const upperChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const allNumbers = '0123456789';
const allSymbols = '!@#$%^&*';


function generatePassword(){
  let passStorage = '';
  let allChars = '';

  allChars += lowerCase.checked ? lowerChars : '';
  allChars += upperCase.checked ? upperChars : '';
  allChars += numbers.checked ? allNumbers : '';
  allChars += symbols.checked ? allSymbols : '';

  if(allChars == "" || allChars.length == 0){
    return passStorage;
  }

  for(let i = 1 ; i <= inputRange.value ; i++){
    passStorage += allChars.charAt(Math.floor(Math.random() * allChars.length));
  }
  return passStorage;
}

