export const createLogs = () => {
  const data = `import { Request, Response, NextFunction } from 'express';
import * as fs from 'fs-extra';
import path from 'path';
import moment from 'moment-timezone';

type Duration =  
  | "1m" | "2m" | "3m" | "4m" | "5m" | "6m" | "7m" 
  | "8m" | "9m" | "10m" | "11m" | "18m" | "36m" 
  | "1y" | "2y" | "3y" | "5y" | "10y";

const logPath = path.join(__dirname, '../../logs'); 

let infoLog = "";

class Logs {
  
  static customLogger( req: Request, res: Response, next: NextFunction, duration: Duration = "1y" ) {
    const {method, url} = req;
    const startTime = Date.now();
    
    // HORA LOCAL COLOMBIA
    const date = moment.tz(new Date(), "America/Bogota").format();
    const newDate = date.replace("-05:00", "").replace("T", " ");
    // NOMBRE DEL ARCHIVO
    const fileName = \`/\${newDate.slice(0,7)}.log\`;
    const filePath = logPath + fileName;

    // ELIMINAR REGISTROS 2 MESES ATRAS
    const validateDuration = this.calculateDuration(duration);
    const validateMonth = new Date(new Date().setMonth((new Date()).getMonth() - validateDuration));
    const monthsAgo = \`/\${validateMonth.getFullYear()}-\${(validateMonth.getMonth() + 1) < 10 ? '0' + (validateMonth.getMonth() + 1) : (validateMonth.getMonth() + 1)}.log\`;
    if( fs.existsSync(logPath + monthsAgo) ){
      fs.unlinkSync(path.join(logPath + monthsAgo));
    };

    res.on('finish', () => {
      const endTime = Date.now() - startTime;
      
      if (res.statusCode.toString().startsWith('5')) {
        infoLog = \`\${newDate} [ERROR][\${method}] \${url} - \${res.statusCode} // \${endTime} ms\\n\`
      } else {
        infoLog = \`\${newDate} [SUCCESS][\${method}] \${url} - \${res.statusCode} // \${endTime} ms\\n\`
      };
      fs.appendFile(filePath, infoLog, async (err) => {
        if (err) {
          await fs.ensureDir(logPath);                            // CREA CARPETA
          fs.writeFile(logPath + fileName, infoLog);              // CREA ARCHIVO
          return;
        };
      });
  });

  next();
  }

  static errorLogger(error: unknown) {
    // HORA LOCAL COLOMBIA
    const date = moment.tz(new Date(), "America/Bogota").format();
    const newDate = date.replace("-05:00", "").replace("T", " ");
    // NOMBRE DEL ARCHIVO
    const fileName = \`/\${newDate.slice(0,7)}.log\`;
    const filePath = logPath + fileName;

    let errorLog = \`    \${error}\\n\`

    fs.appendFile(filePath, errorLog, async (err) => {
      if (err) {
        await fs.ensureDir(logPath);                                // CREA CARPETA
        fs.writeFile(logPath + fileName, errorLog);                 // CREA ARCHIVO
        return;
      };
    });
  }

  private static calculateDuration(duration: string): number {
    const numericValue = parseInt(duration);
    if (isNaN(numericValue)) {
      return 12; // Valor predeterminado si no se proporciona un número válido
    }

    const unit = duration.slice(-1).toLowerCase();
    switch (unit) {
      case 'm':
        return numericValue;
      case 'y':
        return numericValue * 12;
      default:
        return 12; // Valor predeterminado si no se proporciona un sufijo de unidad válido
    }
  }

};

export default Logs;
`;

  return data;
};
