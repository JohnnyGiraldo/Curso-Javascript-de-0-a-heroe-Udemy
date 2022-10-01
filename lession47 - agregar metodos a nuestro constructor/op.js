

function Personas(nombre,apellido,email) {

    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
    this.nombreCompleto = function () {
    
        return this.nombre + " " + this.apellido;
    }
}
    
    let padre = new Personas("Orlando" ,"Suarez" ,"orlando@gmail.com");
    console.log(padre.nombreCompleto());
    
    let madre = new Personas("Maria" ,"Galvez" ,"maria@gmail.com");
    console.log(madre.nombreCompleto());