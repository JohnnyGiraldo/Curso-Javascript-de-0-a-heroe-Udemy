



function Personas(nombre,apellido,email) {

    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
    this.nombreCompleto = function () {
    
        return this.nombre + " " + this.apellido;
    }
}
    
Personas.prototype.telefono = "3455445455";
    let padre = new Personas("Orlando" ,"Suarez" ,"orlando@gmail.com");
    //padre.telefono = "5757575757";
    console.log(padre.telefono);
    
    let madre = new Personas("Maria" ,"Galvez" ,"maria@gmail.com");
    console.log(madre.telefono);