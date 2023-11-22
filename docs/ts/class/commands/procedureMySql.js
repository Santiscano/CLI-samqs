
export const createCrudProcedure = () => {
  const data = `// pending to create `;

  return data;
};

/**
 * PROCEDURE
 * 
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
const tableName = process.argv[2];
if (!tableName) {
  console.log("Por favor, proporciona un nombre de tabla");
  process.exit(1);
}
// variables
const nameCamel = snakeToCamel(tableName);
const namePascal = camelToPascal(nameCamel);

const create = async () => {
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
  const setValuesWithoutId = columns.slice(1).map((property) => `${property.Field} = _${property.Field},`).join('\n            ');
  

  // -----------------CREATE SENTENCE PROCEDURE MySQL---//
  const folderSql = "../SQL";
  // create
  const fullNameSQLCreate = `${tableName}_create.procedure.sql`;
  const filePathSQLCreate = path.join(
    currentDirectory,
    folderSql,
    fullNameSQLCreate
  );

  const [procedureCreate] = await connection.query(`CREATE PROCEDURE \`${tableName}_create\` (
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
END`);
console.log('res', procedureCreate)
};

// Llama a la función create y espera a que se complete
create().then(() => {
  console.log("Proceso completado");
  process.exit(1);
}).catch((error) => {
  console.error("Ocurrió un error:", error);
});
 */


