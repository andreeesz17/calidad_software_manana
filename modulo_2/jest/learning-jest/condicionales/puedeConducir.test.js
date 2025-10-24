const { puedeConducir } = require('./puedeConducir');

describe('puedeConducir', () => {
    test('Happy path: edad 20 puede conducir', () => {
        const respuesta = puedeConducir(20);
        expect(respuesta).toBe('Si');
    });
    test('Happy path: edad 16 NO puede conducir', () => {
        const respuesta = puedeConducir(16);
        expect(respuesta).toBe('No');
    });
    test('Sad path: edad negativa', () => {
        expect(() => puedeConducir(-1)).toThrow('Edad inválida');
        expect(() => puedeConducir('19')).toThrow('Edad inválida');
    });
});