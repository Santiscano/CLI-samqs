import fs from 'fs';
import path from 'path';
import { expressTsClass } from '../utilities/expressTs.js';

export const express = async (tool, nameProyect) => {
    console.clear();

    const currentDirectory = process.cwd(); // directorio desde donde se llama el CLI
    const nameProyectFormat = nameProyect.replace(/\s+/g, '-').toLowerCase(); // remplazamos espacios por -
    const fileProyectPath = path.join(currentDirectory,`/${nameProyectFormat}`)// ruta de la carpeta del proyecto

    // 2- crear carpeta con nombre proyecto
    if (!fs.existsSync(fileProyectPath)) {
        fs.mkdirSync(fileProyectPath);
    }

    // 3- crear archivos dentro de la carpeta proyecto
    switch (tool) {
        case 'javascript':
            console.log('entro a js')
        break;
        case 'typescript':
            expressTsClass(fileProyectPath, nameProyectFormat);
        break;
    }










    // 4- entregar el mensaje al usuario de cd proyecto y npm i
    // console.log('el proyecto se ha creado con exito, digita los siguientes comandos'.green.bold);
    // console.log(`cd ${nameProyectFormat}`.blue);
    // console.log('npm install --save cors dotenv express mongoose morgan multer mysql2 socket.io'.green);
    // console.log('npm install -D @types/cors @types/dotenv @types/express @types/mongoose @types/morgan @types/multer ts-node-dev typescript'.green);
};