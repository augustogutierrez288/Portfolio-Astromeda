const barraNavBar = document.getElementById("barra-de-navegacion");
const menu = document.getElementById("menu");
const navbar = document.querySelector(".navbar");
const x = document.querySelector(".x");
const all = document.querySelectorAll(".all");

window.addEventListener("scroll",()=>{
    barraNavBar.classList.toggle("active-scroll",window.scrollY > 0);
});

menu.addEventListener("click",() =>{
    navbar.classList.add("active-navbar");
});

x.addEventListener("click",() =>{
    navbar.classList.remove("active-navbar");
});

all.forEach((e) => {
    e.addEventListener("click", () =>{
        navbar.classList.remove("active-navbar");
    });
});




