import "dotenv/config";
import { RowDataPacket } from "mysql2";

import { connection } from "../config/database/mysql";
import StringsMethods from '../utilities/stringMethods';
import { createCrudSql } from "./tableSql";


const crudAllDatabase = async () => {
  try {
    const [ tables ] = await connection.query( `SHOW FULL TABLES WHERE Table_Type = 'BASE TABLE'` );
    
    // !el nombre Tables_in_nombre_base_de_datos hay que configuarlo por el nombre de la base de datos personal
    const allTables = (tables as RowDataPacket[]).map(({ Tables_in_nombre_base_de_datos }) => {
      const table = Tables_in_nombre_base_de_datos;
      const tableNameCamel = StringsMethods.SnakeToCamel(table);
      const tableNamePascal = StringsMethods.camelToPascal(tableNameCamel);
  
      return new Promise(async (resolve, reject) => {
        try {
          await createCrudSql( table, tableNameCamel, tableNamePascal );
          resolve(console.log(`table ${table} success`));
        } catch (error) {
          reject(error);
        }
      })
    })

    // ejecutamos array de promesas
    console.log('allTables: ', allTables);
    await Promise.all(allTables);

  } catch (error) {
    console.log('error al obtener las tablas: ', error);
  }

};




crudAllDatabase().then(() => {
  console.log( 'Proceso completado' );
  process.exit(1);
}).catch((error) => {
  console.error( "Ocurrio un error: ", error );
  
})
