let persona = {

    nombre : "Luis",
    apellido : "Bueno",
    email : "luis@gmail.com",
    edad: 28,
    nombrecompleto : function (profesion , telefono) {
    return profesion + ";" + this.nombre + ''  + this.apellido;
    } 
}
let persona2 = {
    nombre : "Carlos",
    apellido : "Salazar",

    }

console.log(persona.nombrecompleto("programador" , 5555555555));

console.log(persona.nombrecompleto.call(persona2 , "ingeniero" ,"78788889"));