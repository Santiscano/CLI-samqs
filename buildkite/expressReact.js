import fs from 'fs';
import path from 'path';
import { createSpinner } from 'nanospinner';

import { createProyectExpressReactTsClass } from "../benchmarks/createExpressReact.js";
import { installingPackageExpress } from '../helpers/packageInstallExpress.js';
import "colors";
import { npmInstallPackageJson } from '../helpers/packageInstall.js';

export const expressReactProyect = async (tool, paradigm, nameProyect, descriptionProyect) => {
  const spinner = createSpinner('🚀 Creando Proyecto...').start();
  spinner.update({ text: "🚀 Creando Proyecto...".green });
  // 1- preconfiguraciones
  const currentDirectory = process.cwd(); // directorio desde donde se llama el CLI
  const nameProyectFormat = nameProyect.replace(/\s+/g, '-').toLowerCase(); // remplazamos espacios por -
  const fileProyectPath = path.join(currentDirectory,`/${nameProyectFormat}`)// ruta de la carpeta del proyecto
  const pathFrontend = path.resolve(currentDirectory, nameProyectFormat, 'client');

  // 2- crear carpeta con nombre proyecto
  if (!fs.existsSync(fileProyectPath)) {
    fs.mkdirSync(fileProyectPath);
  } else {
    spinner.error({ text: " Ya existe un proyecto con este mismo nombre 😓".red });
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
      spinner.update({ text: "instalando dependencias de express...\n".cyan });
      createProyectExpressReactTsClass( fileProyectPath, nameProyectFormat, descriptionProyect );
      
      installingPackageExpress(fileProyectPath); // backend
      
      spinner.update({ text: " Instalando dependencias de react...\n".cyan });
      npmInstallPackageJson( pathFrontend, spinner ); // frontend

    break;
    case 'typescript-func':
      fs.rmSync( fileProyectPath, { recursive: true } );
    break;
}
};
