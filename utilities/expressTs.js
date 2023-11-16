import fs from 'fs';
import path from 'path';
import { 
  createAllDatabaseMysql, 
  createApiKey,
  createConfigPorts, 
  createCrudMongo,
  createCrudMysql,
  createCrudProcedure, 
  createEditorConfig, 
  createExampleEnv, 
  createGitIgnore, 
  createIndex, 
  createMongooseConfig, 
  createMysqlConfig, 
  createOn, 
  createPackage, 
  createRoutes, 
  createServer, 
  createServerInterface, 
  createSocket, 
  createSqlInterface, 
  createSwagger, 
  createToken,
  createTsConfig
} from '../docs/ts/class/index.js';
import { createRouteExample } from '../docs/ts/class/routeExample.js';



/**
 * funcion para crear el proyecto con todos sus archivos, escrito en clases
 * @param {*} fileProyectPath ruta de la raiz del proyecto
 * @param {*} nameProyect nombre asignado al proyecto
 */
export const expressTsClass = async ( fileProyectPath, nameProyect ) => {
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
    { route: 'package.json',  data: createPackage(nameProyect) },
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
  const folders = ['/class', '/commands', '/config', '/config/database', '/controllers', '/documentation', '/helpers', '/interfaces', '/middlewares', '/models', '/routes', '/services', 'utilities', 'utilities/PDF', 'utilities/PDF/upload', 'utilities/SQL' ];
  folders.forEach(folder => {
    const folderPath = path.join( src, folder );
    fs.mkdirSync(folderPath);
  });


  // crear archivos
  const filesSrc = [
    //* class
    { route: '/class/.gitkeep',                data: '' },
    
    //! commands
    { route: '/commands/allDatabaseMysql.ts', data: createAllDatabaseMysql() },
    { route: '/commands/crudMongo.ts',        data: createCrudMongo() },
    { route: '/commands/crudMysql.ts',        data: createCrudMysql() },
    { route: '/commands/procedure.js',        data: createCrudProcedure() },

    // config
    { route: '/config/database/mongoose.ts',  data: createMongooseConfig() },
    { route: '/config/database/mysql.ts',     data: createMysqlConfig() },
    { route: '/config/configPorts.ts',        data: createConfigPorts() },
    
    //? controllers - void
    { route: '/controllers/.gitkeep',         data: '' },

    // documentation
    { route: '/documentation/swagger.ts',     data: createSwagger() },
    
    // helpers  
    { route: '/helpers/sockets.ts',           data: createSocket() },
    
    // interfaces
    { route: '/interfaces/server.d.ts',       data: createServerInterface() },
    { route: '/interfaces/sql2.d.ts',         data: createSqlInterface() },
    
    //! middlewares
    { route: '/middlewares/apiKey.ts' ,       data: createApiKey() },
    { route: '/middlewares/token.ts' ,        data: createToken() },
    
    //? models - void
    { route: '/models/.gitkeep',              data: '' },
    
    // routes
    { route: '/routes/example.ts',            data: createRouteExample() },
    { route: 'routes/index.ts',               data: createRoutes() },
    
    // services
    { route: '/services/index.ts',            data: createServer() },
    
    //! utilities
    { route: '/utilities/apiResponse.ts',     data: '' },
    { route: '/utilities/dateMethods.ts',     data: '' },
    { route: '/utilities/logs.utilities.ts',  data: '' },
    { route: '/utilities/missingData.ts',     data: '' },
    { route: '/utilities/numbersMethods.ts',  data: '' },
    { route: '/utilities/resStatus.ts',       data: '' },
    { route: '/utilities/stringMethods.ts',   data: '' },
    //! utilities/PDF
    //! utilities/PDF/upload
    //! utilities/SQL
    
    // index
    { route: 'index.ts',                      data: createIndex() },
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
