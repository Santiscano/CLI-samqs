#!/usr/bin/env node

import 'colors';

import { expressOptions, inquirerMenu } from './helpers/inquirer.js'

const main = async () => {
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
