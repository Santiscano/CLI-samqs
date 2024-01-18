
export const createCrudMysql = () => {
  const data = `import StringsMethods from '../utilities/stringMethods';
import { createCrudSql } from "./tableSql";


// 1 - preguntamos nombre tabla
const tableName = process.argv[2];
if (!tableName) {
  console.log("Por favor, proporciona un nombre de tabla");
  process.exit(1);
}
// 2 - creamos las variables con nombre de tabla
const tableNameCamel = StringsMethods.SnakeToCamel(tableName);
const tableNamePascal = StringsMethods.camelToPascal(tableNameCamel);


// ultimo ejecutar la funcion y el then o catch
createCrudSql( tableName, tableNameCamel, tableNamePascal ).then(() => {
  console.log("Crud en base a tabla creado");
  process.exit(1);
}).catch((error) => {
  console.error("Error al crear la tabla:", error);
});
`;

  return data;
};
