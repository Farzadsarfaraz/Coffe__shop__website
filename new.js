const Hamburger = document.getElementById("Hamburger");
const ulnav = document.querySelector(".ulnav");
const closeNav = document.getElementById("closenav");


closeNav.addEventListener('click', Myfunction);

function Myfunction(){
    ulnav.classList.toggle('hidden');
}
Hamburger.addEventListener('click', myfunction);

function myfunction(){
    ulnav.classList.toggle('hidden');
}