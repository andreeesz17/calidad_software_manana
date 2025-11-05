const { deepMerge, normalizarAlumno } = require('./deepMerge');

describe('Igualdad profunda', () => {
    test('Happy path: deepMerge'
        + 'combina objetos anidados por valor', () => {
        const a= {
            user: 
            {nombre: 'Ana', rol: 'estudiante'},
            activo: true
        }
        const b= {
            user: 
            {rol: 'tutor'}, 
            activo: true,
            extra: 1
        }
        const response = deepMerge(a,b)
        expect(response).toEqual(
            {
                user: 
                {nombre: 'Ana', rol: 'tutor'},
                activo: true,
                extra:1
            }   
        );
    });

    test('Happy path: normalizarAlumno '
        + 'retorna estructura con promedio', () => {
        const alumno= {nombre: 'Ana', notas: [8,9,7]}
        const response = normalizarAlumno(alumno);
        expect(response).toEqual(
            {nombre: 'Ana', notas: [8,9,7], promedio: 8}
        );
    });
    test('Sad path: deep merge con parámetros inválidos',
        () => {
            expect(() => deepMerge(null,{}))
                .toThrow(`b debe ser objeto`);
            expect(() => deepMerge({},[]))
                .toThrow(`b debe ser objeto`);
    });
});