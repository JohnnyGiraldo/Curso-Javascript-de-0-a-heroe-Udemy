
let x = 10;

let nombre = "Luis";

let persona = {

    nombre:"Fabian",
    apellido:"Vargas",
    email:"vargas.fabian@gmail.com",
    edad:28,
    nombrecompleto:function(){

        return this.nombre + ' ' + this.apellido;
    }
}

console.log(persona.nombrecompleto());