
export const createLogs = () => {
  const data = `import * as fs from 'fs-extra';
import path from 'path';
import moment from 'moment-timezone';


export interface Logs {
  fileName: string;
  id?: number;
  error: boolean;
  date?: string;
  files_account_type_number: string;
  files_cost_center: string;
  files_code_accounting: string;
  users_identification_type: string;
  users_identification: string;
  message: string;
};

export interface GeneralLogs {
  fileName: string;
  id?: string | number;
  error: boolean;
  message: string;
};

// UBICACIÓN DE LOS LOGS
const logPath = path.join(__dirname, '../../logs'); 

export const writeLog = (data: GeneralLogs) => {
    // HORA LOCAL COLOMBIA
    const date = moment.tz(new Date(), "America/Bogota").format();
    const newDate = date.replace("-05:00", "").replace("T", " ");
    
    // NOMBRE DEL ARCHIVO
    const fileName = \`/\${data.fileName}.log\`;
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
    let infoLog = \`\${newDate} \${alert} IDENTIFICATION: \${id} \${data.message.toUpperCase()}\\n\`
    
    fs.appendFile(filePath, infoLog, async (err) => {
        if (err) {
            await fs.ensureDir(logPath);                            // CREA CARPETA
            fs.writeFile(logPath + fileName, infoLog);              // CREA ARCHIVO
            return;
        }
    });
};

const data: GeneralLogs = {
    fileName: "testLogs",
    error: false,
    id: 1037637170,
    message: "PROBLEM EN LA CARGA DE LA INFORMACIÓN"
};

writeLog(data);
`;

  return data;
};
