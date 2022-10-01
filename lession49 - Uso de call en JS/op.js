

let persona = {

    nombre : "Luis",
    apellido : "Bueno",
    email : "luis@gmail.com",
    edad: 28,
    nombrecompleto : function () {
    
        return this.nombre + " " + this.apellido;
    }
}

let persona2 = {

    nombre : "Carlos",
    apellido : "Salazar",

    }


console.log(persona.nombrecompleto());

console.log(persona.nombrecompleto.call(persona2));