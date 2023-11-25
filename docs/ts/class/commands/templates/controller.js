export const createControllerTemplate = () => {
  const data = `export const fileContentController = ( 
    tableName:string, 
    tableCamel:string, 
    tablePascal:string, 
    listColumnsWithOutId:string,
  ) => {
  return \`import { Request, Response } from "express";
import \${tablePascal}Model from "../models/\${tableCamel}.model";

import { resStatus } from "../helpers/resStatus";
import ApiResponses from "../helpers/apiResponse";
import MissingData from "../helpers/missingData";

import { Type\${tablePascal} } from '../interfaces/\${tableCamel}';

class \${tablePascal}Controller {
  static table: string = "\${tableName}";
  static pktable: string = "id\${tableName}";

  // GET ALL ITEMS
  static async getAll\${tablePascal}(req: Request, res: Response) {
    const page = parseInt(req.params.page) || 1;
    const limit = parseInt(req.params.limit) || 50;
    const offset = (page - 1) * limit || 0;
    const orderBy = req.params.orderby || \${tablePascal}Controller.pktable;
    const sort = req.params.sort || 'ASC';
    
    try {
      const allData = await \${tablePascal}Model.getAll\${tablePascal}( \${tablePascal}Controller.table, offset, limit, orderBy, sort  );
      return res.status(resStatus.success).json(ApiResponses.success(allData));
    } catch (error) {
      return res.status(resStatus.serverError).json(ApiResponses.unsuccessfully( error ));
    }
  };

  // COUNT ALL ITEMS
  static async count\${tablePascal}(req: Request, res: Response) {
    try {
      const count = await \${tablePascal}Model.count\${tablePascal}( \${tablePascal}Controller.table );
      return count
        ? res.status(resStatus.success).json(ApiResponses.success( count, "cantidad recuperada" ))
        : res.status(resStatus.noContent).json(ApiResponses.errorMessage( "datos no encontrados" ))
    } catch (error) {
      return res.status(resStatus.serverError).json(ApiResponses.unsuccessfully( error ));
    }
  };

  // GET ITEM BY ID
  static async get\${tablePascal}ById(req: Request, res: Response) {
    try {
      const dataById = await \${tablePascal}Model.get\${tablePascal}ById( \${tablePascal}Controller.table, \${tablePascal}Controller.pktable, req.params.id );
      return dataById.data
        ? res.status(resStatus.success).json(ApiResponses.success( dataById.data, dataById.message ))
        : res.status(resStatus.noContent).json(ApiResponses.errorMessage( dataById.message! ))
    } catch (error) {
      return res.status(resStatus.serverError).json(ApiResponses.unsuccessfully( error ));
    }
  };

  // CREATE ITEM
  static async post\${tablePascal}(req: Request, res: Response) {
    const { \${listColumnsWithOutId} } = req.body;
    const validate: Type\${tablePascal} = { \${listColumnsWithOutId} };
    const data: Type\${tablePascal} = { \${listColumnsWithOutId} };
    
    try {
      const missing = MissingData.missingData(validate);
      if(missing.error) return res.status(resStatus.unCompleted).json(ApiResponses.uncompleted(missing.missing));
      
      const postData = await \${tablePascal}Model.post\${tablePascal}( \${tablePascal}Controller.table, data );
      const idData = postData.data.insertId
      return postData.data 
        ? res.status(resStatus.success).json( ApiResponses.success({ idData, ...data }, postData.message ))
        : res.status(resStatus.unCompleted).json( ApiResponses.errorMessage( postData.message ))
    } catch (error) {
      return res.status(resStatus.serverError).json(ApiResponses.unsuccessfully( error ));
    }
  };

  // CREATE BULK ITEMS
  static async bulk\${tablePascal}(req: Request, res: Response) {
    const { bulkDataInsert } = req.body;

    try {
      const missing = MissingData.missingDataBulk( bulkDataInsert );
      if(missing.error) return res.status(resStatus.unCompleted).json(ApiResponses.uncompleted( missing.missing ))

      const bulkData = await \${tablePascal}Model.bulk\${tablePascal}( \${tablePascal}Controller.table, bulkDataInsert );
      return bulkData.data
        ? res.status(resStatus.success).json(ApiResponses.success(bulkData.data, bulkData.message))
        : res.status(resStatus.unCompleted).json(ApiResponses.errorMessage( bulkData.message ))
    } catch (error) {
      return res.status(resStatus.serverError).json(ApiResponses.unsuccessfully( error ));
    }
  }

  // UPDATE ITEM
  static async put\${tablePascal}(req: Request, res: Response) {
    const { \${listColumnsWithOutId} } = req.body;
    const id\${tableName} = req.params.id;
    const data: Type\${tablePascal} = { \${listColumnsWithOutId} };
    
    try {
      const missing = MissingData.missingData({...data, id\${tableName} });
      if(missing.error) return res.status(resStatus.unCompleted).json(ApiResponses.uncompleted(missing.missing));

      const putData = await \${tablePascal}Model.put\${tablePascal}( \${tablePascal}Controller.table, \${tablePascal}Controller.pktable, data, id\${tableName} );
      return putData.data
        ? res.status(resStatus.success).json(ApiResponses.success( putData.data, putData.message ))
        : res.status(resStatus.unCompleted).json(ApiResponses.errorMessage( putData.message ))
    } catch (error) {
      return res.status(resStatus.serverError).json(ApiResponses.unsuccessfully( error ));
    }
  };

  // UPDATE ITEM
  static async patch\${tablePascal}(req: Request, res: Response) {
    const { \${listColumnsWithOutId} } = req.body;
    const id\${tableName} = req.params.id;
    const data = MissingData.notEmptyToObjet({ \${listColumnsWithOutId} });

    try {
      const missing = MissingData.missingData({ id\${tableName} });
      if(missing.error) return res.status(resStatus.unCompleted).json(ApiResponses.uncompleted(missing.missing));

      const patchData = await \${tablePascal}Model.patch\${tablePascal}( \${tablePascal}Controller.table, \${tablePascal}Controller.pktable, data, id\${tableName} );
      return patchData.data
        ? res.status(resStatus.success).json(ApiResponses.success( patchData.data, patchData.message ))
        : res.status(resStatus.unCompleted).json(ApiResponses.errorMessage( patchData.message ))
    } catch (error) {
      return res.status(resStatus.serverError).json(ApiResponses.unsuccessfully( error ));
    }
  };

  // DELETE ITEM
  static async delete\${tablePascal}(req: Request, res: Response) {
    try {
      const dataById = await \${tablePascal}Model.delete\${tablePascal}( \${tablePascal}Controller.table, \${tablePascal}Controller.pktable, req.params.id );
      return res.status(resStatus.success).json(ApiResponses.success( null, dataById.message ))
    } catch (error) {
      return res.status(resStatus.serverError).json(ApiResponses.unsuccessfully( error ));
    }
  };

};

export default \${tablePascal}Controller;
\`;
};



`;
  return data;
};
