let btn = document.querySelector('#cir');
let bdy = document.querySelector('body');
let rct = document.querySelector('#rect');
let hd = document.querySelector('h1');

function press() {
  if(bdy.style.backgroundColor === 'white') {
    bdy.style.backgroundColor = 'black';
  hd.style.color = 'white';
  rct.style.backgroundColor = '#3DBDFF';
  btn.style.float = 'right';
  }
  else {
    bdy.style.backgroundColor = 'white';
  hd.style.color = 'black';
  rct.style.backgroundColor = '#dbdbdb';
  btn.style.float = 'left';
  }
}

btn.addEventListener('click', press);