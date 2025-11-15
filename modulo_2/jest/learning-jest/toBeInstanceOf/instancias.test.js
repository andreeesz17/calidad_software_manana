const { Persona, crearPersona, esFecha } = require('./instancias');

describe('InstanceOf', () => {
    test('Happy: crearPersona retorna instancia de Persona', () => {
        const p = crearPersona('Ana', 22);
        expect(p).toBeInstanceOf(Persona);
        expect(p).not.toBeInstanceOf(Date);
    });

    test('Happy: esFecha detecta instancias Date válidas', () => {
        expect(esFecha(new Date())).toBe(true);
        expect(esFecha(new Date('invalid'))).toBe(false); // Date inválida
    });

    test('Sad: crearPersona con datos inválidos', () => {
        expect(() => crearPersona('', 10)).toThrow('nombre inválido');
        expect(() => crearPersona('Luis', -1)).toThrow('edad inválida');
        expect(esFecha('2025-01-01')).toBe(false);
    });
});