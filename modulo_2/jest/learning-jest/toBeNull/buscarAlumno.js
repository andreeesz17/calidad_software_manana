function buscarAlumno(alumnos, nombre) {
    if (!Array.isArray(alumnos))
        throw new TypeError('alumnos debe ser un array');
    if (typeof nombre !== 'string' || !nombre.trim())
        throw new TypeError('nombre inválido');
    const found = alumnos.find(a => a?.nombre === nombre.trim());
    return found ?? null;
}

function leerProp(obj, prop) {
    if (!obj || typeof obj !== 'object')
        throw new TypeError('obj inválido');
    if (typeof prop !== 'string' || !prop)
        throw new TypeError('prop inválida');
    return obj[prop];
}

module.exports = { buscarAlumno, leerProp };
