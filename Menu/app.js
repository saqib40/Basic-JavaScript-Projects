let btns = document.querySelector('#Menu');
let bdy = document.querySelector('#body');
let ist = document.querySelector('#aB');
let sec = document.querySelector('#bB');
let thr = document.querySelector('#cB');

btns.addEventListener('click', function(e) {
  if (e.target.matches('#a')) {
    ist.style.display = 'block';
    sec.style.display = 'none';
    thr.style.display = 'none';
  }
  if (e.target.matches('#b')) {
    ist.style.display = 'none';
    sec.style.display = 'block';
    thr.style.display = 'none';
  }
  if (e.target.matches('#c')) {
    ist.style.display = 'none';
    sec.style.display = 'none';
    thr.style.display = 'block';
  }
});