
export const createSqlCrud = () => {
  const data = `import { connection } from '../config/database/mysql';
import SQLResponse from '../interfaces/sql2';

interface getTable {
  status?: boolean;
  message?: string;
  data?: SQLResponse;
}

class SqlCrud {

  /**
   * Obtiene todos los registros de una tabla de la base de datos.
   * @param {string} table - Nombre de la tabla de la que se obtendrán los registros.
   * @returns {Promise<getTable>} - Promesa que se resuelve con un objeto que indica si se obtuvieron datos y los datos en sí.
   */
  static async getTable( table:string, offset:number, limit:number, orderBy:string, sort:string ): Promise<getTable>{
    const [query]: SQLResponse = await connection.query(\`
      SELECT * FROM \${table} ORDER BY \${orderBy} \${sort} LIMIT \${limit} OFFSET \${offset};\`
    );
    console.log(query)
    if (query.lenght === 0) {
      return { status: false, data: query };
    }
    return { status: true, data: query };
  };


  /**
   * Obtiene un registro de una tabla de la base de datos basado en un atributo y su valor.
   * @param {string} table - Nombre de la tabla de la que se obtendrá el registro.
   * @param {string} attribute - Nombre del atributo que se utilizará para la búsqueda.
   * @param {string | number} value - Valor del atributo que se utilizará para la búsqueda.
   * @returns {Promise<getTable>} - Promesa que se resuelve con un objeto que indica si se obtuvo el registro y el registro en sí.
   */
  static async getRowByAttribute(
    table: string,
    attribute: string,
    value: string | number
  ): Promise<getTable>{
    const [ query ]: SQLResponse = await connection.query( \`SELECT * FROM \${table} WHERE \${attribute} = ?\`, [value] );
    if ( !query ) {
      return { message: \`Datos con id \${value}, no se encuentran en la base de datos\` };
    }

    return { message: "Datos encontrados con exito", data: query };
  };


  /**
   * Cuenta la cantidad de registros en una tabla de la base de datos que cumplen con ciertos criterios.
   * @param {string} table - Nombre de la tabla en la que se realizará el conteo.
   * @param {string} attribute - Nombre del atributo que se utilizará para la condición de conteo.
   * @param {string | number} value - Valor del atributo que se utilizará para la condición de conteo.
   * @returns {Promise<number>} - Promesa que se resuelve con la cantidad de registros que cumplen con los criterios especificados.
   */
  static async countRows( table: string,  attribute?: string,  value?: string | number ): Promise<number>{
    const query = \`SELECT count(*) AS contador FROM \${ table } \${(attribute && value) ? \`WHERE \${ attribute } = ?\` : ''}\`;
    const [ validate ]: SQLResponse = await connection.query(query, [ value ] );
    console.log('validate: ', validate);
    
    return validate[0].contador;
  };


  /**
   * Inserta un nuevo registro en una tabla de la base de datos.
   * @param {string} table - Nombre de la tabla en la que se realizará la inserción.
   * @param {Object} values - Objeto que contiene las columnas y valores a insertar en la nueva fila.
   * @returns {Promise<SQLResponse>} - Promesa que se resuelve con los datos del nuevo registro insertado.
   */
  static async insertToObject( table: string, values:{}): Promise<SQLResponse>{
    const [ data ]: SQLResponse = await connection.query(
      \`INSERT INTO \${table} SET ? ;\`, [values]
    );
    return data;
  };


  /**
   * Inserta múltiples registros en una tabla de la base de datos.
   * @param {string} tableName - Nombre de la tabla en la que se realizará la inserción.
   * @param {Array<object>} dataToInsert - Array de objetos representando los datos a ser insertados.
   * @returns {Promise<void>} - Promesa que se resuelve una vez completada la inserción.
   */
  static async insertBulk(tableName:string, dataToInsert: {}[]): Promise<void>{
    const columns = Object.keys( dataToInsert[0] );
    const keys = columns.join(', ');

    const valuesArray = dataToInsert.map( data => Object.values( data )) 
    await connection.query( \`INSERT INTO \${tableName} (\${keys}) VALUES ?\`, [ valuesArray ] );
  };


  /**
   * Actualiza una fila en la tabla especificada con los nuevos valores proporcionados.
   * @param {string} table - El nombre de la tabla que se va a actualizar.
   * @param {string} attribute - El nombre de la columna que se utilizará como condición en la cláusula WHERE.
   * @param {string | number} id - El valor de la condición en la cláusula WHERE que identifica la fila a actualizar.
   * @param {Object} values - Un objeto que contiene los pares clave-valor de las columnas a actualizar y sus nuevos valores.
   * @returns {Promise<SQLResponse>} - Una promesa que resuelve en el resultado de la operación de actualización.
   * @throws {Error} - Se lanza un error si la operación de actualización no tiene éxito.
   */
  static async updateRow(
    table: string,
    attribute: string,
    id: string | number,
    values: {},
  ): Promise<SQLResponse> {
    const params = Object.keys(values);
    const allValues = [...Object.values(values), id];

    const query = \`UPDATE \${table} SET \${params.join(' = ?, ')} = ? WHERE \${attribute} = ?\`;
    const [ data ]: SQLResponse = await connection.query( query, allValues );
    
    return data ;
  };


  /**
   * Elimina un registro de una tabla de la base de datos basado en un atributo y su valor.
   * @param {string} table - Nombre de la tabla de la que se eliminará el registro.
   * @param {string} attribute - Nombre del atributo que se utilizará para identificar el registro a eliminar.
   * @param {string | number} value - Valor del atributo que se utilizará para identificar el registro a eliminar.
   * @returns {Promise<{ status: boolean; message: string }>} - Promesa que se resuelve con un objeto que indica el resultado de la operación de eliminación y un mensaje descriptivo.
   */
  static async deleteRowTable ( table: string, attribute: string, value: string | number ): Promise<{ data?: SQLResponse; message?: string }> {
    if( await this.countRows(table, attribute, value) === 0 ){
      return { message: \`\${attribute}: \${value}, no se ha encontrado en la tabla: \${table}\` };
    }

    const [ data ]: SQLResponse = await connection.query(\`DELETE FROM \${table} WHERE \${attribute} = ?\`, [ value ]);

    return data;
  };










  // ========================aun no estan completas del todo o tienen errores ==================//
  /**
   * Inserta un nuevo registro en una tabla de la base de datos.
   * @param {string} table - Nombre de la tabla en la que se realizará la inserción.
   * @param {string[]} keys - Array de nombres de columnas en los que se insertarán los valores.
   * @param {(string | number | boolean | null)[]} values - Array de valores correspondientes a las columnas especificadas.
   * @returns {Promise<SQLResponse>} - Promesa que se resuelve con los datos del nuevo registro insertado.
   */
  static insert =async (
    table:string,
    keys: string[],
    values: (string | number | boolean | null)[]
  ): Promise<SQLResponse> => {
    const [ data ]: SQLResponse = await  connection.query(
      \`INSERT INTO \${table} (\${keys}) VALUES ( ? );\`,
      [values]
    );
    return data;
  };

  /**
   * Realiza una inserción masiva de datos en una tabla de la base de datos.
   * @param {string} table - Nombre de la tabla en la que se realizará la inserción. 
   * @param {string[]} keys - Array de nombres de columnas en los que se insertarán los datos.
   * @param {any[][][]} data - Array bidimensional que contiene los valores a ser insertados.
   * @returns {Promise<void>} - Promesa que se resuelve una vez completada la inserción.
   */
  static async sqlBulk(table: string, keys: string[], data: any[][][]): Promise<void>{
    await connection.query(\`INSERT INTO \${table} (\${keys.join(', ')}) VALUES ?;\`, data);
  };

}

export default SqlCrud;
`;

  return data;
};
