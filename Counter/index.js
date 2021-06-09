let bdy = document.querySelector('body');
let hd1 = document.querySelector('h1');

let dcr = document.querySelector('#decrease');
let res = document.querySelector('#reset');
let inc = document.querySelector('#increase');

hd1.innerHTML = '0';

function resetting() {
  hd1.innerHTML = '0';
}
function decreasing() {
  hd1.innerHTML -= '1';
}
function increasing() {
  let me = Number(hd1.innerHTML);
 me += 1;
  hd1.innerHTML = me;
}

dcr.addEventListener('click', decreasing);
inc.addEventListener('click', increasing);
res.addEventListener('click', resetting);