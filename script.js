/* El  DOM o document object model,  es un objeto en java srcript por lo tanto va a tener propiedades y comportamientos asociados, es decir atributos y funciones, a los que se les llama métodos. 
Es en forma mas sencilla una variable en Java que va a traer una abstracción de mi docuemnto de HTML */

const nombre = "Maro";
let edad = 24;
/* Tipo cajon */
/* {} */
const scoobydoo = {
    raza: "Gran danes",
    nopatas: 4,
    puedeHablar: true,
    color: "cáfe con manchas"
}

/* no funciona scoobydoo = algo */
scoobydoo.color = "cáfe con manchas"

/* Para avisar a otros */

//alert('Hola mundo')
console.log("Hola mundo", nombre)
//document.writen("hola mundo")

/* Se pueden poder id a todo el html */

let titulo = document.getElementById('titulo');
console.log (titulo)

let objetoDelaBibliotecaTypewriter = new Typewriter(titulo, {
    loop: true
});

objetoDelaBibliotecaTypewriter.typeString('Hello World!')
    .pauseFor(2500)
    .deleteAll()
    .typeString('Bienvenido a mi portafolio')
    .pauseFor(2500)
    .deleteChars(10)
    .typeString('<strong>mente</strong>')
    .pauseFor(2500)
    .start();
