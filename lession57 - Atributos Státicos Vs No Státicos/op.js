

class persona{

    
    static contadorPersona = 0;

    email = "mi correo actual";

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

    nombreCompleto() {
        return this._nombre + '' + this._apellido;
    }

    static saludar() {
        console.log('Saludos desde método static');
    }
    static saludar2(persona) {
        console.log(persona.nombre + ' ' + persona.apellido);
    }

}

class empleado extends persona{

    constructor(nombre, apellido,departamento) {
        super(nombre, apellido); // llamar al constructor de la clase padre
        this._departamento = departamento;
    
}

nombreCompleto() {
    return super.nombreCompleto() +' ,' +this._departamento;
}


get departamento() {
    return this._departamento
}
set departamento(departamento) {
    this._departamento = departamento;
}
   
}

let persona2 = new empleado('Ana','Lopez','Desarrollo');
console.log(persona2.email);


//console.log(persona2.nombreCompleto());

//persona.saludar();
//empleado.saludar();

//persona.saludar2(persona2);

console.log(persona.contadorPersona);