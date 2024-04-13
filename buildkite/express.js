import fs from 'fs';
import path from 'path';

import chalkAnimation from 'chalk-animation';
import "colors";

import { createProyectExpressTsClass, expressResourseSqlTsClass, expressResourseTsClass } from '../benchmarks/createExpress.js';
import { installingPackageExpress } from '../helpers/packageInstallExpress.js';

export const expressProyect = async ( tool, paradigm, nameProyect, descriptionProyect ) => {
    console.log("Inicializando creacion del proyecto, ...Creando carpetas y archivos, ...instalando dependencias del proyecto, ...instalando dependencias de desarrollo");

    // 1- preconfiguraciones
    const currentDirectory = process.cwd(); // directorio desde donde se llama el CLI
    const nameProyectFormat = nameProyect.replace(/\s+/g, '-').toLowerCase(); // remplazamos espacios por -
    const fileProyectPath = path.join(currentDirectory,`/${nameProyectFormat}`)// ruta de la carpeta del proyecto

    // 2- crear carpeta con nombre proyecto
    if (!fs.existsSync(fileProyectPath)) {
      fs.mkdirSync(fileProyectPath);
    } else {
      setTimeout(() => {
        // rainbow.stop(`💀💀💀 Ya existe una carpeta con este nombre de proyecto`);
      }, 1500);
      return 
    }

    // 3- crear archivos dentro de la carpeta proyecto
    const toolParadigm = tool + "-" + paradigm;
    switch (toolParadigm) {
        case 'javascript-class':
          fs.rmSync( fileProyectPath, { recursive: true } ); 
        break;
        case 'javascript-func':
          fs.rmSync( fileProyectPath, { recursive: true } ); 
        break;

        case 'typescript-class':
          createProyectExpressTsClass( fileProyectPath, nameProyectFormat, descriptionProyect );
          installingPackageExpress(fileProyectPath);
          console.log('✅ Proyecto Creado con exito y listo para correr ✅'.bold);
        break;
        case 'typescript-func':
          fs.rmSync( fileProyectPath, { recursive: true } ); 
        break;
    }
};

export const expressResourse = async ( tool, paradigm, nameProyect ) => {
  const rainbow = chalkAnimation.radar('creando recurso \n');

  // 1- preconfiguraciones
  const currentDirectory = process.cwd(); // directorio desde donde se llama el CLI
  const nameProyectFormat = nameProyect.replace(/\s+/g, '-').toLowerCase(); // remplazamos espacios por -
  const fileProyectPath = path.join(currentDirectory,`/${nameProyectFormat}`)// ruta de la carpeta del proyecto

  const toolParadigm = tool + "-" + paradigm;
  switch (toolParadigm) {
    case 'typescript-class':
      expressResourseTsClass( currentDirectory, nameProyectFormat );
      rainbow.stop("✅ Proyecto Creado con exito y listo para correr ✅".bold)
    break;
  
    default:
    break;
  }
};

export const expressResourseSql = async ( tool, paradigm, nameProyect ) => {
  const rainbow = chalkAnimation.radar('creando recurso \n');


    // 1- preconfiguraciones
    const currentDirectory = process.cwd(); // directorio desde donde se llama el CLI
    const nameProyectFormat = nameProyect.replace(/\s+/g, '-').toLowerCase(); // remplazamos espacios por -
    const fileProyectPath = path.join(currentDirectory,`/${nameProyectFormat}`)// ruta de la carpeta del proyecto
  
    const toolParadigm = tool + "-" + paradigm;
    switch (toolParadigm) {
      case 'typescript-class':
        await expressResourseSqlTsClass( fileProyectPath, nameProyectFormat );
        rainbow.stop("✅ Proyecto Creado con exito y listo para correr ✅".bold);
      break;
    
      default:
      break;
    }
};
