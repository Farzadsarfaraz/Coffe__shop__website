const Hamburger = document.getElementById("Hamburger");
const ulnav = document.querySelector(".hidden");
const closeNav = document.getElementById("closenav");


Hamburger.addEventListener('click', myfunction);

function myfunction(){
    ulnav.classList.toggle("hidden");
}
closeNav.addEventListener('click', Myfunction);

function Myfunction(){
    ulnav.classList.toggle("hidden");
}