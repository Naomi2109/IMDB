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
fs.writeFileSync("./imdbBBDD.json", objeto, error => {
    if (error)
    console.log(error);
    else
    console.log("Archivo creado");
})
