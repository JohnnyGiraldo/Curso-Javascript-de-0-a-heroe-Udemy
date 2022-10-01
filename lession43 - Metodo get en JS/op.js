

let persona = {

    nombre:"Fabian",
    apellido:"Vargas",
    email:"vargas.fabian@gmail.com",
    edad:28,
    get nombrecompleto(){

        return this.nombre + ' ' + this.apellido;
        }
    }

    console.log(persona.nombrecompleto);