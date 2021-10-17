import { Movie } from "./movie"

export class Imdb{
    public peliculas : Movie[];
    
    constructor (peliculas : Movie[]){
        this.peliculas = peliculas;
    }
    
    // public escribirEnFicheroJSON(creaFichero:string)
    // {
    //     creaFichero = JSON.stringify()
    // } 

    // public obtenerInstanciaIMDB(Fichero:string):Imdb
    // {
        
    // }
};
