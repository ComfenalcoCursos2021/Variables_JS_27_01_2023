



// String Cadenas de texto.
// Number Valores numéricos.
// Boolean Representa una entidad lógica y puede tener dos valores: true y false.
// Object Un valor en memoria al que podemos acceder por un identificador.

let nombre = "Miguel";
let altura = 1.63;
let soyAprendiz = false;
let curiculo = {
    secundaria: "Bachiller tecnico especialista en informatica",
    experiencia_web: "Full stact en vue",
    ingenieria: "Software",
    años_maestria: 2
}

console.log(`El nombre es ${nombre}`);
console.log(`La altura es ${altura}`);
console.log(`El rol aprendiz es ${soyAprendiz}`);

console.groupCollapsed("Curriculo")
    console.table([curiculo])
console.groupEnd();






