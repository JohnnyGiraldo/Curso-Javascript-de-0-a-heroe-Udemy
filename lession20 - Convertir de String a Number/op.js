let miNumero = "18";
//console.log(typeof miNumero);

let edad = Number(miNumero);
//console.log(typeof edad);

if(edad >= 18) {
    console.log("Puede Votar");

   }   else{
        console.log("Es muy Joven paa votar");
    }

// Forma más corta con el operador Ternario

let resultado = (edad >= 18)? "Puede Votar" : "Es muy Joven paa votar";
console.log(resultado);