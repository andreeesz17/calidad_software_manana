const { enMayusculas } = require('./enMayusculas');

describe('En Mayusculas', () => {
    test('Happy path: JEST', () => {
        const response = enMayusculas('jest');
        expect(response).toBe('JEST');
    });
    test('Sad path: ERROR',
        () => {
            expect(() => enMayusculas(null)).toThrow('texto invalido');
            expect(() => enMayusculas(123)).toThrow('texto invalido');
        });
});