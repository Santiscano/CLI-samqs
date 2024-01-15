import * as fs from 'fs-extra';
import path from 'path';
import moment from 'moment-timezone';
import { GeneralLogs, Logs } from '../interfaces/logs';

// UBICACIÓN DE LOS LOGS
const logPath = path.join(__dirname, '../../logs'); 

class WriteLog {

  constructor(){}

  static write( data: GeneralLogs ) {
    // HORA LOCAL COLOMBIA
    const date = moment.tz(new Date(), "America/Bogota").format();
    const newDate = date.replace("-05:00", "").replace("T", " ");
    
    // NOMBRE DEL ARCHIVO
    const fileName = `/${data.fileName}.log`;
    const filePath = logPath + fileName;
    
    let id: string | number;
    data.id === undefined
      ? id = "N/A"
      : id = data.id

    // MENSAJE DE ALERTA
    let alert = "";
    data.error === true
      ? alert = "[WARNING]"
      : alert = "[SUCCESS]"

    //** MENSAJE DEL LOG */
    let infoLog = `${newDate} ${alert} IDENTIFICATION: ${id} ${data.message.toUpperCase()}\n`
    
    fs.appendFile(filePath, infoLog, async ( err: NodeJS.ErrnoException | null ) => {
      if (err) {
        await fs.ensureDir(logPath);                            // CREA CARPETA
        fs.writeFile(logPath + fileName, infoLog);              // CREA ARCHIVO
        return;
      }
    });
  }
}

const data: GeneralLogs = {
  fileName: "testLogs",
  error: false,
  id: 1037637170,
  message: "PROBLEM EN LA CARGA DE LA INFORMACIÓN"
};

WriteLog.write(data);

export default WriteLog

