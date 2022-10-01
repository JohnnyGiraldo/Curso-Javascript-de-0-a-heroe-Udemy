

let persona = {

    nombre:"Fabian",
    apellido:"Vargas",
    email:"vargas.fabian@gmail.com",
    edad:28,
        nombrecompleto:function(){

        return this.nombre + ' ' + this.apellido;
    }
}

// Agregar Propiedad

persona.telefono = "3215748012";

// Para voler a modificar 
persona.telefono = "3215748021";

// Para eliminar una propiedad con delete

delete persona.telefono;
delete persona.email;

console.log(persona);
