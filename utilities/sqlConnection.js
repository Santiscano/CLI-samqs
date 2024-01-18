import path from 'path';
import fs from 'fs';

import * as mysql from "mysql2/promise";
import { config } from 'dotenv';
import { createSpinner } from 'nanospinner';


import { 
  createProceduresTsClass, fileContentControllerTsClass, fileContentDocResTsClass, fileContentDocTsClass, 
  fileContentInterfaceTsClass, fileContentModelTsClass, fileContentRoutesTsClass 
} from '../docs/ts/class/cli/index.js';

export const sqlConnection = async (tableName, tableNameCamel, tableNamePascal) => {
  const spinner = createSpinner("\n consultando base de datos").start();
  const currentDirectory = process.cwd(); // directorio desde donde se llama el CLI
  console.log('currentDirectory: ', currentDirectory);
  const envPath = path.join( currentDirectory, '.env' );
  config({ path: envPath })

  // Extrae los valores necesarios del archivo .env
  const DB_HOST = process.env.DB_HOST;
  const DB_USER = process.env.DB_USER;
  const DB_DB = process.env.DB_DB;
  const DB_PORT = process.env.DB_PORT;
  const DB_PASSWORD = process.env.DB_PASSWORD;

  const connection = mysql.createPool({
    host: DB_HOST,
    user: DB_USER,
    password: DB_PASSWORD,
    database: DB_DB,
    port: DB_PORT,
  });

  const [ data ] = await connection.query(`DESCRIBE ${tableName}`);
  let columns = [...(data ).map(row => ({ Field: row.Field, Type: row.Type }))];

  const procedureParams = columns.map((property) => `IN _${property.Field} ${property.Type.toUpperCase()},`).join("\n    "); // parametros para procerude "IN _idcompanys INT"
  // array de objetos que se usara para documentacion como respuesta
  const listAndTypeColumns = columns.map(({Field, Type}) => ({ [Field]: Type.replace(/(.+?)/, '') === 'varchar' ? 'string' : Type }));
  // propiedades sin id
  const interfaceWithoutId = columns
    .slice(1)
    .map((property) =>`${property.Field}: ${property.Type.startsWith("varchar") ? "string" : property.Type === "int" ? "number" : "string"};`)
    .join("\n  "); // string con columnas y tipo sin id "companys_name: string;"
    
    const listColumnsWithOutId = columns.slice(1).map((property) => property.Field).join(', '); // string con todos los nombres de columnas de la tabla sin id
    const procedureParamsWithoutId = columns.slice(1).map((property) => `IN _${property.Field} ${property.Type.toUpperCase()},`).join("\n    "); // parametros para procerude "IN _companys_name VARCHAR(45)" sin id
    const valuesProcedureWithoutId = columns.slice(1).map((property) => `_${property.Field}`).join(', '); // string con "_nombre_columna" de todas las columnas sin id
    const keyValuesProcedureWithoutId = columns.slice(1).map((property, index, array) => {
      if (index === array.length - 1) {
        return `${property.Field} = _${property.Field}`;
      } else {
        return `${property.Field} = _${property.Field},`;
      }
    }).join('\n            '); // string con todas las clave valor del procedure "companys_name = _companys_name,"
  

  // creamos archivos y carpetas
  // -----------------CREATE INTERFACES----------------//
  const folderInterfaces = "./src/interfaces";
  const fullNameInterfaces = `${tableNameCamel}.d.ts`;
  const filePathInterfaces = path.join( currentDirectory, folderInterfaces, fullNameInterfaces );
  const contentInterface = fileContentInterfaceTsClass(tableName, tableNamePascal, interfaceWithoutId);
  fs.writeFileSync( filePathInterfaces, contentInterface );
  console.log(`${fullNameInterfaces} Creado`);

  // -----------------CREATE ROUTES-------------------//
  const folderRoutes = "./src/routes";
  const fullNameRoutes = `${tableNameCamel}.routes.ts`;
  const filePathRoutes = path.join( currentDirectory, folderRoutes, fullNameRoutes );
  const contentRoutes = fileContentRoutesTsClass( tableNameCamel, tableNamePascal );
  fs.writeFileSync( filePathRoutes, contentRoutes );
  console.log(`${fullNameRoutes} Creado`);

  // -----------------CREATE CONTROLLER---------------//
  const folderController = "./src/controllers";
  const fullNameController = `${tableNameCamel}.controller.ts`;
  const filePathController = path.join( currentDirectory, folderController, fullNameController );
  const contentController = fileContentControllerTsClass(tableName, tableNameCamel, tableNamePascal, listColumnsWithOutId );
  fs.writeFileSync( filePathController, contentController );
  console.log(`${fullNameController} Creado`);

  // -----------------CREATE MODEL-------------------//
  const folderModel = "./src/models";
  const fullNameModel = `${tableNameCamel}.model.ts`;
  const filePathModel = path.join( currentDirectory, folderModel, fullNameModel );
  const contentModel = fileContentModelTsClass( tableNamePascal );
  fs.writeFileSync( filePathModel, contentModel );
  console.log(`${fullNameModel} Creado`);

  // -----------------CREATE SENTENCE PROCEDURE MySQL---//
  // 4- creamos la consulta sql - traer columnas
  createProceduresTsClass( tableName, currentDirectory, "./src/SQL", procedureParamsWithoutId, listColumnsWithOutId, valuesProcedureWithoutId, procedureParams, keyValuesProcedureWithoutId );

  // ---------------- Create json documentation -------- //
  const folderDoc = "./src/documentation/components";
  const nameJsonDocumentation = `${tableNameCamel}.json`;
  const filePathDoc = path.join( currentDirectory, folderDoc, nameJsonDocumentation );
  const contentDoc = fileContentDocTsClass(listAndTypeColumns); // plantilla de escritura;
  fs.writeFileSync( filePathDoc, contentDoc );
  console.log(`${nameJsonDocumentation} Creado`);

  const folderDocRes = "./src/documentation/res";
  const fullnameDocRes = `${tableNameCamel}Res.json`;
  const filePathDocRes = path.join( currentDirectory, folderDocRes, fullnameDocRes );
  const contentDocRes = fileContentDocResTsClass(listAndTypeColumns); // plantilla de escritura
  fs.writeFileSync( filePathDocRes, contentDocRes );
  console.log(`${fullnameDocRes} Creado`);


  console.log("\n ✅ Recurso Creado con exito ✅".bold)
  process.exit();
};
