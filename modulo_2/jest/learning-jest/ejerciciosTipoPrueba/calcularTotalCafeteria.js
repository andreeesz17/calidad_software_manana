function calcularTotalCafeteria(items, iva) {
    if (!Array.isArray(items)) throw new TypeError('items inválidos');
    if (typeof iva !== 'number' || iva < 0 || iva > 100) throw new TypeError('iva inválido');

    let subtotal = 0;

    for (const item of items) {
        subtotal += item.precioUnitario * item.cantidad;
    }

    const ivaValor = subtotal * (iva / 100);
    const total = subtotal + ivaValor;

    return { subtotal, iva: ivaValor, total };
}

module.exports = { calcularTotalCafeteria };
