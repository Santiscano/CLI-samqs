import { execSync } from 'child_process';
import { chdir } from 'node:process';

export const installingPackageExpress = ( pathProyect ) => {
  try {
    chdir(pathProyect); // cambiamos de directorio

    // ejecutamos comando de install principal
    const install = `npm install --save cors date-fns dotenv exceljs express fs-extra jsonwebtoken moment-timezone mongoose morgan multer mysql2 nodemailer socket.io swagger-autogen swagger-jsdoc swagger-ui-express`;
    const stdoutInstall = execSync(install);

    // ejecutamos comando de install para dependencias de desarrollo
    const installDev = `npm install -D @types/cors @types/dotenv @types/express @types/fs-extra @types/jsonwebtoken @types/mongoose @types/morgan @types/multer @types/nodemailer @types/swagger-jsdoc @types/swagger-ui-express ts-node-dev typescript`;
    const stdoutInstallDev = execSync(installDev);

    return true
  } catch (error) {
    console.error(`Error al ejecutar los comandos de instalación: ${error.message}`);
    return false;
  }
};
