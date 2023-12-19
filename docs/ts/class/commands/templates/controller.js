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
    /* #swagger.tags = ['\${tableName}'] #swagger.description = 'trae tod@s l@s \${tableName} segun parametros' */
    const page = parseInt(req.params.page) || 1;
    const limit = parseInt(req.params.limit) || 50;
    const offset = (page - 1) * limit || 0;
    const orderBy = req.params.orderby || \${tablePascal}Controller.pktable;
    const sort = req.params.sort || 'ASC';
    
    try {
      const allData = await \${tablePascal}Model.getAll\${tablePascal}( \${tablePascal}Controller.table, offset, limit, orderBy, sort  );
      /* #swagger.responses[200] = { description: 'Response success', schema: { $ref: '#/definitions/\${tableName}Res' }} */
      return res.status(resStatus.success).json(ApiResponses.success(allData));
    } catch (error) {
      /* #swagger.responses[500] = { description: 'Error server', schema: { $ref: '#/definitions/unsuccessfully' }} */
      return res.status(resStatus.serverError).json(ApiResponses.unsuccessfully( error ));
    }
  };

  // COUNT ALL ITEMS
  static async count\${tablePascal}(req: Request, res: Response) {
    /* #swagger.tags = ['\${tableName}'] #swagger.description = 'cuenta tod@s l@s \${tableName}' */
    try {
      const count = await \${tablePascal}Model.count\${tablePascal}( \${tablePascal}Controller.table );
      return count
        ? res.status(resStatus.success).json(ApiResponses.success( count, "cantidad recuperada" ))
        : res.status(resStatus.noContent).json(ApiResponses.errorMessage( "datos no encontrados" ))
        /* #swagger.responses[200] = { description: 'Response success', schema: { $ref: '#/definitions/\${tableName}Res' }} */
        /* #swagger.responses[417] = { description: 'noContent', schema: { $ref: '#/definitions/errorMessage' }} */
    } catch (error) {
      /* #swagger.responses[500] = { description: 'Error server', schema: { $ref: '#/definitions/unsuccessfully' }} */
      return res.status(resStatus.serverError).json(ApiResponses.unsuccessfully( error ));
    }
  };

  // GET ITEM BY ID
  static async get\${tablePascal}ById(req: Request, res: Response) {
    /* #swagger.tags = ['\${tableName}'] #swagger.description = 'trae el/la \${tableName} segun id' */
    /*  #swagger.parameters['id'] = { description: 'id de \${tableName} a buscar' } */
    try {
      const dataById = await \${tablePascal}Model.get\${tablePascal}ById( \${tablePascal}Controller.table, \${tablePascal}Controller.pktable, req.params.id );
      return dataById.data
        ? res.status(resStatus.success).json(ApiResponses.success( dataById.data, dataById.message ))
        : res.status(resStatus.noContent).json(ApiResponses.errorMessage( dataById.message! ))
        /* #swagger.responses[200] = { description: 'Response success', schema: { $ref: '#/definitions/\${tableName}Res' }} */
        /* #swagger.responses[417] = { description: 'noContent', schema: { $ref: '#/definitions/errorMessage' }} */
    } catch (error) {
      return res.status(resStatus.serverError).json(ApiResponses.unsuccessfully( error ));
    }
  };

  // CREATE ITEM
  static async post\${tablePascal}(req: Request, res: Response) {
    /* #swagger.tags = ['\${tableName}'] #swagger.description = 'crea un nuevo \${tableName} segun el body' */
    /*  #swagger.parameters['body'] = { in: 'body', description: 'datos para crear un@ \${tableName}', schema: { $ref: '#/definitions/\${tableName}' }} */
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
        /* #swagger.responses[200] = { description: 'Response success', schema: { $ref: '#/definitions/\${tableName}Res' }} */
        /* #swagger.responses[422] = { description: 'UnCompleted', schema: { $ref: '#/definitions/uncompleted' }} */
        /* #swagger.responses[417] = { description: 'noContent', schema: { $ref: '#/definitions/errorMessage' }} */
    } catch (error) {
      /* #swagger.responses[500] = { description: 'Error server', schema: { $ref: '#/definitions/unsuccessfully' }} */
      return res.status(resStatus.serverError).json(ApiResponses.unsuccessfully( error ));
    }
  };

  // CREATE BULK ITEMS
  static async bulk\${tablePascal}(req: Request, res: Response) {
    /* #swagger.tags = ['\${tableName}'] #swagger.description = 'crea uno o muchos \${tableName} segun el body' */
    /*  #swagger.parameters['body'] = { in: 'body', description: 'datos para crear uno o muchos \${tableName}', schema: { $ref: '#/definitions/\${tableName}' }} */
    const { bulkDataInsert } = req.body;

    try {
      const missing = MissingData.missingDataBulk( bulkDataInsert );
      if(missing.error) return res.status(resStatus.unCompleted).json(ApiResponses.uncompleted( missing.missing ))

      const bulkData = await \${tablePascal}Model.bulk\${tablePascal}( \${tablePascal}Controller.table, bulkDataInsert );
      return bulkData.data
        ? res.status(resStatus.success).json(ApiResponses.success(bulkData.data, bulkData.message))
        : res.status(resStatus.unCompleted).json(ApiResponses.errorMessage( bulkData.message ))
        /* #swagger.responses[200] = { description: 'Response success', schema: { $ref: '#/definitions/\${tableName}Res' }} */
        /* #swagger.responses[422] = { description: 'UnCompleted', schema: { $ref: '#/definitions/uncompleted' }} */
      } catch (error) {
      /* #swagger.responses[500] = { description: 'Error server', schema: { $ref: '#/definitions/unsuccessfully' }} */
      return res.status(resStatus.serverError).json(ApiResponses.unsuccessfully( error ));
    }
  }

  // UPDATE ITEM
  static async put\${tablePascal}(req: Request, res: Response) {
    /* #swagger.tags = ['\${tableName}'] #swagger.description = 'actualiza toda la informacion de un \${tableName} segun body' */
    /*  #swagger.parameters['id'] = { description: 'id de \${tableName} a modificar' } */
    /*  #swagger.parameters['body'] = { in: 'body', description: 'todos los datos necesarios para modificar un@ \${tableName}', schema: { $ref: '#/definitions/\${tableName}' }} */
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
        /* #swagger.responses[200] = { description: 'Response success', schema: { $ref: '#/definitions/\${tableName}Res' }} */
        /* #swagger.responses[422] = { description: 'UnCompleted', schema: { $ref: '#/definitions/errorMessage' }} */
      } catch (error) {
      /* #swagger.responses[500] = { description: 'Error server', schema: { $ref: '#/definitions/unsuccessfully' }} */
      return res.status(resStatus.serverError).json(ApiResponses.unsuccessfully( error ));
    }
  };

  // UPDATE ITEM
  static async patch\${tablePascal}(req: Request, res: Response) {
    /* #swagger.tags = ['\${tableName}'] #swagger.description = 'actualiza la informacion de un \${tableName} segun lo que reciba en el body' */
    /*  #swagger.parameters['id'] = { description: 'id de \${tableName} a modificar' } */
    /*  #swagger.parameters['body'] = { in: 'body', description: 'todos los datos posibles para modificar un@ \${tableName}', schema: { $ref: '#/definitions/\${tableName}' }} */
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
        /* #swagger.responses[200] = { description: 'Response success', schema: { $ref: '#/definitions/\${tableName}Res' }} */
        /* #swagger.responses[422] = { description: 'UnCompleted', schema: { $ref: '#/definitions/errorMessage' }} */
      } catch (error) {
      /* #swagger.responses[500] = { description: 'Error server', schema: { $ref: '#/definitions/unsuccessfully' }} */
      return res.status(resStatus.serverError).json(ApiResponses.unsuccessfully( error ));
    }
  };

  // DELETE ITEM
  static async delete\${tablePascal}(req: Request, res: Response) {
    /* #swagger.tags = ['\${tableName}'] #swagger.description = 'elimina el/la \${tableName} con el id que llega por parametros' */
    /*  #swagger.parameters['id'] = { description: 'id de \${tableName} a eliminar' } */
    try {
      const dataById = await \${tablePascal}Model.delete\${tablePascal}( \${tablePascal}Controller.table, \${tablePascal}Controller.pktable, req.params.id );
      /* #swagger.responses[200] = { description: 'Response success', schema: { $ref: '#/definitions/\${tableName}Res' }} */
      return res.status(resStatus.success).json(ApiResponses.success( null, dataById.message ))
    } catch (error) {
      /* #swagger.responses[500] = { description: 'Error server', schema: { $ref: '#/definitions/unsuccessfully' }} */
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
