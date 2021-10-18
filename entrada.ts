import { Movie } from "./movie";
import { Imdb } from "./imdb";
let peli1 = new Movie("El silencio de la ciudad blanca", 2019, "Española", "Drama");
let peli2 = new Movie("Padre no hay más que uno", 2019, "Española", "Comedia");
let archivo = new Imdb([peli1, peli2]);



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
    archivo.peliculas.push(peli);
});

obtenerDatos(0);

