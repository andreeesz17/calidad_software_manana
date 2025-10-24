function contarPares(arreglo) {
    if (!Array.isArray(arreglo)
    ) {
        throw new TypeError("array invalido")
    }
    let contador = 0;
    for (const item of arreglo) {
        if (item % 2 === 0) contador++;
    }
    return contador;
}
module.exports = { contarPares }