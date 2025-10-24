function esPar(numero) {
    if(!Number.isInteger(numero)) throw new TypeError('El valor debe ser un número entero');
    return numero % 2 === 0;
}
module.exports = { esPar };