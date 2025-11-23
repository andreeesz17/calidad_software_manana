function esTruthy(valor) {
    return !!valor; // coerción booleana
}

function retornarDefault(valor, defecto = 'N/A') {
    return valor ? valor : defecto; // usa falsy
}

function requiereTextoNoVacio(txt) {
    if (typeof txt !== 'string' || !txt.trim()) {
        throw new TypeError('texto requerido');
    }
    return txt.trim();
}

module.exports = {
    esTruthy, retornarDefault,
    requiereTextoNoVacio
};
