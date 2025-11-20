const { calcularPropina } = require('./calcularPropina');

describe('Cálculo de Propina', () => {

    test('Happy path: cálculo correcto', () => {
        const r = calcularPropina(100, 10);

        expect(r.propina).toBe(10);
        expect(r.totalPagar).toBe(110);
    });

    test('Sad path: cuenta inválida', () => {
        expect(() => calcularPropina(0, 10))
            .toThrow('cuenta inválida');
    });

    test('Sad path: porcentaje inválido', () => {
        expect(() => calcularPropina(100, 200))
            .toThrow('porcentaje inválido');
    });

});
