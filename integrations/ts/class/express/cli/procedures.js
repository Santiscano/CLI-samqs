import path from "path";
import fs from "fs";
import { procedureCreateTsClass, procedureDeleteTsClass, procedureUpdateTsClass } from "./procedureTemplate.js";

export const createProceduresTsClass = async ( 
  tableName, 
  currentDirectory, 
  folderSql,
  procedureParamsWithoutId,
  listColumnsWithOutId,
  valuesProcedureWithoutId,
  procedureParams,
  keyValuesProcedureWithoutId,
  inyectableProcedure = false
) => {

  // ?CREATE
  const fullNameSQLCreate = `${tableName}_create.procedure.sql`;
  const filePathSQLCreate = path.join( currentDirectory, folderSql, fullNameSQLCreate );
  const create = procedureCreateTsClass( tableName, procedureParamsWithoutId, listColumnsWithOutId, valuesProcedureWithoutId );
  if (!inyectableProcedure) {
    // * ARCHIVO ESCRITO
    fs.writeFileSync(filePathSQLCreate, create);
    console.log(`${fullNameSQLCreate} Creado`);
  } else {
    // * INYECTAR PROCEDURE A MYSQL
    // await connection.query(`${create}`);
    // console.log(`procedure Create Creado en base de datos`);
  }

  // ?UPDATE
  const fullNameSQLUpdate = `${tableName}_update.procedure.sql`;
  const filePathSQLUpdate = path.join( currentDirectory, folderSql, fullNameSQLUpdate );
  const update = procedureUpdateTsClass( tableName, procedureParams, keyValuesProcedureWithoutId );
  if (!inyectableProcedure) {
    // * ARCHIVO ESCRITO
    fs.writeFileSync(filePathSQLUpdate, update);
    console.log(`${fullNameSQLUpdate} Creado`);
  } else {
    // * INYECTAR PROCEDURE A MYSQL
    // await connection.query(`${update}`)
    // console.log(`procedure Update Creado en base de datos`);
  }

  // ?DELETE
  const fullNameSQLDelete = `${tableName}_delete.procedure.sql`;
  const filePathSQLDelete = path.join( currentDirectory, folderSql, fullNameSQLDelete );
  const deletePro = procedureDeleteTsClass( tableName );
  if (!inyectableProcedure) {
    // * ARCHIVO ESCRITO
    fs.writeFileSync(filePathSQLDelete, deletePro);
  console.log(`${fullNameSQLDelete} Creado`);
  } else {
    // * INYECTAR PROCEDURE A MYSQL
    // await connection.query(`${deletePro}`);
    // console.log(`procedure Delete Creado en base de datos`);
  }
}
