import { execSync } from 'child_process';
import { chdir, cwd } from 'node:process';

export const installingPackage = ( pathProyect, spinner ) => {
  try {
    chdir(pathProyect); // cambiamos de directorio

    // ejecutamos comando de install principal
    spinner.update({text: "instalando dependencias"})
    const install = `npm install --save cors date-fns dotenv exceljs express fs-extra jsonwebtoken moment-timezone mongoose morgan multer mysql2 nodemailer socket.io swagger-autogen swagger-jsdoc swagger-ui-express`;
    const stdoutInstall = execSync(install);
    console.log(`Resultado de ${install}:\n${stdoutInstall}`);

    // ejecutamos comando de install para dependencias de desarrollo
    spinner.update({text: "instalando dependencias de desarrollo"})
    const installDev = `npm install -D @types/cors @types/dotenv @types/express @types/fs-extra @types/jsonwebtoken @types/mongoose @types/morgan @types/multer @types/nodemailer @types/swagger-jsdoc @types/swagger-ui-express ts-node-dev typescript`;
    const stdoutInstallDev = execSync(installDev);
    console.log(`Resultado de ${installDev}:\n${stdoutInstallDev}`);

    // Regresar al directorio original (opcional)
    // process.chdir()
    return true
  } catch (error) {
    console.error(`Error al ejecutar los comandos de instalación: ${error.message}`);
    return false;
  }











  // execSync(`cd ${nameProyectFormat}`, (error, stdout, stderr) => {
  //   if (error) {
  //     console.error(`Error al ejecutar npm install: ${error.message}`);
  //     return;
  //   }
    
  //   if (stderr) {
  //     console.error(`Error en la salida estándar: ${stderr}`);
  //     return;
  //   }

  //   console.log(`Resultado de cd ${nameProyectFormat}: \n ${stdout}` )
  // })

  // execSync(install, (error, stdout, stderr) => {
  //   if (error) {
  //     console.error(`Error al ejecutar npm install: ${error.message}`);
  //     return;
  //   }
    
  //   if (stderr) {
  //     console.error(`Error en la salida estándar: ${stderr}`);
  //     return;
  //   }

  //   console.log(`Resultado de install --save: \n ${stdout}` )
  // })

  // execSync(installDev, (error, stdout, stderr) => {
  //   if (error) {
  //     console.error(`Error al ejecutar npm install: ${error.message}`);
  //     return;
  //   }
    
  //   if (stderr) {
  //     console.error(`Error en la salida estándar: ${stderr}`);
  //     return;
  //   }

  //   console.log(`Resultado de install -D: \n ${stdout}` )
  // })

  return true;
}
