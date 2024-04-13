import { exec } from 'child_process';
import "colors";
import path from 'path';
import { openVSCode } from './openVS.js';

export const npmInstallPackageJson = ( pathProyect, spinner ) => {
  exec('npm i', { cwd: pathProyect }, ( err, stdout ) => {
    if (err) {
      console.error('error al ejecutar el comando npm i');
      return;
    }

    spinner.success({ text:'✅ Proyecto Creado con exito y listo para correr ✅'.green.bold } );

    const back = path.join(pathProyect, '../');
    openVSCode(back);
  });
};


