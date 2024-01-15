import fs from "fs";
import path from "path";
  
export const createTagsComponents = () => {
  const currentDirectory = __dirname;
  
  // ================= components ===================//
  const componentsPath = './components'; // ruta carpeta
  const componentsArray = fs.readdirSync( path.join( currentDirectory, componentsPath )); // array con archivos
  const jsonDataComponents: any = {}; // creamos objeto
  
  for (const file of componentsArray) { // modificamos objeto
    const filePath = path.join( currentDirectory, componentsPath, file ); // Une la ruta de la carpeta con el nombre del archivo
    const fileData = JSON.parse( fs.readFileSync(filePath, 'utf8' )); // Lee el contenido del archivo JSON y lo convierte a un objeto JavaScript
    const dataName = path.basename(file, '.json'); // Obtiene el nombre del archivo sin la extensión
    
    jsonDataComponents[dataName] = fileData; // Agrega la información al objeto combinado usando el nombre del archivo como clave
  }
  // =================================================//
  // ================= responses =====================//
  const responsesPath = './res'; // carpeta res
  const componentsArrayRes = fs.readdirSync( path.join( currentDirectory, responsesPath )); // array archivos response
  const jsonDataResponses: any = {}; // objeto con respuestas

  for (const file of componentsArrayRes) {
    const filePath = path.join( currentDirectory, responsesPath, file ); // une ruta archivo
    const fileData = JSON.parse( fs.readFileSync( filePath, 'utf8' )); // lee el contenido del archivo
    const dataName = path.basename( file, '.json' ); // obtiene el nombre sin la extension

    jsonDataResponses[dataName] = fileData // agrega la informacion al objeto combinado usando el nombre del archivo como clave
  }
  // =================================================//
  // ================= tags =========================//
  const tagsArray = fs.readdirSync( path.join( currentDirectory, componentsPath ) );
  
  const arrayDataTags = tagsArray.map((file, i) => {
    const dataName = path.basename(file, '.json');
    return {
      name: dataName,
      description: `modulo de ${dataName}`
    }
  });
  // ==============================================//

  return {
    tags: arrayDataTags,
    responseSuccess: jsonDataResponses,
    components: jsonDataComponents
  };
};
