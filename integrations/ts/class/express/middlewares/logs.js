export const createLogs = () => {
  const data = `import path from 'path';
  
import { Request, Response, NextFunction } from 'express';
import * as fs from 'fs-extra';
import moment from 'moment-timezone';

type Duration =  
  | "1m" | "2m" | "3m" | "4m" | "5m" | "6m" | "7m" 
  | "8m" | "9m" | "10m" | "11m" | "18m" | "36m" 
  | "1y" | "2y" | "3y" | "5y" | "10y";

// const logPath = path.join(__dirname, '../../logs'); 
// let infoLog = "";

/**
 * Clase Logs
 * 
 * Esta clase proporciona métodos para gestionar y registrar logs personalizados.
 */
class Logs {

  /**
   * Información del log actual.
   */
  private static infoLog:string;

  /**
   * Ruta del directorio de logs.
   */
  private static logPath:string = path.join(__dirname, "../../logs");

  constructor(){}
  
  /**
   * Middleware para registrar logs personalizados basados en la solicitud y respuesta HTTP.
   * 
   * @param req - Objeto de solicitud de Express.
   * @param res - Objeto de respuesta de Express.
   * @param next - Función de middleware de Express.
   * @param duration - Duración para la retención de logs en meses (por defecto, "1y").
   */
  static customLogger( req: Request, res: Response, next: NextFunction, duration: Duration = "1y" ) {
    const {method, url} = req;
    const startTime = Date.now();
    
    // HORA LOCAL COLOMBIA
    const date = moment.tz(new Date(), "America/Bogota").format();
    const newDate = date.replace("-05:00", "").replace("T", " ");

    // NOMBRE DEL ARCHIVO
    const fileName = \`/\${newDate.slice(0,7)}.log\`;
    const filePath = this.logPath + fileName;

    // ELIMINAR REGISTROS 2 MESES ATRAS
    const validateDuration = this.calculateDuration(duration);
    const validateMonth = new Date(new Date().setMonth((new Date()).getMonth() - validateDuration));
    const monthsAgo = \`/\${validateMonth.getFullYear()}-\${(validateMonth.getMonth() + 1) < 10 ? '0' + (validateMonth.getMonth() + 1) : (validateMonth.getMonth() + 1)}.log\`;
    if( fs.existsSync(this.logPath + monthsAgo) ){
      fs.unlinkSync(path.join(this.logPath + monthsAgo));
    };

    res.on('finish', () => {
      const endTime = Date.now() - startTime;
      
      if (res.statusCode.toString().startsWith('5')) {
        // errores del servidor (5xx)
        this.infoLog = \`\${newDate} [ERROR][\${method}] \${url} - \${res.statusCode} // \${endTime} ms\\n\`
      } else if (res.statusCode.toString().startsWith('4')) {
        // errores del cliente (4xx)
        this.infoLog = \`\${newDate} [WARNING][\${method}] \${url} - \${res.statusCode} // \${endTime} ms\\n\`
      } else {
        this.infoLog = \`\${newDate} [SUCCESS][\${method}] \${url} - \${res.statusCode} // \${endTime} ms\\n\`
      };

      fs.appendFile(filePath, this.infoLog, async (err) => {
        if (err) {
          await fs.ensureDir(this.logPath);                                 // CREA CARPETA
          fs.writeFile(this.logPath + fileName, this.infoLog);              // CREA ARCHIVO
          return;
        };
      });
  });

  next();
  }

  /**
   * Método para registrar logs de errores.
   * 
   * @param error - Objeto que representa el error a ser registrado.
   */
  static errorLogger(error: unknown) {
    // HORA LOCAL COLOMBIA
    const date = moment.tz(new Date(), "America/Bogota").format();
    const newDate = date.replace("-05:00", "").replace("T", " ");
    // NOMBRE DEL ARCHIVO
    const fileName = \`/\${newDate.slice(0,7)}.log\`;
    const filePath = this.logPath + fileName;

    let errorLog = \`    \${error}\\n\`

    fs.appendFile(filePath, errorLog, async (err) => {
      if (err) {
        await fs.ensureDir(this.logPath);                                // CREA CARPETA
        fs.writeFile(this.logPath + fileName, errorLog);                 // CREA ARCHIVO
        return;
      };
    });
  }

  /**
   * Método privado para calcular la duración en meses a partir de la duración proporcionada.
   * 
   * @param duration - Duración para la retención de logs en meses (por defecto, "1y").
   * @returns Número de meses de retención de logs.
   * @private
   */
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
