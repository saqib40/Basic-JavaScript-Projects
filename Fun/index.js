let btn = document.querySelector('div.a');
let btn2 = document.querySelector('div.b');
let mdn = document.querySelector('body');

function bgChange() {
        mdn.style.backgroundColor = 'red';
      }
function bgChange2() {
        mdn.style.backgroundColor = '#1ed760';
      }

btn.addEventListener("click", bgChange);
btn2.addEventListener("click", bgChange2);