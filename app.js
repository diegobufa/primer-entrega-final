let peliculas_array = new Array();

let id_peliculas = 1;

alert("Bienvenidos a Store Movies");


let flag = true;

while (flag){
    let opcionesUsuario = prompt(`Por favor, elije una opcion de las siguientes
    1- Cargar nueva pelicula
    2- Eliminar pelicula de la lista
    3- Mostrar lista de peliculas
    4- Buscar pelicula en la lista
    5- Salir`);

   

    switch (opcionesUsuario){
        case "1":
            ingresarNuevaPelicula();
            break;
        case "2":
            quitarPelicula();
            break;
        case "3":
            mostrarPeliculas();
            break;
        case "4":
            buscarPeliculas();
            break;
        case "5":
            alert("Gracias por utilizar Store Movies");
            flag = false;            
            break;
        case null:
            alert("Gracias por utilizar Store Movies");
            flag = false;
            break;
        default:
            alert("No ingreso una opcion correcta");

    }

}

function datos_movies(){
    let control = true;

    while (control){
        let mensaje = "";
        let  pelicula = prompt("Ingrese nombre de la pelicula?").trim();
        let  genero = prompt("Que genero de pelicula es?").trim();
        let  fecha = parseInt(prompt("De que año es la pelicula?"));

        if(!pelicula){
            mensaje += "Debe ingresar datos para la carga de peliculas";
        }
        else if (!genero){
            mensaje += "Debe ingresar el genero de la pelicula";
        }
        else if (isNaN(fecha)){
            mensaje += "Debe ingresar una fecha valida";
        }
        else if (mensaje != ""){
            alert (mensaje);
            control = confirm ("Quieres cargar otra pelicula?");
        } else {
            return new Peliculas(pelicula, genero, fecha)
        }


    }
return false;

}

function ingresarNuevaPelicula(){
    let peli = datos_movies();
    if (peli){
        peli.set_id(id_peliculas);
        id_peliculas++;
        peliculas_array.push(peli);
        alert("Agregaste una peli correctamente");
        
    }
}

function quitarPelicula() {
    if (listaPeliculas ()){
        muestroListaPeliculas();

        let nombrePelicula = prompt ("Ingrese nombre de la pelicula a quitar");

        if(nombrePelicula){
            
            let peliculaEnLista = peliculas_array.find((pelicula)=> pelicula.pelicula == nombrePelicula);

        };
        if( peliculaEnLista){
            let respuesta = confirm (
                "Estas seguro de eliminar esa pelicula" + 
                peliculaEnLista.mostrarPeliculas() + "?");
            
        };
        if(respuesta){
            peliculas_array = peliculas_array.filter(
                (pelicula) => pelicula.pelicula != peliculasEnLista);
            
        };
        alert("La pelicula ha sido eliminada");
    }
}

function mostrarPeliculas(){
    if (listaPeliculas()){
        muestroListaPeliculas();

    }
}
function muestroListaPeliculas(){
    let mensaje = "Las peliculas en Store son:";
    peliculas_array.forEach((pelicula) => {
        mensaje = mensaje + "\n" + pelicula.mostrar_peliculas();
    });
    alert(mensaje);
}

function listaPeliculas (){
    if (peliculas_array.length == 0) {
        alert("No hay peliculas en el Store");
        return false;
    }
    return true;

}

