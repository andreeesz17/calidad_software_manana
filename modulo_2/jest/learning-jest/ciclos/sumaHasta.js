function sumaHasta(numero) {
    if (typeof numero !== 'number'
        || Number.isNaN(numero)
        || numero < 1
        || !Number.isInteger(numero)) {
        throw new TypeError('numero invalido');
    }
    let total = 0;
    for (let i = 1; i <= numero; i++) {
        total += i;
    }
    return total;
}
module.exports = { sumaHasta };