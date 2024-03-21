export const createGoogleBucket = () => {
  const data = `import "dotenv/config";
import googleBucketKey from "../config/keys/googleBucketKey.json";
import path from "path";
import { Storage } from "@google-cloud/storage";

class GoogleBucket {
  
  /**
   * 
   * @param fileName Nombre del archivo temporal
   * @param bucketName Nombre del bucket  de google cloud storage donde se guardara el archivo.
   * @param destination Ruta en la que seencontrara en el bucket ejemplo proyecto/area/archivo.pdf
   * @example
   * import GoogleBucket from "../helpers/googleBucket";
   * 
   * await GoogleBucket.UploadFile( "nombre_archivo", "nombre_bucket", "ruta/donde/se-quiere/guardar");
   * 
   * @example // para multiples archivos se puede hacer de la siguietne manera
   * import GoogleBucket from "../helpers/googleBucket";
   * import FileMethods from "../helpers/files";
   * 
   * const docs = await FileMethods.UpFiles(valueFiles, '/googleStorage'); // *Subo archivos a temp/googleStorage
   * 
   * const upFilesPromises = docs.documents.map( async ({fileName, filePath}:DocsType) => {
      const destination = \`ruta/donde/se-quiere/guardar/\${fileName}\`;
      await GoogleBucket.UploadFile( fileName, "luci_digitalizacion", destination); // *Envio a bucket
      return filePath;
    });
   * const upFiles = await Promise.all(upFilesPromises); // *Espero que se cumplan las promesas
   *
   * await FileMethods.DeleteTempFiles( upFiles, '/googleStorage' ); // *Elimino archivos temporales
   * 
   */
  static async UploadFile( fileName:string, bucketName:string, destination:string ) {
    const GOOGLE_CLOUD_PROJECT = process.env.PROJECT_NAME;                            // Nombre del proyecto de Google Cloud
    const GOOGLE_CLOUD_BUCKET = bucketName;                              // Nombre del bucket donde se guardara el archivo
    const FILE_NAME = path.join(__dirname, \`../../temp/googleStorage/\${fileName}\`);   // Ruta completa del archivo

    const storage = new Storage({
      projectId: GOOGLE_CLOUD_PROJECT,
      keyFilename: path.join(__dirname, "../config/keys/googleBucketKey.json")
    });

    try {
      return await storage.bucket(GOOGLE_CLOUD_BUCKET!).upload(FILE_NAME, { destination });
    } catch (error) {
      console.log('error: ', error);
    }
  };
}

export default GoogleBucket;
`;

  return data;
};
