

let nombre = "Miguel Angel Castro Escamilla";

console.log(nombre);
console.warn(nombre);
console.error(nombre);
console.info(nombre);

console.group("Mensaje de usuario");
    console.log("Mensajes agrupados con titulo");
console.groupEnd();

console.table([nombre]);
console.table([{nombre_variable: nombre}]);

// console.clear();

console.time();
    console.log("Tiempo que se demoro la web en cargar este mensaje");
console.timeEnd();

