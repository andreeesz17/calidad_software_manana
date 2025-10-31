const { buscarPalabra } = require('./buscarPalabra');

describe('Buscar Palabras', () => {
    test('Happy path: Buscar Palabra', () => {
        const response = buscarPalabra(
            'Hola Mundo Jest', 'Jest'
        )
        expect(response).toBe(true);
        const response2 = buscarPalabra(
            'Hola Mundo Jest', 'Jesty'
        )
        expect(response2).toBe(false);
    });
    test('Sad path: ERROR',
        () => {
            expect(() => buscarPalabra(null, 'jest')).toThrow('frase invalido');
            expect(() => buscarPalabra('', 344)).toThrow('frase invalido');
        });
});