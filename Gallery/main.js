const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');


function addImage(xxx) {
    const newImage = document.createElement('img');
newImage.setAttribute('src', xxx);
thumbBar.appendChild(newImage);
newImage.addEventListener('click', function() {
    displayedImage.setAttribute('src', xxx);
})
}
addImage("images/pic1.jpg");
addImage("images/pic2.jpg");
addImage("images/pic3.jpg");
addImage("images/pic4.jpg");
addImage("images/pic5.jpg");

/* Wiring up the Darken/Lighten button */
btn.addEventListener('click', function() {
    if (btn.textContent === 'Darken') {
        btn.setAttribute('class', 'light');
        btn.textContent = "Lighten";
        overlay.style.backgroundColor = "rgba(0,0,0,0.5)";
    }
    else {
        btn.setAttribute('class', 'dark');
        btn.textContent = 'Darken';
        overlay.style.backgroundColor = "rgba(0,0,0,0)";
    }
})