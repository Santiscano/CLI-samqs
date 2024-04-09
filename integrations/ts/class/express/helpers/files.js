
export const createFiles = () => {
  const data = `import fs from "fs";
import path from "path";


class FileMethods {

  /**
   * Guarda los archivos en la carpeta temporal
   * @param {Buffer} files array de archivos
   * @param {string} route faltante de la ruta apartir de la ruta temporal EJM /googleStorage
   * @returns {Promise<message, Document, error>} - Promesa que se resuelve con mensaje, documents y error si aplica
   * @example
   * import express, { Request, Response, NextFunction } from "express";
   * import multer from "multer";
   * import FileMethods from "../helpers/files";
   * 
   * private app = express(); // app es de express
   * private upload = multer({ storage: multer.memoryStorage() })
   * this.app.use(this.upload.array('file')); // multer recibe todos los archivos tipo file
   * 
   * const valueFiles = req.files; // en req ya existe un objeto llamado files donde esta la data
   * const docs = await FileMethods.UpFiles(valueFiles, '/googleStorage');
   * 
   */
  static async UpFiles(files:any, route:string = ""): Promise<{message: string, documents?: any, error?: unknown}>{
    try {
      if (!files || Object.keys(files).length === 0) ({ message: "No se proporciono ningun archivo" })
      
      const storageFolder = path.join(__dirname, '../../temp', route );
      if (!fs.existsSync(storageFolder)) fs.mkdirSync(storageFolder);
      
      let documents = Object.keys(files).map(element => {
        const fileKey: string = files[element].fieldname;
        const now = dateMethods.generateDateNowISO();
        const fileName: string = \`\${now}-\${files[element].originalname.replace(/ /g, "_")}\`;
        const filePath:string = path.join(storageFolder, fileName);
        fs.writeFileSync(filePath, files[element].buffer);
        return { fileKey, fileName, filePath }
      });
      return { message: "Archivos cargados con éxito", documents };
    } catch (error) {
      return { message: "Error al cargar el archivo", error };
    }
  }

  /**
   * 
   * @param {Array<string>} filesName array de paths donde estan los archivos a eliminar
   * @param route ruta adicional o faltante donde se encuentran los archivos temporales a eliminar EJM /googleStorage
   * @returns {Promise<message, error>} - respuesta de cantidad de archivos eliminados y si genero algun error
   * @example
   * import FileMethods from "../helpers/files";
   * routeFiles:  [
      'C:\\\\Users\\\\lenonovo\\\\Desktop\\\\test-view-upload-file\\\\temp\\\\googleStorage\\\\1710807962770-Semana_5_-_Formularios.pptx',
      'C:\\\\Users\\\\lenonovo\\\\Desktop\\\\test-view-upload-file\\\\temp\\\\googleStorage\\\\1710807962771-R_Semana_2.pptx'
    ]
   * await FileMethods.DeleteTempFiles( routeFiles, '/googleStorage' );
   */
  static async DeleteTempFiles( filesName:string[], route:string = "" ) {
    try {
      const storageFolder = path.join(__dirname, '../../temp', route );
      filesName.forEach((file:string) => {
        const filePath = path.resolve(storageFolder, file);
        fs.unlinkSync(filePath);
      });
      return { message: \`Se eliminaron \${filesName.length} archivos\`};
    } catch (error) {
      return { message: "No se pudieron eliminar todos los archivos temporales", error };
    }
  }
}

export default FileMethods;
`;

  return data;
};
