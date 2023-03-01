const contenedorImg = document.getElementById("contenedor-img");
//DOM de la sesion stack modificado.
function pintarStack(array){
    contenedorImg.innerHTML = " ";
    array.forEach(element => {
        contenedorImg.innerHTML += 
        `
        <img src="${element.ruta}" alt="${element.name}">
        `
    });
};
//clase para crear distintos objetos basado en el stack tecnologico.
class Stack{
    constructor(id,name,ruta){
        this.id = id
        this.name = name
        this.ruta = ruta
    };
};
//Frontend
const html = new Stack("frontend","html5","./assets/html-5.png");
const css = new Stack("frontend","css3","./assets/css-3.png");
const sass = new Stack("frontend","python","./assets/sass.png");
const bootstrap = new Stack("frontend","bootstrap","./assets/bootstrap.png");
const js = new Stack("frontend","javascript","./assets/js.png");
const jsx = new Stack("frontend","JSX","./assets/jsx.png");
const react = new Stack("frontend","react","./assets/react.png");
const vite = new Stack("frontend","vite","./assets/vite.png");

//frameworks
const nodeJS = new Stack("backend","nodejs","./assets/nodejs.png");
const python = new Stack("backend","python","./assets/python.png");

//repositorios
const git = new Stack("repositorio","git","./assets/git.webp")
const github = new Stack("repositorio","github","./assets/github.webp")

const arrayStack = [html,css,sass,bootstrap,js,jsx,react,vite,nodeJS,python,git,github];

pintarStack(arrayStack);
//filtro
const botones = document.querySelectorAll(".btn-desing");
botones.forEach((btn) =>{
    btn.addEventListener("click",(e) =>{
        botones.forEach(e => e.classList.remove("active"));
        e.currentTarget.classList.add("active");
        if( e.currentTarget.id != "all"){
            const stackFiltrado = arrayStack.filter(skrill => skrill.id === e.currentTarget.id);
            pintarStack(stackFiltrado);
        }else{
            pintarStack(arrayStack);
        }

    })
})