#!/usr/bin/env node

import path from 'path';
import "colors";
import { Command } from "commander";

import { newProyect, resourse } from './actions/index.js';

// OTRAS LIBRERIAS INTERESANTES PARA DECORAR
// https://www.npmjs.com/package/chalk
// https://www.npmjs.com/package/chalk-animation
// https://www.npmjs.com/package/figlet
// https://www.npmjs.com/package/gradient-string
// https://www.npmjs.com/package/nanospinner

const version = "1.3.3"
const program = new Command();

program // crear nuevo proyecto
  .command('new <schematic>')
  .alias('n')
  .description('CLI para la creacion de proyectos y modulos desde cero, diseñado para express, fastify y nestjs')
  .version(version)
  // .action( () => console.log('todo melo') )
  .action( (schema, resourse, command) => {
    newProyect(schema)
  })



program // generar un recurso - modulo completo o partes de el
  .command('generate <schematic> [resourse]')
  .alias('g')
  .description('CLI para la creacion de proyectos y modulos desde cero, diseñado para express, fastify y nestjs')
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
        resourse(schema);
      break;
      case command.parent.args.includes('-ressql') || command.parent.args.includes('--resourse sql'):
        console.log('entramos al recurso --resourse sql')
      break;
      case command.parent.args.includes('-resmongo') || command.parent.args.includes('--resourse mongo'):
        console.log('entramos al recurso --resourse mongo')
      break;
      case command.parent.args.includes('-r') || command.parent.args.includes('--route'):
        console.log('entramos al recurso --route')
      break;
      case command.parent.args.includes('-i') || command.parent.args.includes('--interface'):
        console.log('entramos al recurso --interface')
      break;
      case command.parent.args.includes('-c') || command.parent.args.includes('--controller'):
        console.log('entramos al recurso --controller')
      break;
      case command.parent.args.includes('-mo') || command.parent.args.includes('--model'):
        console.log('entramos al recurso --model')
      break;
      case command.parent.args.includes('-mid') || command.parent.args.includes('--middleware'):
        console.log('entramos al recurso --middleware')
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
