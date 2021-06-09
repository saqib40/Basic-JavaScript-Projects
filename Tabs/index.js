let btn1 = document.querySelector('#ist');
let btn2 = document.querySelector('#sec');
let btn3 = document.querySelector('#thr');

let textA = document.querySelector('#a');
let textB = document.querySelector('#b');
let textC = document.querySelector('#c');

function istShow() {
  textA.style.display = 'block';
  textB.style.display = 'none';
  textC.style.display = 'none';
}
function secShow() {
  textA.style.display = 'none';
  textB.style.display = 'block';
  textC.style.display = 'none';
}
function thrShow() {
  textA.style.display = 'none';
  textB.style.display = 'none';
  textC.style.display = 'block';
}

btn1.addEventListener('click', istShow);
btn2.addEventListener('click', secShow);
btn3.addEventListener('click', thrShow);