const miPrograma = require('./parImpar')

describe('comprobaciones iniciales',()=>{
    test('jest funciona',()=>{
        expect(true).toBe(true);
    })
    test('programa importado correctamente',()=>{
        expect(miPrograma.prueba()).toBe('works!');
    })
    
})

describe('programa Par o Impar ',()=>{
    test('función existe',()=>{
        expect(miPrograma.parImpar(71982374)).toBeDefined()
    })
    test('halla los pares',()=>{
        expect(miPrograma.parImpar(2)).toBe('par')
    })
    test('halla los impares',()=>{
        expect(miPrograma.parImpar(3)).toBe('impar')
    })
})