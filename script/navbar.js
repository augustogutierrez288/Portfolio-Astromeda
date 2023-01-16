const barraNavBar = document.getElementById("barra-de-navegacion");
const menu = document.getElementById("menu");
const navbar = document.querySelector(".navbar");
const x = document.querySelector(".x");
const all = document.querySelectorAll(".all");

let ubicacionPrincipal = window.pageYOffset;

window.addEventListener("scroll",()=>{
    barraNavBar.classList.toggle("active-scroll",window.pageYOffset > 0);
    let ubicacionActual = window.pageYOffset;
    if(ubicacionPrincipal >= ubicacionActual){
        barraNavBar.style.top ="0";
        navbar.style.top = "0"
    }else{
        barraNavBar.style.top ="-59.078px";
        navbar.style.top = "59.078px"
    }
    ubicacionPrincipal = ubicacionActual;
});

menu.addEventListener("click",() =>{
    navbar.classList.add("active-navbar");
});

x.addEventListener("click",() =>{
    navbar.classList.remove("active-navbar");
});

all.forEach((e) => {
    e.addEventListener("click", () =>{
        all.forEach((boton) => boton.classList.remove("active-color-menu"));
        e.classList.add("active-color-menu");
        navbar.classList.remove("active-navbar");
    });
});




