
class persona{

    constructor(nombre, apellido) {
        this._nombre = nombre;
        this._apellido = apellido;
    }

    get nombre(){
        return this._nombre;

    }

    set nombre(nombre) {
        this._nombre = nombre
    }

}

let persona1 = new persona('luis','Bueno');
persona1.nombre = "Juan Carlos";
console.log(persona1.nombre);

