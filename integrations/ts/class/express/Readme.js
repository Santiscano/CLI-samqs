export const createReadmeMD = () => {
  return `# Pasos para iniciar el proyecto
1- ejecuta npm run swagger
3- actualice el archivo .env
4- ejecute npm run dev




## Usar Metodos
Guia para utilizar los metodos personales de helpers, middlewares y utilities
<!-- *================== HELPERS ================= -->
#### **Helpers**
<!-- *================== apiRespose ================= -->
<!-- *================== bufferMethods ================= -->



<!-- *================== files ================= -->
__files.ts__
tiene una clase llamada **FileMethods** la cual tiene los siguientes metodos
1. UpFiles
2. DeleteTempFiles

Para poder usarla es necesario asegurarse de que en src/server/index.ts este configurado el middleware multer de la siguiente manera:
\`\`\`ts
private upload = multer({ storage: multer.memoryStorage() })
this.app.use(this.upload.array('file')); // multer recibe todos los archivos tipo file
\`\`\`

**UpFiles**
este metodo se encarga de subir archivos al servidor en la carpeta temp, pero se puede o reasignar o agregar otra carpeta interna a temp.
este metodo requiere de 2 parametros 1 los archivos y 2 la ruta adicional este segundo es opcional
\`\`\`ts
import FileMethods from "../helpers/files";
const valueFiles = req.files; // en req ya existe un objeto llamado files donde esta la data
const docs = await FileMethods.UpFiles(valueFiles, '/googleStorage');
\`\`\`
puede retornar un mensaje y una variable **documents** la cual tiene un objeto con la key, nombre archivo y path donde se guardo el archivo


**DeleteTempFiles**
Este metodo se encarga de eliminar los archivos temporales, normalmente se usara despues de el metodo anterior cuando ya se haya hecho lo requerido con los archivos cargados
Este metodo recibe como parametros un array de strings, los cuales seran las rutas donde estan los archivos a eliminar del servidor y el segundo es el complemento de la ruta donde estan los archivos llegado el caso que no esten dentro de la carpeta temp que es donde la funcion buscara por defecto los archivos sino se le brinda el segundo parametro
\`\`\`ts
import FileMethods from "../helpers/files";
const routeFiles =  [
      'C:\\\\Users\\\\lenonovo\\\\Desktop\\\\test-view-upload-file\\\\temp\\\\googleStorage\\\\1710807962770-Semana_5_-_Formularios.pptx',
      'C:\\\\Users\\\\lenonovo\\\\Desktop\\\\test-view-upload-file\\\\temp\\\\googleStorage\\\\1710807962771-R_Semana_2.pptx'
    ]
await FileMethods.DeleteTempFiles( routeFiles, '/googleStorage' );
\`\`\`
este array puede obtenerse tambien desde el metodo anterior, por ejemplo subir y eliminar
\`\`\`ts
import FileMethods from "../helpers/files";

const valueFiles = req.files; 
const docs = await FileMethods.UpFiles(valueFiles, '/googleStorage');
const routeFiles = docs.documents.map( (el) =>  el.filePath ) ;
await FileMethods.DeleteTempFiles( routeFiles, '/googleStorage' );
\`\`\`
<!-- *================== Fin files ================= -->



<!-- *================== filesPDF ================= -->
<!-- *================== Fin filesPDF ================= -->



<!-- *================== GoogleBucker ================= -->
__googleBucket__
tiene una clase llamada **GoogleBucket** la cual tiene los siguientes metodos
1. UploadFile

para poder usarla es necesario asegurarse de tener el archivo **json** con las keys de conexion, este archivo debe encontrarse en src/config/keys/googleBucketKey.json 
y tambien tener instalada la libreria **@google-cloud/storage**

**UploadFile**
Este metodo se encarga e subir el archivo que se le entregue a el bucket indicado, este requiere de 3 parametros:
+ __fileName__ => Nombre del archivo: "mi_cv"
+ __bucketName__ => Nombre del bucket  de google cloud storage "personal_bucket"
+ __destination__  => ruta interna que tendra el archivo en el bucket docs/personal/mi_cv.pdf

###### Ejemplo simple
\`\`\`ts
import GoogleBucket from "../helpers/googleBucket";

await GoogleBucket.UploadFile( "nombre_archivo", "nombre_bucket", "ruta/donde/se-quiere/guardar");
\`\`\` 

###### Ejemplo multiple
\`\`\`ts
import GoogleBucket from "../helpers/googleBucket";
import FileMethods from "../helpers/files";

const docs = await FileMethods.UpFiles(valueFiles, '/googleStorage'); // *Subo archivos a temp/googleStorage

const upFilesPromises = docs.documents.map( async ({fileName, filePath}:DocsType) => {
  const destination = \`ruta/donde/se-quiere/guardar/\${fileName}\`;
  await GoogleBucket.UploadFile( fileName, "luci_digitalizacion", destination); // *Envio a bucket
  return filePath;
});
const upFiles = await Promise.all(upFilesPromises); // *Espero que se cumplan las promesas

await FileMethods.DeleteTempFiles( upFiles, '/googleStorage' ); // *Elimino archivos temporales
\`\`\`
<!-- *================== Fin GoogleBucker ================= -->



<!-- *================== jwt ================= -->
<!-- *================== logs ================= -->
<!-- *================== missingData ================= -->
<!-- *================== nodeMailer ================= -->
<!-- *================== resStatus ================= -->
<!-- *================== sendFileTemp ================= -->
<!-- *================== socket ================= -->
<!-- *================== sqlCrud ================= -->


<!-- *================== MIDDLEWARES ================= -->
### **Middlewares**
<!-- *================== UTILITIES ================= -->
### **Utilidades**

`;
};
