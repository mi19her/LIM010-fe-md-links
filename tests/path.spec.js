import { typePath, verificRoute, verificFileDir } from '../src/route.js';

describe('typePath', () => {
    it('Deberia leer una ruta absoluta', ()=> {
    expect(typePath('D:/archivoMkdown/LIM010-fe-md-links/src')).toBe('D:/archivoMkdown/LIM010-fe-md-links/src');
    });
});
describe('archivoImport', () =>{
    it('deberia leer el archivo dentro de la ruta', ()=>{
        expect(verificRoute('D:/archivoMkdown/LIM010-fe-md-links/src')).toBe(false);
    });
})

describe('archivoImport', () =>{
    it('deberia mostrar los archivos que estan dentro del directorio', ()=>{
        expect(verificFileDir('D:/archivoMkdown/LIM010-fe-md-links/src')).toStrictEqual(["D:/archivoMkdown/LIM010-fe-md-links/src/links.js", "D:/archivoMkdown/LIM010-fe-md-links/src/mdlinks.js", "D:/archivoMkdown/LIM010-fe-md-links/src/route.js"]);
    });
})