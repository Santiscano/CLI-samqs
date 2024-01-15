import inquirer from 'inquirer';
import 'colors';

import { optionsExpress, paradigmExpress, question, readInput } from './questions.js';
import { express } from './express.js';


/**
 * Pregunta principal para seleccionar herramienta a trabajar
 */
export const inquirerMenu = async () => {
    console.log('================================'.green);
    console.log('    Selecciona una tecnologia'.white);
    console.log('================================'.green);

    const { tool } = await inquirer.prompt(question);

    return tool
};


/**
 * seleccionar opcion si crearlo en js o ts
 */
export const expressOptions = async () => {
    const { tool } = await inquirer.prompt(optionsExpress); // js o ts

    const { paradigm } = await inquirer.prompt(paradigmExpress) // paradigma de clases o funciones

    const { descriptionProyect } = await readInput('descriptionProyect', 'Ingresa la descripcion del proyecto:'.blue.italic.bold);

    return { tool, paradigm, descriptionProyect };

    
}
