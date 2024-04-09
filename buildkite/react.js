import fs from 'fs';
import path from 'path';
import "colors";
import { createProyectReactTsClass } from '../benchmarks/createReact.js';

export const reactProyect = async (tool, paradigm, nameProyect, descriptionProyect) => {
  console.log("Inicializando creacion del proyecto, ...Creando carpetas y archivos, ...instalando dependencias del proyecto, ...instalando dependencias de desarrollo");

  // 1- preconfiguraciones
  const currentDirectory = process.cwd(); // directorio desde donde se llama el CLI
  const nameProyectFormat = nameProyect.replace(/\s+/g, '-').toLowerCase(); // remplazamos espacios por -
  const fileProyectPath = path.join(currentDirectory,`/${nameProyectFormat}`)// ruta de la carpeta del proyecto

  // 2- crear carpeta con nombre proyecto
  if (!fs.existsSync(fileProyectPath)) {
    fs.mkdirSync(fileProyectPath);
  }

  const clientPath =  path.join(fileProyectPath, 'client');
  if (!fs.existsSync(clientPath)) {
    fs.mkdirSync(clientPath)
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
      createProyectReactTsClass( fileProyectPath, nameProyectFormat, descriptionProyect );
    break;
    case 'typescript-func':
      fs.rmSync( fileProyectPath, { recursive: true } );
    break;
  }
};
