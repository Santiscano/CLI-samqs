import path from "path";
import fs from "fs";

import "dotenv/config";

import { createProcedures } from "./procedure";
import { connection } from "../config/database/mysql";
import { RowDataPacket } from "mysql2";
import { fileContentController, fileContentDoc, fileContentDocRes, fileContentInterface, fileContentModel, fileContentRoutes } from './templates';


// 2.2 - variable de ruta actual
const currentDirectory = __dirname;
// 3- creamos la funcion que ejecutara el proceso
export const createCrudSql = async ( tableName:string, tableNameCamel:string, tableNamePascal:string ) => {
  // 4- consultamos base de datos
  const [ data ] = await connection.query(`DESCRIBE ${tableName}`);
  let columns = [...(data as RowDataPacket[]).map(row => ({ Field: row.Field, Type: row.Type }))];

  const listColumns = columns.map((property) => property.Field).join(', '); // string con todos los nombres de columnas de la tabla
  const lenghtItems = columns.map(() => '?').join(', '); // string de "?, " con la longitud de columnas
  const dataIntems = columns.map((property) => `data.${property.Field}`).join(', '); // string con "data.nombre_columna" de todas las columnas
  const procedureParams = columns.map((property) => `IN _${property.Field} ${property.Type.toUpperCase()},`).join("\n    "); // parametros para procerude "IN _idcompanys INT"
  const valuesProcedure = columns.map((property) => `_${property.Field}`).join(', '); // string con "_nombre_columna" de todas las columnas;

  // array de objetos que se usara para documentacion como respuesta
  const listAndTypeColumns = columns.map(({Field, Type}) => ({ [Field]: Type.replace(/(.+?)/, '') === 'varchar' ? 'string' : Type }));

  // propiedades sin id
  const interfaceWithoutId = columns
    .slice(1)
    .map((property) =>`${property.Field}: ${property.Type.startsWith("varchar") ? "string" : property.Type === "int" ? "number" : "string"};`)
    .join("\n  "); // string con columnas y tipo sin id "companys_name: string;"
  const listColumnsWithOutId = columns.slice(1).map((property) => property.Field).join(', '); // string con todos los nombres de columnas de la tabla sin id
  const lenghtItemsWhitoutId = columns.slice(1).map(() => '?').join(', '); // string de "?, " con la longitud de columnas sin la de id
  const dataIntemsWithoutId = columns.slice(1).map((property) => `data.${property.Field}`).join(', '); // string con "data.nombre_columna" de todas las columnas sin id
  const procedureParamsWithoutId = columns.slice(1).map((property) => `IN _${property.Field} ${property.Type.toUpperCase()},`).join("\n    "); // parametros para procerude "IN _companys_name VARCHAR(45)" sin id
  const valuesProcedureWithoutId = columns.slice(1).map((property) => `_${property.Field}`).join(', '); // string con "_nombre_columna" de todas las columnas sin id
  const keyValuesProcedureWithoutId = columns.slice(1).map((property, index, array) => {
    if (index === array.length - 1) {
      return `${property.Field} = _${property.Field}`;
    } else {
      return `${property.Field} = _${property.Field},`;
    }
  }).join('\n            '); // string con todas las clave valor del procedure "companys_name = _companys_name,"
  
  // 5- creamos archivos y carpetas
  // -----------------CREATE INTERFACES----------------//
  const folderInterfaces = "../interfaces";
  const fullNameInterfaces = `${tableNameCamel}.d.ts`;
  const filePathInterfaces = path.join( currentDirectory, folderInterfaces, fullNameInterfaces );
  const contentInterface = fileContentInterface(tableName, tableNamePascal, interfaceWithoutId);
  fs.writeFileSync( filePathInterfaces, contentInterface );
  console.log(`${fullNameInterfaces} Creado`);
  
  // -----------------CREATE ROUTES-------------------//
  const folderRoutes = "../routes";
  const fullNameRoutes = `${tableNameCamel}.routes.ts`;
  const filePathRoutes = path.join( currentDirectory, folderRoutes, fullNameRoutes );
  const contentRoutes = fileContentRoutes( tableNameCamel, tableNamePascal );
  fs.writeFileSync( filePathRoutes, contentRoutes );
  console.log(`${fullNameRoutes} Creado`);

  // -----------------CREATE CONTROLLER---------------//
  const folderController = "../controllers";
  const fullNameController = `${tableNameCamel}.controller.ts`;
  const filePathController = path.join( currentDirectory, folderController, fullNameController );
  const contentController = fileContentController(tableName, tableNameCamel, tableNamePascal, listColumnsWithOutId );
  fs.writeFileSync( filePathController, contentController );
  console.log(`${fullNameController} Creado`);
  
  // -----------------CREATE MODEL-------------------//
  const folderModel = "../models";
  const fullNameModel = `${tableNameCamel}.model.ts`;
  const filePathModel = path.join( currentDirectory, folderModel, fullNameModel );
  const contentModel = fileContentModel( tableNamePascal );
  fs.writeFileSync( filePathModel, contentModel );
  console.log(`${fullNameModel} Creado`);

  // -----------------CREATE SENTENCE PROCEDURE MySQL---//
  // 4- creamos la consulta sql - traer columnas
  createProcedures( tableName, currentDirectory, "../SQL", procedureParamsWithoutId, listColumnsWithOutId, valuesProcedureWithoutId, procedureParams, keyValuesProcedureWithoutId );

  // ---------------- Create json documentation -------- //
  const folderDoc = "../documentation/components";
  const nameJsonDocumentation = `${tableNameCamel}.json`;
  const filePathDoc = path.join( currentDirectory, folderDoc, nameJsonDocumentation );
  const contentDoc = fileContentDoc(listAndTypeColumns); // plantilla de escritura;
  fs.writeFileSync( filePathDoc, contentDoc );
  console.log(`${nameJsonDocumentation} Creado`);

  const folderDocRes = "../documentation/res";
  const fullnameDocRes = `${tableNameCamel}Res.json`;
  const filePathDocRes = path.join( currentDirectory, folderDocRes, fullnameDocRes );
  const contentDocRes = fileContentDocRes(listAndTypeColumns); // plantilla de escritura
  fs.writeFileSync( filePathDocRes, contentDocRes );
  console.log(`${fullnameDocRes} Creado`);
};
