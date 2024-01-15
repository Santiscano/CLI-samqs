import fs from "fs";
import path from "path";


class FileMethods {

  /**
   * Guarda los archivos en la carpeta temporal
   * @param {Buffer} files array de archivos
   * @returns {Promise<message, Document, error>} - Promesa que se resuelve con mensaje, documents y error si aplica
   * @example
   * import multer from "multer";
   * const storage = multer.memoryStorage();
   * const upload = multer({ storage });
   * route.post("/upfiles", upload.array('file'), async ( req:Request, res:Response ) => {
   *   const result = await Excel.UpFiles(req.files);
   *   return res.status(200).json(result);
   * })
   */
  static async UpFiles(files:any): Promise<{message: string, documents?: any, error?: unknown}>{
    try {
      if (!files || Object.keys(files).length === 0) {
        return { message: "No se proporciono ningun archivo" };
      }
      const storageFolder = path.join(__dirname, '../../temp' );
      if (!fs.existsSync(storageFolder)) {
        fs.mkdirSync(storageFolder);
      };
      let documents = Object.keys(files).map(element => {
        const fileKey: string = files[element].fieldname;
        const fileName: string = `${Date.now()}-${files[element].originalname.replace(/ /g, "_")}`;
        const filePath:string = path.join(storageFolder, fileName);
        fs.writeFileSync(filePath, files[element].buffer);
        return { fileKey, fileName, filePath }
      });
      return { message: "Archivos cargados con éxito", documents };
    } catch (error) {
      return { message: "Error al cargar el archivo", error };
    }
  }
}

export default FileMethods;
