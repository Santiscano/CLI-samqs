import { execSync} from 'child_process';

import inquirer from 'inquirer';
import 'colors';

import { optionsExpress, paradigmExpress, question, readInput } from './questions.js';
import { express } from './express.js';


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
    const { tool } = await inquirer.prompt(optionsExpress); // js o ts

    const { paradigm } = await inquirer.prompt(paradigmExpress) // paradigma de clases o funciones

    const { nameProyect } = await readInput('nameProyect', 'Ingresa el nombre del proyecto:'.blue.italic.bold);

    await express(tool, paradigm, nameProyect);
}
