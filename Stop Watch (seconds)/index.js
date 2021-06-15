let head = document.querySelector('.seconds');
let btn = document.querySelector('.start');
let btn2 = document.querySelector('.stop');
let btn3 = document.querySelector('.reset');
let me;

btn.addEventListener('click', () => {
  me = setInterval(function() {
  let nmbr = Number(head.innerHTML);
  head.innerHTML = nmbr + 1;
}, 1000);
});

btn2.addEventListener('click', () => {
 clearInterval(me);
});

btn3.addEventListener('click', () => {
  head.innerHTML = 0;
});