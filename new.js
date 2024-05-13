const Hamburger = document.getElementById("Hamburger");
const ulnav = document.querySelector(".ulnav");


Hamburger.addEventListener('click', myfunction);

function myfunction(){
    ulnav.classList.toggle(".hidden");
}
