import fs from 'fs';
import path from 'path';
import { createProyectExpressReactTsClass } from "../benchmarks/createExpressReact.js";
import { installingPackage } from '../helpers/packageInstall.js';
import "colors";


export const expressReactProyect = async (tool, paradigm, nameProyect, descriptionProyect) => {
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
      createProyectExpressReactTsClass( fileProyectPath, nameProyectFormat, descriptionProyect );
      // installingPackage(fileProyectPath); // backend
      // installingPackage(path.join(fileProyectPath, '/client')); // frontend
      // console.log('✅ Proyecto Creado con exito y listo para correr ✅'.bold);
    break;
    case 'typescript-func':
      fs.rmSync( fileProyectPath, { recursive: true } );
    break;
}
};
