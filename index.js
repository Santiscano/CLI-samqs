#!/usr/bin/env node

import 'colors';
import { program } from 'commander';
import { expressOptions, inquirerMenu } from './helpers/inquirer.js'

// Define la versión de tu aplicación
program.version('1.1.1');

const main = async () => {
    // Configura la opción --version
    program.parse(process.argv);

    // Si se proporciona la opción --version, commander mostrará la versión y finalizará la ejecución
    if (program.version) {
      return;
    }
    
    console.clear();

    let opt = await inquirerMenu();

    switch (opt) {
        case 'express':
            expressOptions()
        break;

        case 'nestjs':
            console.log('aun no esta desarrollado para nestjs')
        break;

        case 'react vite':
            console.log('aun no esta desarrollado para  react');
        break;

        case 'nextjs':
            console.log('aun no esta desarrollado para  nextjs')
        break;

        case 'angular':
            console.log('aun no esta desarrollado para  angular')
        break;
        
        case 'cancelar':
            console.log('cancelar')
        break;
        
    }
}

main();
