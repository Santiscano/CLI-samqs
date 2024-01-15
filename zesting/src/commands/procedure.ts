import path from "path";
import fs from "fs";
import { procedureCreate, procedureDelete, procedureUpdate } from "./templates/procedure";


export const createProcedures = async ( 
  tableName:string, 
  currentDirectory:string, 
  folderSql:string,
  procedureParamsWithoutId:string,
  listColumnsWithOutId:string,
  valuesProcedureWithoutId: string,
  procedureParams:string,
  keyValuesProcedureWithoutId:string
) => {


  // ?CREATE
  const fullNameSQLCreate = `${tableName}_create.procedure.sql`;
  const filePathSQLCreate = path.join( currentDirectory, folderSql, fullNameSQLCreate );
  const create = procedureCreate( tableName, procedureParamsWithoutId, listColumnsWithOutId, valuesProcedureWithoutId );
  // * ARCHIVO ESCRITO
  fs.writeFileSync(filePathSQLCreate, create);
  console.log(`${fullNameSQLCreate} Creado`);
  // * INYECTAR PROCEDURE A MYSQL
  // await connection.query(`${create}`);
  // console.log(`procedure Create Creado en base de datos`);


  // ?UPDATE
  const fullNameSQLUpdate = `${tableName}_update.procedure.sql`;
  const filePathSQLUpdate = path.join( currentDirectory, folderSql, fullNameSQLUpdate );
  const update = procedureUpdate( tableName, procedureParams, keyValuesProcedureWithoutId );
    // * ARCHIVO ESCRITO
  fs.writeFileSync(filePathSQLUpdate, update);
  console.log(`${fullNameSQLUpdate} Creado`);
  // * INYECTAR PROCEDURE A MYSQL
  // await connection.query(`${update}`)
  // console.log(`procedure Update Creado en base de datos`);

  // ?DELETE
  const fullNameSQLDelete = `${tableName}_delete.procedure.sql`;
  const filePathSQLDelete = path.join( currentDirectory, folderSql, fullNameSQLDelete );
  const deletePro = procedureDelete( tableName );
  // * ARCHIVO ESCRITO
  fs.writeFileSync(filePathSQLDelete, deletePro);
  console.log(`${fullNameSQLDelete} Creado`);
  // * INYECTAR PROCEDURE A MYSQL
  // await connection.query(`${deletePro}`);
  // console.log(`procedure Delete Creado en base de datos`);

};
