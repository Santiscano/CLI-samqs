#!/usr/bin/env node

import "colors";
import { Command } from "commander";

import { newProyect, newResourse, newResourseSql } from './actions/index.js';

// OTRAS LIBRERIAS INTERESANTES PARA DECORAR
// https://www.npmjs.com/package/chalk
// https://www.npmjs.com/package/chalk-animation
// https://www.npmjs.com/package/figlet
// https://www.npmjs.com/package/gradient-string
// https://www.npmjs.com/package/nanospinner

const version = "1.3.13";

const program = new Command();

program // crear nuevo proyecto
  .command('new <schematic>')
  .alias('n')
  .description('CLI para la creacion de proyectos y modulos desde cero, diseñado para express, fastify y nestjs')
  .version(version)
  .action( (schema, resourse, command) => {
    newProyect(schema)
  })



program // generar un recurso - modulo completo o partes de el
  .command('generate <schematic> [resourse]')
  .alias('g')
  .description('Generar un recurso - modulo completo o parte de el')
  .version(version)
  .option('-res, --resourse', 'crea un modulo completo con archivos route, controller, model, interface')
  .option('-ressql, --resourse sql', 'crea un modulo completo con archivos route, controller, model, interface apartir de una tabla sql')
  .option('-resmongo, --resourse mongo', 'crea un modulo completo con archivos route, controller, model, interface apartir de una entidad de mongo')
  .option('-r, --route', 'crea un archivo route')
  .option('-i, --interface', 'crea un archivo de definicion de tipos')
  .option('-c, --controller', 'crea un controlador')
  .option('-mo, --model', 'crea un modelo')
  .option('-mid, --middleware', 'crea un middleware')
  
  .action((schema, table, resourse, command) => {
    !resourse.resourse && console.log('😵‍💫😵‍💫 por favor indica el tipo de recurso que usaras 🥴🥴'.red.bold, '\n si no los conoces escribe Cli-samqs -h');
    !schema && console.log('😵‍💫😵‍💫 por favor indica el nombre que le asigaras al recurso 🥴🥴'.red.bold);
    
    switch (resourse.resourse) {
      case command.parent.args.includes('-res') || command.parent.args.includes('--resourse'):
        newResourse(schema);
      break;
      case command.parent.args.includes('-ressql') || command.parent.args.includes('--resourse sql'):
        newResourseSql(schema);
      break;
      case command.parent.args.includes('-resmongo') || command.parent.args.includes('--resourse mongo'):
        console.log('😓😢 aun no hemos creado este recurso --resourse mongo')
      break;
      case command.parent.args.includes('-r') || command.parent.args.includes('--route'):
        console.log('😓😢 aun no hemos creado este recurso --route')
      break;
      case command.parent.args.includes('-i') || command.parent.args.includes('--interface'):
        console.log('😓😢 aun no hemos creado este recurso --interface')
      break;
      case command.parent.args.includes('-c') || command.parent.args.includes('--controller'):
        console.log('😓😢 aun no hemos creado este recurso --controller')
      break;
      case command.parent.args.includes('-mo') || command.parent.args.includes('--model'):
        console.log('😓😢 aun no hemos creado este recurso --model')
      break;
      case command.parent.args.includes('-mid') || command.parent.args.includes('--middleware'):
        console.log('😓😢 aun no hemos creado este recurso --middleware')
      break;
      default:
        break;
    }
    // console.log('schema',schema);
    // console.log('table',table);
    // console.log('resourse',resourse);
    // console.log('args',command.parent.args)
    // console.log('path',command.parent._scriptPath)
  })

program.parse();
