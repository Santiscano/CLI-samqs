import { execSync} from 'child_process';

import inquirer from 'inquirer';
import 'colors';


const question = [
    {
        type: 'list',
        name: 'tool',
        message: '¿Que Herramienta quieres instalar?',
        choices: [
            {
                value: 'express',
                name: `${'1'.green} Express`
            },
            {
                value: 'nestjs',
                name: `${'2'.green} NestJs`
            },
            {
                value: 'react vite',
                name: `${'3'.green} Reactjs Vite`
            },
            {
                value: 'nextjs',
                name: `${'4'.green} NextJs Vercel`
            },
            {
                value: 'angular',
                name: `${'5'.green} Angular Google`
            },
            {
                value: 'cancelar',
                name: `${'0'.green} Cancelar`
            },
        ]
    }
];

const optionsExpress = [
    {
        type: 'list',
        name: 'tool',
        message: '¿Que Herramienta quieres instalar?',
        choices: [
            {
                value: 'javascript',
                name: `${'1'.green} javascript`
            },
            {
                value: 'typescript',
                name: `${'2'.green} typescript`
            },
        ]
    }
]

/**
 * Pregunta principal para seleccionar herramienta a trabajar
 */
export const inquirerMenu = async () => {
    console.log('============================'.green);
    console.log('    Selecciona una opcion'.white);
    console.log('============================'.green);

    const { tool } = await inquirer.prompt(question);

    return tool
};


/**
 * seleccionar opcion si crearlo en js o ts
 */
export const expressOptions = async () => {
    const { tool } = await inquirer.prompt(optionsExpress);
    console.log('tool: ', tool);

    // aqui se crea todo el proyecto.......
}
