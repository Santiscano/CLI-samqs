import fs from 'fs';
import path from 'path';
import { expressTsClass } from '../utilities/expressTs.js';

export const express = async (tool, paradigm, nameProyect) => {
    console.clear();

    // 1- preconfiguraciones
    const currentDirectory = process.cwd(); // directorio desde donde se llama el CLI
    const nameProyectFormat = nameProyect.replace(/\s+/g, '-').toLowerCase(); // remplazamos espacios por -
    const fileProyectPath = path.join(currentDirectory,`/${nameProyectFormat}`)// ruta de la carpeta del proyecto

    // 2- crear carpeta con nombre proyecto
    if (!fs.existsSync(fileProyectPath)) {
      fs.mkdirSync(fileProyectPath);
    } else {
      console.log("=======================================================".green);
      console.log( 'ya existe una carpeta con este nombre de proyecto'.red.bold );
      console.log("=======================================================".green);
      return 
    }

    // 3- crear archivos dentro de la carpeta proyecto
    const toolParadigm = tool + "-" + paradigm;
    switch (toolParadigm) {
        case 'javascript-class':
          console.log( 'javascript-class aun esta en desarrollo'.red.bold );
          fs.rmdirSync( fileProyectPath, { recursive: true } ); // recursive true hace que elimine la carpeta aun si tiene archivos dentro
        break;
        case 'javascript-func':
          console.log( 'javascript-func aun esta en desarrollo'.red.bold );
          fs.rmdirSync( fileProyectPath, { recursive: true } ); // recursive true hace que elimine la carpeta aun si tiene archivos dentro
        break;

        case 'typescript-class':
          const isSuccess = expressTsClass(fileProyectPath, nameProyectFormat);
          isSuccess && success(nameProyectFormat);
        break;
        case 'typescript-func':
          console.log( 'typescript-func aun esta en desarrollo'.red.bold );
          fs.rmdirSync( fileProyectPath, { recursive: true } ); // recursive true hace que elimine la carpeta aun si tiene archivos dentro
        break;
    }
};

const success = (nameProyectFormat) => {
  console.log('============================================================================================================================='.green);
  console.log('============================================================================================================================='.green);
  console.log('el proyecto se ha creado con exito, digita los siguientes comandos'.white.bold);
  console.log(`cd ${nameProyectFormat}`.blue);
  console.log('npm install --save cors dotenv express mongoose morgan multer mysql2 socket.io'.blue);
  console.log('npm install -D @types/cors @types/dotenv @types/express @types/mongoose @types/morgan @types/multer ts-node-dev typescript'.blue);
  console.log('============================================================================================================================='.green);
  console.log('============================================================================================================================='.green);
};
