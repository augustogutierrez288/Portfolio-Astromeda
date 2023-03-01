const barraNavBar = document.getElementById("barra-de-navegacion");
const menu = document.getElementById("menu");
const navbar = document.querySelector(".navbar");
const x = document.querySelector(".x");
const all = document.querySelectorAll(".all");
const burger = document.querySelector(".hamburger");

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
    navbar.classList.toggle("active-navbar");
    navbar.classList.contains("active-navbar") ?  burger.style = "position: fixed;" :  burger.style = "position: absolute;";
    animacionNavbar()
});

all.forEach((e) => {
    e.addEventListener("click", () =>{
        setTimeout(() => {
            all.forEach((boton) => boton.classList.remove("active-color-menu"));
            e.classList.add("active-color-menu");
            burger.classList.remove("is-active");
            navbar.classList.remove("active-navbar");
            burger.style = "position: absolute";
            animacionNavbar()
        }, 650);
        
    });
});

burger.addEventListener("click",() =>{
    burger.classList.toggle("is-active");
});


function animacionNavbar(){
    if(navbar.classList.contains("active-navbar")){
        navbar.classList.remove("slide-out-top");
        navbar.classList.add("slide-in-top");
    }else{
        navbar.classList.remove("slide-in-top");
        navbar.classList.add("slide-out-top");
    }
}
