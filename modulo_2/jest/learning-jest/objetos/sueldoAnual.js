function sueldoAnual(empleado) {
    if (!empleado || !typeof empleado == 'object') {
        throw new TypeError("empleado invalido");
    }
    const { sueldoMensual } = empleado;
    if (sueldoAnual && typeof sueldoMensual != 'number' || sueldoMensual < 0) {
        throw new TypeError("sueldo mensual invalido")
    }
    return sueldoMensual * 12;
}

module.exports = { sueldoAnual }