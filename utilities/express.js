import fs from 'fs';
import path from 'path';

import chalkAnimation from 'chalk-animation';
import "colors";
import figlet from 'figlet';
import { createSpinner } from 'nanospinner';

import { expressProyectTsClass, expressResourseSqlTsClass, expressResourseTsClass } from './expressTs.js';
import { installingPackage } from '../helpers/packageInstall.js';

export const expressProyect = async ( tool, paradigm, nameProyect, descriptionProyect ) => {
    const rainbow = chalkAnimation.rainbow("Inicializando creacion del proyecto, ...Creando carpetas y archivos, ...instalando dependencias del proyecto, ...instalando dependencias de desarrollo");

    // 1- preconfiguraciones
    const currentDirectory = process.cwd(); // directorio desde donde se llama el CLI
    const nameProyectFormat = nameProyect.replace(/\s+/g, '-').toLowerCase(); // remplazamos espacios por -
    const fileProyectPath = path.join(currentDirectory,`/${nameProyectFormat}`)// ruta de la carpeta del proyecto

    // 2- crear carpeta con nombre proyecto
    if (!fs.existsSync(fileProyectPath)) {
      fs.mkdirSync(fileProyectPath);
    } else {
      setTimeout(() => {
        rainbow.stop(`💀💀💀 Ya existe una carpeta con este nombre de proyecto`);
      }, 1500);
      return 
    }

    // 3- crear archivos dentro de la carpeta proyecto
    const toolParadigm = tool + "-" + paradigm;
    switch (toolParadigm) {
        case 'javascript-class':
          rainbow.stop(`😓 javascript-class aun esta en desarrollo`.red.bold);
          // fs.rmdirSync( fileProyectPath, { recursive: true } ); // recursive true hace que elimine la carpeta aun si tiene archivos dentro
          fs.rmSync( fileProyectPath, { recursive: true } ); //! esta en tes para ver si hace lo mismo
        break;
        case 'javascript-func':
          rainbow.stop(`😓 javascript-func aun esta en desarrollo`.red.bold);
          // fs.rmdirSync( fileProyectPath, { recursive: true } ); // recursive true hace que elimine la carpeta aun si tiene archivos dentro
          fs.rmSync( fileProyectPath, { recursive: true } ); //! esta en tes para ver si hace lo mismo
        break;

        case 'typescript-class':
          expressProyectTsClass( fileProyectPath, nameProyectFormat, descriptionProyect );

          installingPackage(fileProyectPath, spinner);
          
          rainbow.stop("✅ Proyecto Creado con exito y listo para correr ✅".bold);
        break;
        case 'typescript-func':
          rainbow.stop(`😓 typescript-func aun esta en desarrollo`.red.bold);
          // fs.rmdirSync( fileProyectPath, { recursive: true } ); // recursive true hace que elimine la carpeta aun si tiene archivos dentro
          fs.rmSync( fileProyectPath, { recursive: true } ); //! esta en tes para ver si hace lo mismo
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
