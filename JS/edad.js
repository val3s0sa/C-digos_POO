function Edad(fecha) {
    var resta = Date.now() - fecha.getTime();

    fecha = new Date(resta);
    return (fecha.getUTCFullYear() - 1970);
}

console.log(Edad(new Date(2004, 11, 16)));