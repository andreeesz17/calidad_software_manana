const { calcularTotalCafeteria } = require('./calcularTotalCafeteria');

describe('Total Cafetería', () => {

    test('Happy path: calcula subtotal, IVA y total', () => {
        const items = [
            { precioUnitario: 2, cantidad: 2 }, // 4
            { precioUnitario: 1, cantidad: 3 }  // 3
        ];

        const r = calcularTotalCafeteria(items, 10);

        expect(r.subtotal).toBe(7);
        expect(r.iva).toBeCloseTo(0.7);
        expect(r.total).toBeCloseTo(7.7);
    });

    test('Sad path: items no es un arreglo', () => {
        expect(() => calcularTotalCafeteria('hola', 10))
            .toThrow('items inválidos');
    });

    test('Sad path: IVA inválido', () => {
        expect(() => calcularTotalCafeteria([], -5))
            .toThrow('iva inválido');
    });
});
