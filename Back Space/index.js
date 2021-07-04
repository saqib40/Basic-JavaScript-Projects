let keys = document.querySelector(".keys");
let para = document.querySelector('p');

let textArray = [];
let reqText = textArray.join('');
keys.addEventListener('click', e => {
  if (e.target.matches('button')) {
    textArray.push(e.target.innerHTML);
    reqText = textArray.join('');
    para.innerHTML = reqText;
  }
  if (e.target.matches('.backSpace')) {
    textArray.pop();
    reqText = textArray.join('');
    para.innerHTML = reqText;
  }
});