//let autos = new Array("red","pink","yellow",14);

const autos = ['toyota','Kia','Nisan','Mazda','Ford','chevrolet','suzuki'];
//console.log(autos[1]);

autos[5] = "renault";
// Se modifica el campo entre corchetes

autos.push("Volvo");
// Push cambia el ultimo elemento

for (let i = 0; i < autos.length; i++) {
    console.log(i + ':' + autos[i]);
}

