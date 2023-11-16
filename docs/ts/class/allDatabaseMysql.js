
export const createAllDatabaseMysql = () => {
  const data = `// pending to create`;

  return data;
};

/**
 * JS
 * 
 * const fs = require("fs");
const path = require("path");
const mysql = require("mysql2/promise");
require("dotenv").config();

// convertir camelCase a PascalCase
function camelToPascal(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
// convertir snake_case a camelCase
function snakeToCamel(snakeCase) {
  const words = snakeCase.split("_"); //creamos un array por cada palabra separada
  // primera palabra la dejamos igual y la unimos con todas las demas que se les hara el camelcase
  const camelCase = words[0] + words.slice(1).map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join("");
  return camelCase;
}

// -----------------Metodos globales-------------------//
const connection = mysql.createPool({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  database: process.env.MYSQL_DB,
  password: process.env.MYSQL_PASSWORD,
});
// ruta actual
const currentDirectory = __dirname;


const createTable = async (tableName, namePascal, nameCamel) => {
  // trae las columnas de la tabla
  const [data] = await connection.query(`DESCRIBE ${tableName}`);
  let columns = [...data.map((row) => { return { Field: row.Field, Type: row.Type }})];

  // columnas organizados en un objeto separado por comas
  const propertiesObj = columns.map((property) => property.Field).join(', ');
  const lenghtItems = columns.map(() => '?').join(', ');
  const dataIntems = columns.map((property) => `data.${property.Field}`).join(', ');
  const procedureParams = columns.map((property) => `IN _${property.Field} ${property.Type.toUpperCase()},`).join("\n    ");
  const insertInto = columns.map((property) => property.Field).join(', ');
  const values = columns.map((property) => `_${property.Field}`).join(', ');

  // propiedades sin id
  const propertiesColWithoutId = columns.slice(1).map((property) =>`${property.Field}: ${property.Type.startsWith("varchar") ? "string" : property.Type === "int" ? "number" : "string"};`).join("\n  ");
  const propertiesObjWithOutId = columns.slice(1).map((property) => property.Field).join(', ');
  const lenghtItemsWhitoutId = columns.slice(1).map(() => '?').join(', ');
  const dataIntemsWithoutId = columns.slice(1).map((property) => `data.${property.Field}`).join(', ');
  const procedureParamsWithoutId = columns.slice(1).map((property) => `IN _${property.Field} ${property.Type.toUpperCase()},`).join("\n    ");
  const insertIntoWithoutId = columns.slice(1).map((property) => property.Field).join(', ');
  const valuesWithoutId = columns.slice(1).map((property) => `_${property.Field}`).join(', ');
  const setValuesWithoutId = columns.slice(1).map((property, index, array) => {
    if (index === array.length - 1) {
      return `${property.Field} = _${property.Field}`;
    } else {
      return `${property.Field} = _${property.Field},`;
    }
  }).join('\n            ');
  // -----------------CREATE INTERFACES----------------//
  const folderInterfaces = "../Interfaces";
  const fullNameInterfaces = `${namePascal}.interface.ts`;
  const filePathInterfaces = path.join(
    currentDirectory,
    folderInterfaces,
    fullNameInterfaces
  );
  const fileContentInterface = `export interface TypeId${namePascal} {
  id${tableName}?: number | string;
};
export interface Type${namePascal} extends TypeId${namePascal} {
  ${propertiesColWithoutId}
};`;
  fs.writeFileSync(filePathInterfaces, fileContentInterface);
  console.log(`${fullNameInterfaces} Creado`);
  
  // -----------------CREATE ROUTES-------------------//
  const folderRoutes = "../Routes";
  const fullNameRoutes = `${namePascal}.routes.ts`;
  const filePathRoutes = path.join(
    currentDirectory,
    folderRoutes,
    fullNameRoutes
  );
  const fileContentRoutes = `import { Router } from "express";
import { get${namePascal}, getById${namePascal}, post${namePascal}, put${namePascal}, delete${namePascal} } from '../Controllers/${namePascal}.controller';
  
const ${nameCamel} = Router();

${nameCamel}.get("/get", get${namePascal});
${nameCamel}.get("/get/:id${tableName}", getById${namePascal});
${nameCamel}.post("/create", post${namePascal});
${nameCamel}.put("/update", put${namePascal});
${nameCamel}.delete("/delete/:id${tableName}", delete${namePascal});

export default ${nameCamel};
  `;
  fs.writeFileSync(filePathRoutes, fileContentRoutes);
  console.log(`${fullNameRoutes} Creado`);
  
  // -----------------CREATE CONTROLLER---------------//
  const folderController = "../Controllers";
  const fullNameController = `${namePascal}.controller.ts`;
  const filePathController = path.join(
    currentDirectory,
    folderController,
    fullNameController
  );
  const fileContentController = `import { Request, Response} from 'express';
import { missingData } from '../Helpers/missingData.utilities';
import { errorMessage, success, uncompleted, unsuccessfully } from '../Helpers/response.utilities';
import { 
  get${namePascal}Model, getById${namePascal}Model, post${namePascal}Model, 
  put${namePascal}Model, delete${namePascal}Model
} from '../Models/${namePascal}.model';
import { TypeId${namePascal}, Type${namePascal} } from '../Interfaces/${namePascal}.interface';
  
  
// TRAER TODOS LOS DATOS
export const get${namePascal} = async (req: Request, res: Response) => {
  try{
    return res.status(200).json(success(await get${namePascal}Model()));
  } catch(err) {
    return res.status(512).json(unsuccessfully(err))
  }
};
  
// TRAER SEGUN ID
export const getById${namePascal} = async (req: Request, res: Response) => {
  try{
    // @ts-ignore
    const dataById = await getById${namePascal}Model(req.params);
    dataById.data
      ? res.status(200).json(success(dataById.data, dataById.message))
      : res.status(208).json(errorMessage(dataById.message));
  } catch(err) {
    return res.status(512).json(unsuccessfully(err))
  }
};
  
// CREAR DATOS 
export const post${namePascal} = async (req: Request, res: Response) => {
  const { ${propertiesObjWithOutId} } = req.body;
  const validate:Type${namePascal} = { ${propertiesObjWithOutId} };
  const data:Type${namePascal} = { ${propertiesObjWithOutId} };
  try{
    const missing = missingData(validate);
    if(missing.error) return res.status(422).json(uncompleted(missing.missing));
    const postData = await post${namePascal}Model(data);
    postData.data
      ? res.status(200).json(success(postData.data, postData.message))
      : res.status(208).json(errorMessage(postData.message))
  } catch(err) {
    return res.status(512).json(unsuccessfully(err))
  }
};

// ACTUALIZAR DATOS 
export const put${namePascal} = async (req: Request, res: Response) => {
  const { ${propertiesObj} }= req.body;
  const data:Type${namePascal} = { ${propertiesObj} };
  try{
    const missing = missingData(data);
    if(missing.error) return res.status(422).json(uncompleted(missing.missing));
    const putData = await put${namePascal}Model(data);
    putData.data
      ? res.status(200).json(success(putData.data, putData.message))
      : res.status(208).json(errorMessage(putData.message));
  } catch(err) {
    return res.status(512).json(unsuccessfully(err))
  }
};

// ELIMINAR DATOS 
export const delete${namePascal} = async (req: Request, res: Response) => {
  const { id${tableName} } = req.params;
  const id: TypeId${namePascal} = { id${tableName} };
  try{
    const missing = missingData(id);
    if(missing.error) return res.status(422).json(uncompleted(missing.missing));
    return res.status(200).json(success(undefined, (await delete${namePascal}Model(id)).message))
  } catch(err) {
    return res.status(512).json(unsuccessfully(err))
  }
};`;
  fs.writeFileSync(filePathController, fileContentController);
  console.log(`${fullNameController} Creado`);
  
  // -----------------CREATE MODEL-------------------//
  const folderModel = "../Models";
  const fullNameModel = `${namePascal}.model.ts`;
  const filePathModel = path.join(currentDirectory, folderModel, fullNameModel);
  const fileContentModel = `import { connection } from "../Config/Database/mysql";
import type Data from '../Interfaces/sql2.type';
import { TypeId${namePascal}, Type${namePascal}  } from "../Interfaces/${namePascal}.interface"

// TRAER TODOS LOS DATOS
export const get${namePascal}Model = async ():Promise<Data> => {
  const [ data ] = await connection.query("SELECT * FROM ${tableName}");
  return data;
};

// TRAER SEGUN ID
export const getById${namePascal}Model = async (data:TypeId${namePascal}):Promise<{message: string, data?:Data}> => {
  const [ validate ] = await connection.query(\`
    SELECT count(*) AS counter FROM ${tableName} WHERE id${tableName} = ?;\`,[
      data.id${tableName}
    ]);
  // @ts-ignore
  if(validate[0].counter == 0) return { message: \`Los datos personales con id:  \${data.id${tableName}} no existen\`}
  const [ response ] = await connection.query(\`
    SELECT * FROM ${tableName} WHERE id${tableName} = ?;\`,[
      data.id${tableName}
    ]);
  return { message: 'Datos encontrados', data: response };
};

// CREAR DATOS 
export const post${namePascal}Model = async (data:Type${namePascal}): Promise<{message: string, data?: Data}> => {
  await connection.query(\`
  CALL ${tableName}_create (${lenghtItemsWhitoutId}, @p_message, @p_insert_id);\`,[
    ${dataIntemsWithoutId}
  ]);
  // @ts-ignore
  const [[{ message, insertId }]] = await connection.query("SELECT @p_message AS message, @p_insert_id AS insertId;");
  if(insertId == null) {
    return { message }
  }
  const [ ${nameCamel}Created ] = await connection.query("SELECT * FROM ${tableName} WHERE id${tableName} = ? ;",[insertId]);
  return { message, data:${nameCamel}Created }
};

// ACTUALIZAR DATOS 
export const put${namePascal}Model = async (data:Type${namePascal}):Promise<{message: string, data?: Data}> => {
  await connection.query(\`CALL ${tableName}_update(${lenghtItems}, @p_message);\`, [
    ${dataIntems}
  ]);
  const [result] = await connection.query('SELECT @p_message AS message;');
  // @ts-ignore
  const message = result[0].message;
  if (message.startsWith('Los datos')) {
    return { message };
  }
  const [ ${nameCamel}Update ] = await connection.query("SELECT * FROM ${tableName} WHERE id${tableName} = ?",[data.id${tableName}]);
  return { message, data: ${nameCamel}Update }
};

// ELIMINAR DATOS 
export const delete${namePascal}Model = async (id:TypeId${namePascal}):Promise<{message: string, data?: Data}> => {
  await connection.query("CALL ${tableName}_delete(?, @p_message);", [id.id${tableName}]);
  const [result] = await connection.query('SELECT @p_message AS message;');
  // @ts-ignore
  const message = result[0].message;
  if (message.startsWith('Los datos')) {
    return { message };
  }
  return {message:\`Datos personales con id: '\${id.id${tableName}}' eliminado con exito\`}
};`;
  fs.writeFileSync(filePathModel, fileContentModel);
  console.log(`${fullNameModel} Creado`);
  
  // -----------------CREATE SENTENCE PROCEDURE MySQL---//
  const folderSql = "../SQL";
  // create
  const fullNameSQLCreate = `${tableName}_create.procedure.sql`;
  const filePathSQLCreate = path.join(
    currentDirectory,
    folderSql,
    fullNameSQLCreate
  );
  const procedureCreate = `CREATE PROCEDURE \`${tableName}_create\` (
    ${procedureParamsWithoutId}
    OUT p_message VARCHAR(255),
    OUT p_insert_id INT
)
BEGIN
    -- DECLARE v_counter INT;
    -- SELECT COUNT(*) INTO v_counter FROM ${tableName} WHERE parametro????? = _parametro???? ;

    -- IF v_counter > 0 THEN
        -- SET p_message = CONCAT('los datos ', _parametro?????,' ya existe en la base de datos');
        -- SET p_insert_id = NULL;
    -- ELSE
        INSERT INTO ${tableName}
            ( ${insertIntoWithoutId} )
        VALUES
            ( ${valuesWithoutId} );
        SET p_message = CONCAT('Datos creados con éxito');
        SET p_insert_id = LAST_INSERT_ID();
    -- END IF;
END`;
  // *si se quiere tener el archivo escrito se descomenta la siguiente linea
  fs.writeFileSync(filePathSQLCreate, procedureCreate);
  console.log(`${fullNameSQLCreate} Creado`);
  // *si se quiere insertar los procedimientos directo a la DB descomentar la siguiente linea
  // await connection.query(`${procedureCreate}`);
  // console.log(`procedure Create Creado en base de datos`);
  
  // update
  const fullNameSQLUpdate = `${tableName}_update.procedure.sql`;
  const filePathSQLUpdate = path.join(
    currentDirectory,
    folderSql,
    fullNameSQLUpdate
  );
  const procedureUpdate = `CREATE PROCEDURE \`${tableName}_update\` (
    ${procedureParams}
    OUT p_message VARCHAR(255)
)
BEGIN
    DECLARE v_counter INT;
    SELECT COUNT(*) INTO v_counter FROM ${tableName} WHERE id${tableName} = _id${tableName};

    IF v_counter = 0 THEN
        SET p_message = CONCAT('Los datos con id: ', _id${tableName} , ' no existen en la base de datos');
    ELSE
        UPDATE ${tableName}
        SET
            ${setValuesWithoutId}
        WHERE id${tableName} = _id${tableName};
        SET p_message = 'Datos actualizados con éxito';
    END IF;
END`;
  // *si se quiere tener el archivo escrito se descomenta la siguiente linea
  fs.writeFileSync(filePathSQLUpdate, procedureUpdate);
  console.log(`${fullNameSQLUpdate} Creado`);
  // *si se quiere insertar los procedimientos directo a la DB descomentar la siguiente linea
  // await connection.query(`${procedureUpdate}`)
  // console.log(`procedure Update Creado en base de datos`);
  
  // delete
  const fullNameSQLDelete = `${tableName}_delete.procedure.sql`;
  const filePathSQLDelete = path.join(
    currentDirectory,
    folderSql,
    fullNameSQLDelete
  );
  const procedureDelete = `CREATE PROCEDURE \`${tableName}_delete\` (
    IN _id${tableName} INT,
    OUT p_message VARCHAR(200)
)
BEGIN
    DECLARE v_counter INT;
    SELECT COUNT(*) INTO v_counter FROM ${tableName} WHERE id${tableName} = _id${tableName};

    IF v_counter = 0 THEN
        SET p_message = CONCAT('Los datos con id: ', _id${tableName}, ' no existen en la base de datos');
    ELSE
        DELETE FROM ${tableName} WHERE id${tableName} = _id${tableName};
        SET p_message = CONCAT('Datos con id: ', _id${tableName}, ' eliminado con éxito');
    END IF;
END`;
  // *si se quiere tener el archivo escrito se descomenta la siguiente linea
  fs.writeFileSync(filePathSQLDelete, procedureDelete);
  console.log(`${fullNameSQLDelete} Creado`);
  // *si se quiere insertar los procedimientos directo a la DB descomentar la siguiente linea
  // await connection.query(`${procedureDelete}`);
  // console.log(`procedure Delete Creado en base de datos`);

  columns = [];
};

const create = async () => {
  const [tables] = await connection.query(`SHOW FULL TABLES WHERE Table_Type = 'BASE TABLE'`);
  await Promise.all(tables.forEach(({Tables_in_localdigitalizacion}) => {
    const table = Tables_in_localdigitalizacion;
    const nameCamel = snakeToCamel(table);
    const namePascal = camelToPascal(nameCamel);
    createTable(table, namePascal, nameCamel);
  }))
};



// Llama a la función create y espera a que se complete
create().then(() => {
  console.log("Proceso completado");
  process.exit(1);
}).catch((error) => {
  console.error("Ocurrió un error:", error);
});
 */



/**
 * TS
 * 
 * 
 * import fs from 'fs';
import path from 'path';
import { connection } from "../Config/Database/mysql";

// convertir camelCase a PascalCase
function camelToPascal(str:string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
// convertir snake_case a camelCase
function snakeToCamel(snakeCase:string) {
  const words = snakeCase.split("_"); //creamos un array por cada palabra separada
  // primera palabra la dejamos igual y la unimos con todas las demas que se les hara el camelcase
  const camelCase = words[0] + words.slice(1).map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join("");
  return camelCase;
}

// -----------------Metodos globales-------------------//
// ruta actual
const currentDirectory = __dirname;


const createTable = async (tableName:any, namePascal:string, nameCamel:string) => {
  // trae las columnas de la tabla
  const [data] = await connection.query(`DESCRIBE ${tableName}`);
  // @ts-ignore
  let columns = [...data.map((row) => { return { Field: row.Field, Type: row.Type }})];

  // columnas organizados en un objeto separado por comas
  const propertiesObj = columns.map((property) => property.Field).join(', ');
  const lenghtItems = columns.map(() => '?').join(', ');
  const dataIntems = columns.map((property) => `data.${property.Field}`).join(', ');
  const procedureParams = columns.map((property) => `IN _${property.Field} ${property.Type.toUpperCase()},`).join("\n    ");
  const insertInto = columns.map((property) => property.Field).join(', ');
  const values = columns.map((property) => `_${property.Field}`).join(', ');

  // propiedades sin id
  const propertiesColWithoutId = columns.slice(1).map((property) =>`${property.Field}: ${property.Type.startsWith("varchar") ? "string" : property.Type === "int" ? "number" : "string"};`).join("\n  ");
  const propertiesObjWithOutId = columns.slice(1).map((property) => property.Field).join(', ');
  const lenghtItemsWhitoutId = columns.slice(1).map(() => '?').join(', ');
  const dataIntemsWithoutId = columns.slice(1).map((property) => `data.${property.Field}`).join(', ');
  const procedureParamsWithoutId = columns.slice(1).map((property) => `IN _${property.Field} ${property.Type.toUpperCase()},`).join("\n    ");
  const insertIntoWithoutId = columns.slice(1).map((property) => property.Field).join(', ');
  const valuesWithoutId = columns.slice(1).map((property) => `_${property.Field}`).join(', ');
  const setValuesWithoutId = columns.slice(1).map((property, index, array) => {
    if (index === array.length - 1) {
      return `${property.Field} = _${property.Field}`;
    } else {
      return `${property.Field} = _${property.Field},`;
    }
  }).join('\n            ');
  // -----------------CREATE INTERFACES----------------//
  const folderInterfaces = "../Interfaces";
  const fullNameInterfaces = `${namePascal}.interface.ts`;
  const filePathInterfaces = path.join(
    currentDirectory,
    folderInterfaces,
    fullNameInterfaces
  );
  const fileContentInterface = `export interface TypeId${namePascal} {
  id${tableName}?: number | string;
};
export interface Type${namePascal} extends TypeId${namePascal} {
  ${propertiesColWithoutId}
};`;
  fs.writeFileSync(filePathInterfaces, fileContentInterface);
  console.log(`${fullNameInterfaces} Creado`);
  
  // -----------------CREATE ROUTES-------------------//
  const folderRoutes = "../Routes";
  const fullNameRoutes = `${namePascal}.routes.ts`;
  const filePathRoutes = path.join(
    currentDirectory,
    folderRoutes,
    fullNameRoutes
  );
  const fileContentRoutes = `import { Router } from "express";
import { get${namePascal}, getById${namePascal}, post${namePascal}, put${namePascal}, delete${namePascal} } from '../Controllers/${namePascal}.controller';
  
const ${nameCamel} = Router();

${nameCamel}.get("/get", get${namePascal});
${nameCamel}.get("/get/:id${tableName}", getById${namePascal});
${nameCamel}.post("/create", post${namePascal});
${nameCamel}.put("/update", put${namePascal});
${nameCamel}.delete("/delete/:id${tableName}", delete${namePascal});

export default ${nameCamel};
  `;
  fs.writeFileSync(filePathRoutes, fileContentRoutes);
  console.log(`${fullNameRoutes} Creado`);
  
  // -----------------CREATE CONTROLLER---------------//
  const folderController = "../Controllers";
  const fullNameController = `${namePascal}.controller.ts`;
  const filePathController = path.join(
    currentDirectory,
    folderController,
    fullNameController
  );
  const fileContentController = `import { Request, Response} from 'express';
import { missingData } from '../Helpers/missingData.utilities';
import { errorMessage, success, uncompleted, unsuccessfully } from '../Helpers/response.utilities';
import { 
  get${namePascal}Model, getById${namePascal}Model, post${namePascal}Model, 
  put${namePascal}Model, delete${namePascal}Model
} from '../Models/${namePascal}.model';
import { TypeId${namePascal}, Type${namePascal} } from '../Interfaces/${namePascal}.interface';
  
  
// TRAER TODOS LOS DATOS
export const get${namePascal} = async (req: Request, res: Response) => {
  try{
    return res.status(200).json(success(await get${namePascal}Model()));
  } catch(err) {
    return res.status(512).json(unsuccessfully(err))
  }
};
  
// TRAER SEGUN ID
export const getById${namePascal} = async (req: Request, res: Response) => {
  try{
    // @ts-ignore
    const dataById = await getById${namePascal}Model(req.params);
    dataById.data
      ? res.status(200).json(success(dataById.data, dataById.message))
      : res.status(208).json(errorMessage(dataById.message));
  } catch(err) {
    return res.status(512).json(unsuccessfully(err))
  }
};
  
// CREAR DATOS 
export const post${namePascal} = async (req: Request, res: Response) => {
  const { ${propertiesObjWithOutId} } = req.body;
  const validate:Type${namePascal} = { ${propertiesObjWithOutId} };
  const data:Type${namePascal} = { ${propertiesObjWithOutId} };
  try{
    const missing = missingData(validate);
    if(missing.error) return res.status(422).json(uncompleted(missing.missing));
    const postData = await post${namePascal}Model(data);
    postData.data
      ? res.status(200).json(success(postData.data, postData.message))
      : res.status(208).json(errorMessage(postData.message))
  } catch(err) {
    return res.status(512).json(unsuccessfully(err))
  }
};

// ACTUALIZAR DATOS 
export const put${namePascal} = async (req: Request, res: Response) => {
  const { ${propertiesObj} }= req.body;
  const data:Type${namePascal} = { ${propertiesObj} };
  try{
    const missing = missingData(data);
    if(missing.error) return res.status(422).json(uncompleted(missing.missing));
    const putData = await put${namePascal}Model(data);
    putData.data
      ? res.status(200).json(success(putData.data, putData.message))
      : res.status(208).json(errorMessage(putData.message));
  } catch(err) {
    return res.status(512).json(unsuccessfully(err))
  }
};

// ELIMINAR DATOS 
export const delete${namePascal} = async (req: Request, res: Response) => {
  const { id${tableName} } = req.params;
  const id: TypeId${namePascal} = { id${tableName} };
  try{
    const missing = missingData(id);
    if(missing.error) return res.status(422).json(uncompleted(missing.missing));
    return res.status(200).json(success(undefined, (await delete${namePascal}Model(id)).message))
  } catch(err) {
    return res.status(512).json(unsuccessfully(err))
  }
};`;
  fs.writeFileSync(filePathController, fileContentController);
  console.log(`${fullNameController} Creado`);
  
  // -----------------CREATE MODEL-------------------//
  const folderModel = "../Models";
  const fullNameModel = `${namePascal}.model.ts`;
  const filePathModel = path.join(currentDirectory, folderModel, fullNameModel);
  const fileContentModel = `import { connection } from "../Config/Database/mysql";
import type Data from '../Interfaces/sql2.type';
import { TypeId${namePascal}, Type${namePascal}  } from "../Interfaces/${namePascal}.interface"

// TRAER TODOS LOS DATOS
export const get${namePascal}Model = async ():Promise<Data> => {
  const [ data ] = await connection.query("SELECT * FROM ${tableName}");
  return data;
};

// TRAER SEGUN ID
export const getById${namePascal}Model = async (data:TypeId${namePascal}):Promise<{message: string, data?:Data}> => {
  const [ validate ] = await connection.query(\`
    SELECT count(*) AS counter FROM ${tableName} WHERE id${tableName} = ?;\`,[
      data.id${tableName}
    ]);
  // @ts-ignore
  if(validate[0].counter == 0) return { message: \`Los datos personales con id:  \${data.id${tableName}} no existen\`}
  const [ response ] = await connection.query(\`
    SELECT * FROM ${tableName} WHERE id${tableName} = ?;\`,[
      data.id${tableName}
    ]);
  return { message: 'Datos encontrados', data: response };
};

// CREAR DATOS 
export const post${namePascal}Model = async (data:Type${namePascal}): Promise<{message: string, data?: Data}> => {
  await connection.query(\`
  CALL ${tableName}_create (${lenghtItemsWhitoutId}, @p_message, @p_insert_id);\`,[
    ${dataIntemsWithoutId}
  ]);
  // @ts-ignore
  const [[{ message, insertId }]] = await connection.query("SELECT @p_message AS message, @p_insert_id AS insertId;");
  if(insertId == null) {
    return { message }
  }
  const [ ${nameCamel}Created ] = await connection.query("SELECT * FROM ${tableName} WHERE id${tableName} = ? ;",[insertId]);
  return { message, data:${nameCamel}Created }
};

// ACTUALIZAR DATOS 
export const put${namePascal}Model = async (data:Type${namePascal}):Promise<{message: string, data?: Data}> => {
  await connection.query(\`CALL ${tableName}_update(${lenghtItems}, @p_message);\`, [
    ${dataIntems}
  ]);
  const [result] = await connection.query('SELECT @p_message AS message;');
  // @ts-ignore
  const message = result[0].message;
  if (message.startsWith('Los datos')) {
    return { message };
  }
  const [ ${nameCamel}Update ] = await connection.query("SELECT * FROM ${tableName} WHERE id${tableName} = ?",[data.id${tableName}]);
  return { message, data: ${nameCamel}Update }
};

// ELIMINAR DATOS 
export const delete${namePascal}Model = async (id:TypeId${namePascal}):Promise<{message: string, data?: Data}> => {
  await connection.query("CALL ${tableName}_delete(?, @p_message);", [id.id${tableName}]);
  const [result] = await connection.query('SELECT @p_message AS message;');
  // @ts-ignore
  const message = result[0].message;
  if (message.startsWith('Los datos')) {
    return { message };
  }
  return {message:\`Datos personales con id: '\${id.id${tableName}}' eliminado con exito\`}
};`;
  fs.writeFileSync(filePathModel, fileContentModel);
  console.log(`${fullNameModel} Creado`);
  
  // -----------------CREATE SENTENCE PROCEDURE MySQL---//
  const folderSql = "../SQL";
  // create
  const fullNameSQLCreate = `${tableName}_create.procedure.sql`;
  const filePathSQLCreate = path.join(
    currentDirectory,
    folderSql,
    fullNameSQLCreate
  );
  const procedureCreate = `CREATE PROCEDURE \`${tableName}_create\` (
    ${procedureParamsWithoutId}
    OUT p_message VARCHAR(255),
    OUT p_insert_id INT
)
BEGIN
    -- DECLARE v_counter INT;
    -- SELECT COUNT(*) INTO v_counter FROM ${tableName} WHERE parametro????? = _parametro???? ;

    -- IF v_counter > 0 THEN
        -- SET p_message = CONCAT('los datos ', _parametro?????,' ya existe en la base de datos');
        -- SET p_insert_id = NULL;
    -- ELSE
        INSERT INTO ${tableName}
            ( ${insertIntoWithoutId} )
        VALUES
            ( ${valuesWithoutId} );
        SET p_message = CONCAT('Datos creados con éxito');
        SET p_insert_id = LAST_INSERT_ID();
    -- END IF;
END`;
  // *si se quiere tener el archivo escrito se descomenta la siguiente linea
  fs.writeFileSync(filePathSQLCreate, procedureCreate);
  console.log(`${fullNameSQLCreate} Creado`);
  // *si se quiere insertar los procedimientos directo a la DB descomentar la siguiente linea
  // await connection.query(`${procedureCreate}`);
  // console.log(`procedure Create Creado en base de datos`);
  
  // update
  const fullNameSQLUpdate = `${tableName}_update.procedure.sql`;
  const filePathSQLUpdate = path.join(
    currentDirectory,
    folderSql,
    fullNameSQLUpdate
  );
  const procedureUpdate = `CREATE PROCEDURE \`${tableName}_update\` (
    ${procedureParams}
    OUT p_message VARCHAR(255)
)
BEGIN
    DECLARE v_counter INT;
    SELECT COUNT(*) INTO v_counter FROM ${tableName} WHERE id${tableName} = _id${tableName};

    IF v_counter = 0 THEN
        SET p_message = CONCAT('Los datos con id: ', _id${tableName} , ' no existen en la base de datos');
    ELSE
        UPDATE ${tableName}
        SET
            ${setValuesWithoutId}
        WHERE id${tableName} = _id${tableName};
        SET p_message = 'Datos actualizados con éxito';
    END IF;
END`;
  // *si se quiere tener el archivo escrito se descomenta la siguiente linea
  fs.writeFileSync(filePathSQLUpdate, procedureUpdate);
  console.log(`${fullNameSQLUpdate} Creado`);
  // *si se quiere insertar los procedimientos directo a la DB descomentar la siguiente linea
  // await connection.query(`${procedureUpdate}`)
  // console.log(`procedure Update Creado en base de datos`);
  
  // delete
  const fullNameSQLDelete = `${tableName}_delete.procedure.sql`;
  const filePathSQLDelete = path.join(
    currentDirectory,
    folderSql,
    fullNameSQLDelete
  );
  const procedureDelete = `CREATE PROCEDURE \`${tableName}_delete\` (
    IN _id${tableName} INT,
    OUT p_message VARCHAR(200)
)
BEGIN
    DECLARE v_counter INT;
    SELECT COUNT(*) INTO v_counter FROM ${tableName} WHERE id${tableName} = _id${tableName};

    IF v_counter = 0 THEN
        SET p_message = CONCAT('Los datos con id: ', _id${tableName}, ' no existen en la base de datos');
    ELSE
        DELETE FROM ${tableName} WHERE id${tableName} = _id${tableName};
        SET p_message = CONCAT('Datos con id: ', _id${tableName}, ' eliminado con éxito');
    END IF;
END`;
  // *si se quiere tener el archivo escrito se descomenta la siguiente linea
  fs.writeFileSync(filePathSQLDelete, procedureDelete);
  console.log(`${fullNameSQLDelete} Creado`);
  // *si se quiere insertar los procedimientos directo a la DB descomentar la siguiente linea
  // await connection.query(`${procedureDelete}`);
  // console.log(`procedure Delete Creado en base de datos`);

  columns = [];
};

const create = async () => {
  const [tables] = await connection.query(`SHOW FULL TABLES WHERE Table_Type = 'BASE TABLE'`);
  // @ts-ignore
  await Promise.all(tables.forEach(({Tables_in_localdigitalizacion}) => {
    const table = Tables_in_localdigitalizacion;
    const nameCamel = snakeToCamel(table);
    const namePascal = camelToPascal(nameCamel);
    createTable(table, namePascal, nameCamel);
  }))
};



// Llama a la función create y espera a que se complete
create().then(() => {
  console.log("Proceso completado");
  process.exit(1);
}).catch((error) => {
  console.error("Ocurrió un error:", error);
});
 */





