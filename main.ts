import { Professional } from "./BBDD";
import { Movie } from "./movie";
import { Imdb } from "./imdb";

let professional1 = new Professional ("Carlos", 34, "Masculino", 70, 170, "castaño", "azules", "arte dramatico", false, "español", 5, "actor")
let professional2 = new Professional ("Estefanía", 25, "Femenino", 55, 160, "Pelirroja", "Marrones", "diseño grafico", false, "italiana", 0, "actriz")


// professional1.allAttributes()
// professional2.allAttributes()

let peli1 = new Movie("El silencio de la ciudad blanca", 2019, "Española", "Drama");
let peli2 = new Movie("Padre no hay más que uno", 2019, "Española", "Comedia");

// peli1.allAttributes();
// peli2.allAttributes();

let archivo = new Imdb([peli1, peli2]);
// console.log(archivo);



let objeto = JSON.stringify(archivo)
let fs =require("fs")
fs.writeFileSync("./imdbBBDD.json", objeto);

archivo.escribirEnFicheroJSON("imdb.json")
console.log(archivo.peliculas);
archivo.peliculas = [];
archivo = archivo.obtenerInstanciaIMDB("imdb2.json");
console.log(archivo.peliculas);

const texto = ["Escribe el título de la película: ", "Escribe el año de estreno: ", "Escribe la nacionalidad de la película: ", "Escribe el género de la película: "];
let respuestas = [];

function obtenerDatos(numero: number){
    process.stdout.write(`\n ${texto[numero]}`);
}
process.stdin.on('data', data => {
    if (respuestas.length == 1){
        respuestas.push(parseInt(data.toString().trim()));
    }
    else {
        respuestas.push(data.toString().trim());
    }; 
    if (respuestas.length<texto.length){
        obtenerDatos(respuestas.length)
    }
    else {
        process.exit();
    }
});

process.on('exit', function(){
    const peli = new Movie(respuestas[0], respuestas[1], respuestas[2], respuestas[3]);
    console.log(peli);
    console.log(archivo.peliculas);
    // archivo.peliculas.push(peli);
});

obtenerDatos(0);
