const { estadoNota } = require('./estadoNota');

describe('estadoNota', ()=>{
    test('Happy path: 8 Aprobado', () => {
        expect(estadoNota(8)).toBe('Aprobado'); 
    });
    test('Happy path: 5 Supletorio y 2 Reprobado', () => {
        expect(estadoNota(5)).toBe('Supletorio'); 
        expect(estadoNota(2)).toBe('Reprobado'); 
    });
    
    test('Sad path: nota inválida', () => {
        expect(()=>estadoNota(-1)).toThrow('nota inválida'); 
        expect(()=>estadoNota('10')).toThrow('nota inválida'); 
        expect(()=>estadoNota(50)).toThrow('nota inválida'); 
    }); 
});