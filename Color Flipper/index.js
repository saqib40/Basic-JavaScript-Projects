let btn = document.querySelector('button');
let bdy = document.querySelector('body');
let head = document.querySelector('h1')
function random(number) {
  return Math.floor(Math.random()*number);
}
function bgChange() {
        const rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
        bdy.style.backgroundColor = rndCol;
  head.innerHTML = 'Background-color: ' + rndCol;
      }
btn.addEventListener('click', bgChange)