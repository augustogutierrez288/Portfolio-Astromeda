const contenedorImg = document.getElementById("contenedor-img");

//DOM de la sesion stack modificado.
function pintarStack(array){
    contenedorImg.innerHTML = " ";
    array.forEach(element => {
        contenedorImg.innerHTML += `<img src="${element.ruta}" data-aos="zoom-in" alt="${element.name}">`
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

//typed.js 

const typed = new Typed('.typed', {
	strings: ['Augusto Gutierrez'],

	//stringsElement: '#cadenas-texto', // ID del elemento que contiene cadenas de texto a mostrar.
	typeSpeed: 85, // Velocidad en mlisegundos para poner una letra,
	startDelay: 500, // Tiempo de retraso en iniciar la animacion. Aplica tambien cuando termina y vuelve a iniciar,
	backSpeed: 85, // Velocidad en milisegundos para borrrar una letra,
	//smartBackspace: true, // Eliminar solamente las palabras que sean nuevas en una cadena de texto.
	shuffle: false, // Alterar el orden en el que escribe las palabras.
	backDelay: 1500, // Tiempo de espera despues de que termina de escribir una palabra.
	loop: true, // Repetir el array de strings
	loopCount: false, // Cantidad de veces a repetir el array.  false = infinite
	showCursor: true, // Mostrar cursor palpitanto
	cursorChar: '|', // Caracter para el cursor
	contentType: 'html', // 'html' o 'null' para texto sin formato
});