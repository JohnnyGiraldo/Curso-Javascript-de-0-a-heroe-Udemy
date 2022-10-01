let persona = {

    nombre:"Fabian",
    apellido:"Vargas",
    email:"varga {s.fabian@gmail.com",
    edad:28,
    idioma:'es',
    get lang() {
       return this.idioma.toUpperCase();
    },

    set lang(lang) {
        this.idioma = lang.toUpperCase();
    },
    get nombrecompleto(){

        return this.nombre + ' ' + this.apellido;

        }
    }

  console.log(persona.lang);

  persona.lang = 'en';

  console.log(persona.lang);

  
  console.log(persona.idioma);
