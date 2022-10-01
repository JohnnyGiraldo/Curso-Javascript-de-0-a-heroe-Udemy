// Funcion constructor de objetos de tipo persona

function Personas(nombre,apellido,email) {

this.nombre = nombre;
this.apellido = apellido;
this.email = email;

}

let padre = new Personas("Orlando" ,"Suarez" ,"orlando@gmail.com");
console.log(padre);

let madre = new Personas("Maria" ,"Galvez" ,"maria@gmail.com");
console.log(madre);
