let btn = document.querySelector('button');
let para = document.querySelector('p');
let textInput = document.querySelector('#place');
let tempChoice = document.querySelector('select');

function converter() {
  let x = Number(textInput.value);
let choice = tempChoice.value;
  
  if (choice === "Celsius") {
    //celsius to fahrenheit
function n(x) {
  return x * 9/5 + 32;
}
//celsius to kelvin
function y(x) {
  return x + 273;
}
    para.innerHTML = x + ' degree celsius is ' + n(x) + ' degree fahrenheit & ' + y(x) + ' kelvin';
  }
  else if (choice === "Kelvin") {
    //kelvin to celsius
function r(x) {
return x - 273;  
}
//kelvin to fahrenheit
function k(x) {
  return x * 9/5 - 460;
}
    para.innerHTML = x + ' Kelvin is ' + r(x) + ' degree celsius & ' + k(x) + ' Fahrenheit';
  }
  else {
    //fahrenheit to kelvin
function z(x) {
  return x * 5/9 + 2300/9;
}
//fahrenheit to celsius
function m(x) {
  return x * 5/9 - 160/9;
}
    para.innerHTML = x + ' degree Fahrenheit is ' + m(x) + ' degree celsius & ' + z(x) + ' kelvin';
  }
}

btn.addEventListener('click', converter);