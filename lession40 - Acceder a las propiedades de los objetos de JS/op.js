

let persona = {

    nombre:"Fabian",
    apellido:"Vargas",
    email:"vargas.fabian@gmail.com",
    edad:28,
        nombrecompleto:function(){

        return this.nombre + ' ' + this.apellido;
    }
}

//console.log(persona['apellido']);

// Bucle for in

for (nombrePropiedad in persona){

    console.log(nombrePropiedad);
    console.log(persona[nombrePropiedad]);
}

