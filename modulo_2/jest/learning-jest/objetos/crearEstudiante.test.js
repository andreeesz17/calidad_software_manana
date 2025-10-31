const { crearEstudiante } = require('./crearEstudiante');

describe('Crear Estudiante', () => {
    test('Happy path:', () => {
        expect(crearEstudiante('maria', 17)).toEqual({
            nombre: 'maria',
            edad: 17
        });
    });

    test('Sad path: nombre / edad invalidos', () => {
        expect(() => crearEstudiante('', 20)).toThrow('nombre invalido');
        expect(() => crearEstudiante('Ana', -1)).toThrow('edad invalida');
    });
});