let ist = document.querySelector('.a');
let sec = document.querySelector('.b');

function numbering(n) {
  for (let i = 1; i < n; i++) {
  let y = document.createElement("p");
  y.textContent = i;
  ist.appendChild(y);
}
}
numbering(10001);

function pPrimes(n) {
  // to see if n is a prime or a composite number
function pcCheck(k) {
  for (let i = 2; i < k-1; i++) {
    if (k % i === 0) { return 'It is a composite number'; break;}
    if (k % i !== 0) {continue;}
  }
  return "It is a fucking prime number";
}
  // to print prime numbers upto n
  for (let i = 2; i < n; i++) {
  if (pcCheck(i) === "It is a fucking prime number") {
    let y = document.createElement("p");
  y.textContent = i;
  sec.appendChild(y);
  }
}
}
pPrimes(104743);