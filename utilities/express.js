import fs from 'fs';
import path from 'path';

import "colors";

import { expressTsClass, expressTsClassResourse } from './expressTs.js';
import { createSpinner } from 'nanospinner';
import { installingPackage } from '../helpers/packageInstall.js';

export const express = async ( tool, paradigm, nameProyect, descriptionProyect ) => {
    // console.clear();
    const spinner = createSpinner('Inicializando creacion del proyecto, ...Creando carpetas y archivos, ...instalando dependencias del proyecto, ...instalando dependencias de desarrollo').start();

    // 1- preconfiguraciones
    const currentDirectory = process.cwd(); // directorio desde donde se llama el CLI
    const nameProyectFormat = nameProyect.replace(/\s+/g, '-').toLowerCase(); // remplazamos espacios por -
    const fileProyectPath = path.join(currentDirectory,`/${nameProyectFormat}`)// ruta de la carpeta del proyecto

    // 2- crear carpeta con nombre proyecto
    if (!fs.existsSync(fileProyectPath)) {
      fs.mkdirSync(fileProyectPath);
    } else {
      setTimeout(() => {
        spinner.error({ text: `💀💀💀 Ya existe una carpeta con este nombre de proyecto`})
      }, 1500);
      return 
    }

    // 3- crear archivos dentro de la carpeta proyecto
    const toolParadigm = tool + "-" + paradigm;
    switch (toolParadigm) {
        case 'javascript-class':
          spinner.error({ text: `😓 javascript-class aun esta en desarrollo`.red.bold })
          // fs.rmdirSync( fileProyectPath, { recursive: true } ); // recursive true hace que elimine la carpeta aun si tiene archivos dentro
          fs.rmSync( fileProyectPath, { recursive: true } ); //! esta en tes para ver si hace lo mismo
        break;
        case 'javascript-func':
          spinner.error({ text: `😓 javascript-func aun esta en desarrollo`.red.bold })
          // fs.rmdirSync( fileProyectPath, { recursive: true } ); // recursive true hace que elimine la carpeta aun si tiene archivos dentro
          fs.rmSync( fileProyectPath, { recursive: true } ); //! esta en tes para ver si hace lo mismo
        break;

        case 'typescript-class':
          expressTsClass( fileProyectPath, nameProyectFormat, descriptionProyect );

          installingPackage(fileProyectPath, spinner);
          
          spinner.success({text: "✅ Proyecto Creado con exito y listo para correr ✅"}.bold)
        break;
        case 'typescript-func':
          spinner.error({ text: `😓 typescript-func aun esta en desarrollo`.red.bold })
          // fs.rmdirSync( fileProyectPath, { recursive: true } ); // recursive true hace que elimine la carpeta aun si tiene archivos dentro
          fs.rmSync( fileProyectPath, { recursive: true } ); //! esta en tes para ver si hace lo mismo
        break;
    }
};

export const expressResourse = async ( tool, paradigm, nameProyect ) => {
  const spinner = createSpinner('creando recurso').start();

  // 1- preconfiguraciones
  const currentDirectory = process.cwd(); // directorio desde donde se llama el CLI
  const nameProyectFormat = nameProyect.replace(/\s+/g, '-').toLowerCase(); // remplazamos espacios por -
  const fileProyectPath = path.join(currentDirectory,`/${nameProyectFormat}`)// ruta de la carpeta del proyecto

  const toolParadigm = tool + "-" + paradigm;
  switch (toolParadigm) {
    case 'typescript-class':
      expressTsClassResourse( fileProyectPath, nameProyectFormat );
      spinner.success({text: "✅ Proyecto Creado con exito y listo para correr ✅"}.bold)
    break;
  
    default:
      break;
  }
};
