let btn = document.querySelectorAll('button');
let para = document.querySelector('p');

  let choices = ['Rock', 'Paper', 'Scissor'];
  
 function randomChoice() {
 return choices[Math.floor(Math.random()*choices.length)]
}
 
function game1() {
  if (randomChoice() === 'Rock') {
   para.innerHTML = 'you chosed rock and computer also chosed rock so it is a draw'; 
  }
  if (randomChoice() === 'Paper') {
   para.innerHTML = 'you chosed rock and computer chosed paper so you lost'; 
  }
  if (randomChoice() === 'Scissor') {
    para.innerHTML = 'you chosed rock and computer chosed scissor so you won';
  }
}

function game2() {
  if (randomChoice() === 'Rock') {
    para.innerHTML = 'you chosed paper and computer chosed rock so you won';
  }
  if (randomChoice() === 'Paper') {
    para.innerHTML = 'you chosed paper and computer also chosed paper so it is a draw';
  }
  if (randomChoice() === 'Scissor') {
    para.innerHTML = 'you chosed paper and computer chosed scissor so you lost';
  }
}

function game3() {
  if (randomChoice() === 'Rock') {
    para.innerHTML = 'you chosed scissor and computer chosed rock so you lost';
  }
  if (randomChoice() === 'Paper') {
    para.innerHTML = 'you chosed scissor and computer chosed paper so you won';
  }
  if (randomChoice() === 'Scissor') {
    para.innerHTML = 'you chosed scissor and computer also chosed scissor so it is a draw';
  }
}

btn[0].addEventListener('click', game1);
btn[1].addEventListener('click', game2);
btn[2].addEventListener('click', game3);