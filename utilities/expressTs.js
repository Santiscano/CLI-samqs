import fs from 'fs';
import path from 'path';
import { createEditorConfig, createExampleEnv, createGitIgnore, createPackage, createTsConfig } from '../docs/index.js';

export const expressTsClass = ( fileProyectPath, nameProyect ) => {
    // ----------------------------ARCHIVOS PRINCIPALES-------------------------------------//
    // crear carpeta src
    const src = path.join(fileProyectPath, '/src');
    if(!fs.existsSync(src)) fs.mkdirSync(src);

    // crear archivos configuracion
    const files = [ 
        { route: '.editorconfig', data: createEditorConfig() },
        { route: '.example.env',  data: createExampleEnv() },
        { route: '.gitignore',    data: createGitIgnore() },
        { route: 'package.json',  data: createPackage(nameProyect) },
        { route: 'tsconfig.json', data: createTsConfig() }
    ];
    
    files.forEach(( { route, data }) => {
        let fullRoute = path.join(fileProyectPath, route);
        fs.writeFileSync( fullRoute, data );
    })

    // escribir archivo .editorconfig
    // const editConfigPath = path.join(fileProyectPath, '.editorconfig');
    // const editorConfigData = createEditorConfig();
    // fs.writeFileSync( editConfigPath, editorConfigData );

    // escribir .example.env
    // const exampleEnvPath = path.join(fileProyectPath, '.example.env');
    // const exampleEnvData = createExampleEnv();
    // fs.writeFileSync( exampleEnvPath, exampleEnvData );

    // escribir .gitignore
    // const gitignorePath = path.join(fileProyectPath, '.gitignore');
    // const gitignoreData = createGitIgnore();
    // fs.writeFileSync( gitignorePath, gitignoreData );
    
    // escribir package.json
    // const packageJsonPath = path.join(fileProyectPath, 'package.json');
    // const packageJsonData = createPackage(nameProyect);
    // fs.writeFileSync( packageJsonPath, packageJsonData );
    
    // escribir tsconfig.json
    // const tsconfigJsonPath = path.join(fileProyectPath, 'tsconfig.json');
    // const tsconfigJsonData = createTsConfig();
    // fs.writeFileSync( tsconfigJsonPath, tsconfigJsonData );

    // --------------------------ARCHIVOS DENTRO DE SRC--------------------------------//
    // crear carpetas
    const folders = ['/commands', '/config', '/helpers', '/interfaces', '/routes', '/services'];
    folders.forEach(folder => {
        const folderPath = path.join( src, folder );
        console.log('folderPath: ', folderPath);
        fs.mkdirSync(folderPath);
    });

    // archivo index
    const indexPath = path.join(src, 'index.ts');
    const indexData = 'hola mundo';
    fs.writeFileSync(indexPath, indexData);

    // TODO crear esto en un bucle foreach
    // commands
    // config
    // helpers
    // interfaces
    // routes
    // services
    const servicesPath = path.join(src, '/services/index.ts');
    const servicesData = 'servidor corriendo';
    fs.writeFileSync( servicesPath, servicesData );
    // utilities
};

export const expressTsFn = () => {};