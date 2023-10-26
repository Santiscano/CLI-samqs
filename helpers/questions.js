import inquirer from 'inquirer';

export const question = [
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

export const optionsExpress = [
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
];

export const readInput = async (nameInput, message) => {
    
    const question = [
        {
            type: 'input',
            name: nameInput,
            message,
            validate( value ) {
                if( value.length === 0 ) {
                    return 'Por favor ingrese un valor';
                }
                return true;
            }
        }
    ];

    const result = await inquirer.prompt(question);
    return result;
}