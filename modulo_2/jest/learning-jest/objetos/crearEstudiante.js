function crearEstudiante(nombre, edad) {
    if (!typeof nombre == 'string' || !nombre.trim()) {
        throw new TypeError("nombre invalido");
    }
    if (!Number.isInteger(edad) || edad < 0) {
        throw new TypeError("edad invalida")
    }
    return { nombre: nombre.trim(), edad };
}

module.exports = { crearEstudiante }