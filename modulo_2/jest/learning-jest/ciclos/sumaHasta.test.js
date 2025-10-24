const { sumaHasta } = require('./sumaHasta');
describe('sumaHasta', () => {
    test('Happy path: sumaHasta 5 es 15', () => {
        expect(sumaHasta(5)).toBe(15);
    });
    test('Happy path: sumaHasta 1 es 1', () => {
        expect(sumaHasta(1)).toBe(1);
    });
    test('Sad path: numero invalido', () => {
        expect(() => sumaHasta(0)).toThrow('numero invalido');
        expect(() => sumaHasta('10')).toThrow('numero invalido');
        expect(() => sumaHasta(2.5)).toThrow('numero invalido');
    });
});