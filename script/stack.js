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
//lenguajes
const html = new Stack("lenguaje","html5","./assets/html-5.png");
const css = new Stack("lenguaje","css3","./assets/css-3.png");
const js = new Stack("lenguaje","javascript","./assets/js.png");
const tsc = new Stack("lenguaje","typescript","./assets/typescript.png");
const python = new Stack("lenguaje","python","./assets/python.png");
const sass = new Stack("lenguaje","python","./assets/sass.png");
//frameworks
const bootstrap = new Stack("framework","bootstrap","./assets/bootstrap.png");
const react = new Stack("framework","react","./assets/react.png");
const reactNative = new Stack("framework","react native","./assets/react-native.png");
const angular = new Stack("framework","angular","./assets/angular.png");
// entorno de ejecucion
const nodeJS = new Stack("EV","nodejs","./assets/nodejs.png");
//repositorios
const git = new Stack("repositorio","git","./assets/git.webp")
const github = new Stack("repositorio","github","./assets/github.webp")
const arrayStack = [html,css,js,tsc,python,sass,bootstrap,react,reactNative,angular,nodeJS,git,github];
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