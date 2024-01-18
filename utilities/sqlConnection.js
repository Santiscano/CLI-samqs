import path from 'path';
import fs from 'fs';

import * as mysql from "mysql2/promise";
import { config } from 'dotenv';
import { 
  fileContentControllerTsClass, fileContentInterfaceTsClass, 
  fileContentModelTsClass, fileContentRoutesTsClass 
} from '../docs/ts/class/cli/index.js';

export const sqlConnection = async (tableName, tableNameCamel, tableNamePascal) => {
  const currentDirectory = process.cwd(); // directorio desde donde se llama el CLI
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

  // propiedades sin id
  const interfaceWithoutId = columns
    .slice(1)
    .map((property) =>`${property.Field}: ${property.Type.startsWith("varchar") ? "string" : property.Type === "int" ? "number" : "string"};`)
    .join("\n  "); // string con columnas y tipo sin id "companys_name: string;"
  
  const listColumnsWithOutId = columns.slice(1).map((property) => property.Field).join(', '); // string con todos los nombres de columnas de la tabla sin id

  // -----------------CREATE INTERFACES----------------//
  const folderInterfaces = "../interfaces";
  const fullNameInterfaces = `${tableNameCamel}.d.ts`;
  const filePathInterfaces = path.join( currentDirectory, folderInterfaces, fullNameInterfaces );
  const contentInterface = fileContentInterfaceTsClass(tableName, tableNamePascal, interfaceWithoutId);
  fs.writeFileSync( filePathInterfaces, contentInterface );
  console.log(`${fullNameInterfaces} Creado`);

  // -----------------CREATE ROUTES-------------------//
  const folderRoutes = "../routes";
  const fullNameRoutes = `${tableNameCamel}.routes.ts`;
  const filePathRoutes = path.join( currentDirectory, folderRoutes, fullNameRoutes );
  const contentRoutes = fileContentRoutesTsClass( tableNameCamel, tableNamePascal );
  fs.writeFileSync( filePathRoutes, contentRoutes );
  console.log(`${fullNameRoutes} Creado`);

  // -----------------CREATE CONTROLLER---------------//
  const folderController = "../controllers";
  const fullNameController = `${tableNameCamel}.controller.ts`;
  const filePathController = path.join( currentDirectory, folderController, fullNameController );
  const contentController = fileContentControllerTsClass(tableName, tableNameCamel, tableNamePascal, listColumnsWithOutId );
  fs.writeFileSync( filePathController, contentController );
  console.log(`${fullNameController} Creado`);

  // -----------------CREATE MODEL-------------------//
  const folderModel = "../models";
  const fullNameModel = `${tableNameCamel}.model.ts`;
  const filePathModel = path.join( currentDirectory, folderModel, fullNameModel );
  const contentModel = fileContentModelTsClass( tableNamePascal );
  fs.writeFileSync( filePathModel, contentModel );
  console.log(`${fullNameModel} Creado`);

};
sqlConnection("products", "products", "Products");
