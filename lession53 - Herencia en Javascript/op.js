

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
    get apellido(){
        return this._apellido;

    }

    set apellido(nombre) {
        this._apellido = apellido;
    }

}

class empleado extends persona{

    constructor(nombre, apellido,departamento) {
        super(nombre, apellido); // llamar al constructor de la clase padre
        this._departamento = departamento;
    
}

get departamento() {
    return this._departamento
}
set departamento(departamento) {
    this._departamento = departamento;
}
   
}

let persona2 = new empleado('Ana','Lopez','Desarrollo');
console.log(persona2.nombre);
console.log(persona2.apellido);
console.log(persona2.departamento);

//let persona1 = new persona('Luisa','Bueno');
//console.log(persona1);




