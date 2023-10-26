import fs from 'fs';
import path from 'path';

export const express = async (tool, nameProyect) => {
    const currentDirectory = process.cwd(); // directorio desde donde se llama el CLI
    const nameProyectFormat = nameProyect.replace(/\s+/g, '-').toLowerCase(); // remplazamos espacios por -
    const fileProyectPath = path.join(currentDirectory,`/${nameProyectFormat}`)// ruta de la carpeta del proyecto

    // 2- crear carpeta con nombre proyecto
    if (!fs.existsSync(fileProyectPath)) {
        fs.mkdirSync(fileProyectPath);
    }

    // 3- crear archivos dentro de la carpeta proyecto
    // 4- entregar el mensaje al usuario de cd proyecto y npm i
    console.clear();
    console.log('el proyecto se ha creado con exito, digita los siguientes comandos'.green.bold);
    console.log(`cd ${nameProyectFormat}`.blue);
    console.log('npm install'.blue);
};