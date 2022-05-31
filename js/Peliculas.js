class Peliculas{

    constructor(pelicula,genero,fecha){
        this.pelicula = pelicula
        this.genero = genero
        this.fecha = fecha
        this.id = -1
    }

    mostrar_peliculas(){
        return (this.id + " - " + this.pelicula + " - " + this.genero + " - " + this.fecha)
    }

    set_id(nuevo_id){
        this.id = nuevo_id
    }
    getPelicula(){
        return this.pelicula;
    }
}



