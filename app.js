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
            console.log('nestjs')
        break;

        case 'react vite':
            console.log('react');
        break;

        case 'nextjs':
            console.log('nextjs')
        break;

        case 'angular':
            console.log('angular')
        break;
        
        case 'cancelar':
            console.log('cancelar')
        break;
        
    }
}

main();