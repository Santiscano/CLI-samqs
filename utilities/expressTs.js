import fs from 'fs';
import path from 'path';
import { 
  createAllDatabaseMysql, 
  createApiKey,
  createApiResponse,
  createApiResponseInterface,
  createAuthContextInterface,
  createAuthController,
  createAuthStrategy,
  createConfigPorts, 
  createControllerMongo, 
  createControllerMySql, 
  createCrudMongo,
  createCrudMysql,
  createCrudProcedure, 
  createDateMethods,
  createEditorConfig, 
  createExampleEnv, 
  createFilesExcel, 
  createFilesPdf, 
  createGitIgnore, 
  createIndex,
  createJWT,
  createLogs,
  createLogsInterface,
  createMissingData,
  createModelMongo,
  createModelMySql,
  createMongooseConfig, 
  createMysqlConfig, 
  createNodeMailer, 
  createNumberMethods,
  createPackage, 
  createResStatus,
  createRouteAuth,
  createRouteExample,
  createRoutes, 
  createSendFileTemp,
  createServer, 
  createServerInterface, 
  createSocket,
  createSqlCrud,
  createSqlInterface, 
  createStringMethods,
  createSwagger, 
  createTsConfig,
  createValidateToken,
  createVerifyUserPassword,
} from '../docs/ts/class/index.js';



/**
 * funcion para crear el proyecto con todos sus archivos, escrito en clases
 * @param {*} fileProyectPath ruta de la raiz del proyecto
 * @param {*} nameProyect nombre asignado al proyecto
 */
export const expressTsClass = async ( fileProyectPath, nameProyect, descriptionProyect ) => {
  // ----------------------------ARCHIVOS PRINCIPALES-------------------------------------//
  // crear carpetas principales
  const foldersPrimary = [ '/client', '/logs', '/src', '/temp'  ];
  foldersPrimary.forEach( folder => {
    const folderPath = path.join(fileProyectPath, folder);
    fs.mkdirSync(folderPath);
  });


  // crear archivos configuracion
  const files = [ 
    { route: '.editorconfig', data: createEditorConfig() },
    { route: '.example.env',  data: createExampleEnv() },
    { route: '.gitignore',    data: createGitIgnore() },
    { route: 'package.json',  data: createPackage( nameProyect, descriptionProyect ) },
    { route: 'tsconfig.json', data: createTsConfig() }
  ];
  files.forEach(( { route, data }) => {
    let fullRoute = path.join(fileProyectPath, route);
    fs.writeFileSync( fullRoute, data );
  })

  // --------------------------ARCHIVOS .gitkeep-------------------------------------//
  const logs = path.join(fileProyectPath, '/logs');
  const temp = path.join(fileProyectPath, '/temp');
  fs.writeFileSync(path.join(logs, '.gitkeep'), "");
  fs.writeFileSync(path.join(temp, '.gitkeep'), "");
  // --------------------------ARCHIVOS DENTRO DE SRC--------------------------------//
  const src = path.join(fileProyectPath, '/src');
  // crear carpetas
  const folders = ['/class', '/commands', '/config', '/config/database', '/controllers', '/documentation', '/helpers', '/interfaces', '/middlewares', '/models', '/routes', '/services', 'utilities', 'utilities/PDF', 'utilities/PDF/upload' ];
  folders.forEach(folder => {
    const folderPath = path.join( src, folder );
    fs.mkdirSync(folderPath);
  });


  // crear archivos
  const filesSrc = [
    //* class
    { route: './class/auth.strategy.ts',    data: createAuthStrategy() },

    //! commands
    { route: '/commands/allDatabaseMysql.ts',     data: createAllDatabaseMysql() },
    { route: '/commands/controllerMongo.ts',      data: createControllerMongo() },
    { route: '/commands/controllerMySql.ts',      data: createControllerMySql() },
    { route: '/commands/crudMongo.ts',            data: createCrudMongo() },
    { route: '/commands/crudMysql.ts',            data: createCrudMysql() },
    { route: '/commands/modelMongo.ts',           data: createModelMongo() },
    { route: '/commands/modelMySql.ts',           data: createModelMySql() },
    { route: '/commands/procedure.ts',            data: createCrudProcedure() },

    // config
    { route: '/config/database/mongoose.ts',      data: createMongooseConfig() },
    { route: '/config/database/mysql.ts',         data: createMysqlConfig() },
    { route: '/config/configPorts.ts',            data: createConfigPorts() },
    
    //? controllers - void
    // { route: '/controllers/.gitkeep',             data: '' },
    { route: '/controllers/auth.controller.ts',   data: createAuthController() },

    // documentation
    { route: '/documentation/swagger.ts',         data: createSwagger() },
    
    // helpers  
    { route: '/helpers/apiResponse.ts',           data: createApiResponse() },
    { route: '/helpers/filesExcel.ts',            data: createFilesExcel() },
    { route: '/helpers/filesPdf.ts',              data: createFilesPdf() },
    { route: '/helpers/jwt.ts',                   data: createJWT() },
    { route: '/helpers/logs.utilities.ts',        data: createLogs() },
    { route: '/helpers/missingData.ts',           data: createMissingData() },
    { route: '/helpers/nodeMailer.ts',            data: createNodeMailer() },
    { route: '/helpers/resStatus.ts',             data: createResStatus() },
    { route: '/helpers/sendFileTemp.ts',          data: createSendFileTemp() },
    { route: '/helpers/sockets.ts',               data: createSocket() },
    { route: '/helpers/sqlCrud.ts',               data: createSqlCrud() },
    
    // interfaces
    { route: '/interfaces/apiResponse.d.ts',      data: createApiResponseInterface() },
    { route: '/interfaces/authContext.d.ts',      data: createAuthContextInterface() },
    { route: '/interfaces/logs.d.ts',             data: createLogsInterface() },
    { route: '/interfaces/server.d.ts',           data: createServerInterface() },
    { route: '/interfaces/sql2.d.ts',             data: createSqlInterface() },
    
    //! middlewares
    { route: '/middlewares/apiKey.ts' ,           data: createApiKey() },
    { route: '/middlewares/token.ts' ,            data: createValidateToken() },
    { route: '/middlewares/verifyUserPassword.ts',data: createVerifyUserPassword() },
    
    //? models - void
    { route: '/models/.gitkeep',                  data: '' },
    
    // routes
    { route: '/routes/auth.routes.ts',            data: createRouteAuth() },
    { route: '/routes/example.routes.ts',         data: createRouteExample() },
    { route: 'routes/index.ts',                   data: createRoutes() },
    
    // services
    { route: '/services/index.ts',                data: createServer() },
    
    // utilities
    { route: '/utilities/dateMethods.ts',         data: createDateMethods() },
    { route: '/utilities/numbersMethods.ts',      data: createNumberMethods() },
    { route: '/utilities/stringMethods.ts',       data: createStringMethods() },
    //! utilities/PDF
    //! utilities/PDF/upload

    // index
    { route: 'index.ts',                          data: createIndex() },
  ];
  filesSrc.forEach(( { route, data } ) => {
    let fullRoute = path.join(src, route);
    fs.writeFileSync( fullRoute, data );
  });

  return true;

};


/**
 * funcion express con configuracion en funciones
 */
export const expressTsFn = () => {};
