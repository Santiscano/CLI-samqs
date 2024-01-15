import { execSync } from 'child_process';

export const installingPackage = (nameProyectFormat) => {
  const install = `npm install --save cors date-fns dotenv exceljs express fs-extra jsonwebtoken moment-timezone mongoose morgan multer mysql2 nodemailer socket.io swagger-autogen swagger-jsdoc swagger-ui-express`;
  const installDev = `npm install -D @types/cors @types/dotenv @types/express @types/fs-extra @types/jsonwebtoken @types/mongoose @types/morgan @types/multer @types/nodemailer @types/swagger-jsdoc @types/swagger-ui-express ts-node-dev typescript`;

  execSync(`cd ${nameProyectFormat}`, (error, stdout, stderr) => {
    if (error) {
      console.error(`Error al ejecutar npm install: ${error.message}`);
      return;
    }
    
    if (stderr) {
      console.error(`Error en la salida estándar: ${stderr}`);
      return;
    }

    console.log(`Resultado de cd ${nameProyectFormat}: \n ${stdout}` )
  })

  execSync(install, (error, stdout, stderr) => {
    if (error) {
      console.error(`Error al ejecutar npm install: ${error.message}`);
      return;
    }
    
    if (stderr) {
      console.error(`Error en la salida estándar: ${stderr}`);
      return;
    }

    console.log(`Resultado de install --save: \n ${stdout}` )
  })

  execSync(installDev, (error, stdout, stderr) => {
    if (error) {
      console.error(`Error al ejecutar npm install: ${error.message}`);
      return;
    }
    
    if (stderr) {
      console.error(`Error en la salida estándar: ${stderr}`);
      return;
    }

    console.log(`Resultado de install -D: \n ${stdout}` )
  })

  return true;
}
