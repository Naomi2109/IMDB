import { Professional } from "./BBDD";

export class Movie{
    public title : string;
    public releaseYear : number;
    public actors : Professional [];
    public nacionality : string;
    public director : Professional;
    public writer : Professional;
    public language : string;
    public plataform : string;
    public isMCU : boolean;
    public mainCharacterName : string;
    public producer : string;
    public distributor : string;
    public genre : string;

    public constructor(title: string, releaseYear: number, nacionality: string, genre: string){
        this.title = title;
        this.releaseYear = releaseYear;
        this.nacionality = nacionality;
        this.genre = genre;
        this.actors = [];
    }
    
    public allAttributes()
    {
        for (let atributo in this)
            if(typeof(this[atributo])!= "function") console.log(this[atributo]);
    }

}

// let peli1 = new Movie("El silencio de la ciudad blanca", 2019, "Española", "Drama");
// let peli2 = new Movie("Padre no hay más que uno", 2019, "Española", "Comedia");

// peli1.allAttributes();
// peli2.allAttributes();
