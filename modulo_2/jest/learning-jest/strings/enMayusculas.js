function enMayusculas(texto) {
    if (typeof texto !== 'string' || !texto.trim()) {
        throw new TypeError('texto invalido');
    }
    return texto.toUpperCase();
}
module.exports = { enMayusculas }