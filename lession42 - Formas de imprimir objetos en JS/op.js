

let persona = {

    nombre:"Fabian",
    apellido:"Vargas",
    email:"vargas.fabian@gmail.com",
    edad:28,
        nombrecompleto:function(){

        return this.nombre + ' ' + this.apellido;
        }
    }

    // Concatenar cada valor de la propiedad

    // console.log(persona.nombre + "  " + persona.apellido);

    // for in

   /* for (nombrePropiedad in persona) {
     console.log(persona[nombrePropiedad]);
    }
    */

   // metodo object values

   /*let=personaArray= Object.values(persona);
   console.log(personaArray);
   */

   // metodo Json

   let = personaString = JSON.stringify(persona);
   console.log(personaString);


