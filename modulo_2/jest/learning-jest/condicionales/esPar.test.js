const {esPar} = require('./esPar');

describe('esPar', () => {
    test('Happy path: 8 es par', () => {
        expect(esPar(8)).toBe(true);
    });

    test('Happy path: 7 NO es par', () => {
        expect(esPar(7)).toBe(false);
    });
    test('Sad path: número no entero', () => {
    expect(() => esPar(3.5)).toThrow('El valor debe ser un número entero');
    expect(() => esPar('10')).toThrow('El valor debe ser un número entero');
    });

});