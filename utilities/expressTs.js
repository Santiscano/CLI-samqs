import fs from 'fs';
import path from 'path';
import { 
  createAllTableCrud, 
  createConfigPorts, 
  createEditorConfig, 
  createExampleEnv, 
  createGitIgnore, 
  createIndex, 
  createMongooseConfig, 
  createMysqlConfig, 
  createOneTableCrud, 
  createPackage, 
  createProcedure, 
  createRoutes, 
  createServer, 
  createServerInterface, 
  createSocket, 
  createSqlInterface, 
  createSwagger, 
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
  const folders = ['/class', '/commands', '/config', '/config/database', '/controllers', '/documentation', '/helpers', '/interfaces', '/middlewares', '/models', '/routes', '/services', 'utilities'];
  folders.forEach(folder => {
    const folderPath = path.join( src, folder );
    fs.mkdirSync(folderPath);
  });


  // crear archivos
  const filesSrc = [
    //* class
    { route: '/class/.gitkeep',                data: '' },
    
    //! commands
    // { route: '/commands/allTableCrud.js',     data: createAllTableCrud() },
    // { route: '/commands/oneTableCrud.js',     data: createOneTableCrud() },
    // { route: '/commands/procedure.js',        data: createProcedure() },

    // config
    { route: '/config/database/mysql.ts',     data: createMysqlConfig() },
    { route: '/config/database/mongoose.ts',  data: createMongooseConfig() },
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
    
    //? models - void
    { route: '/models/.gitkeep',              data: '' },
    
    // routes
    { route: 'routes/index.ts',               data: createRoutes() },
    { route: '/routes/example.ts',            data: createRouteExample() },
    
    // services
    { route: '/services/index.ts',            data: createServer() },
    
    //! utilities
    
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
