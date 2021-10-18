import { Movie } from "./movie"

export class Imdb{
    public peliculas : Movie[];
    
    constructor (peliculas : Movie[]){
        this.peliculas = peliculas;
    }
    
    public escribirEnFicheroJSON(nombreFichero:string)
    {
        let objeto = JSON.stringify(this);
        let fs = require("fs");
        fs.writeFileSync(nombreFichero, objeto, error => {
            if (error)
            console.log(error);
            else
            console.log("Archivo creado");
        });
       
    } 

    public obtenerInstanciaIMDB(nombreFichero:string):Imdb{
        let fs = require("fs");
        let resultado = new Imdb(JSON.parse(fs.readFileSync(nombreFichero,"utf8")));
        return resultado;        
    }
};
