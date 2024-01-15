import fs from 'fs';
import path from 'path';
import { expressTsClass } from '../utilities/expressTs.js';
import { createSpinner } from 'nanospinner';
import { installingPackage } from './packageInstall.js';

export const express = async ( tool, paradigm, nameProyect, descriptionProyect ) => {
    // console.clear();
    const spinner = createSpinner('Inicializando creacion del proyecto').start();


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
          const isSuccess = expressTsClass( fileProyectPath, nameProyectFormat, descriptionProyect );
          const installing = installingPackage(nameProyectFormat);
          (isSuccess && installing) && success(nameProyectFormat);
          spinner.success({text: "✅ Proyecto Creado con exito ✅"})
        break;
        case 'typescript-func':
          spinner.error({ text: `😓 typescript-func aun esta en desarrollo`.red.bold })
          // fs.rmdirSync( fileProyectPath, { recursive: true } ); // recursive true hace que elimine la carpeta aun si tiene archivos dentro
          fs.rmSync( fileProyectPath, { recursive: true } ); //! esta en tes para ver si hace lo mismo
        break;
    }
};

const success = (nameProyectFormat) => {
  console.clear();
  console.log('============================================================================================================================='.green);
  console.log(`cd ${nameProyectFormat}`.blue);
  console.log('npm install --save cors date-fns dotenv exceljs express fs-extra jsonwebtoken moment-timezone mongoose morgan multer mysql2 nodemailer socket.io swagger-autogen swagger-jsdoc swagger-ui-express'.blue);
  console.log('npm install -D @types/cors @types/dotenv @types/express @types/fs-extra @types/jsonwebtoken @types/mongoose @types/morgan @types/multer @types/nodemailer @types/swagger-jsdoc @types/swagger-ui-express ts-node-dev typescript'.blue);
  console.log('============================================================================================================================='.green);
};
