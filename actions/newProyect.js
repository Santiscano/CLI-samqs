import { createSpinner } from 'nanospinner';

import { expressProyect } from '../utilities/express.js';
import { expressOptions, inquirerMenu } from '../helpers/inquirer.js';

export const newProyect = async ( nameProyect ) => {
  
  const spinner = createSpinner('validando desarrollo de maqueta');

  console.clear();

  let optionTech = await inquirerMenu();

  switch (optionTech) {
    case "express":
      let { tool, paradigm, descriptionProyect } = await expressOptions();
      await expressProyect(tool, paradigm, nameProyect, descriptionProyect );
    break;

    case "fastify":
      spinner.start();
      setTimeout(() => {
        spinner.stop({ text: `💀💀💀 Aun no esta desarrollado para fastify`});
      }, 2000)
      break;

    case "nestjs":
      spinner.start();
      setTimeout(() => {
        spinner.stop({ text: `💀💀💀 Aun no esta desarrollado para nestjs`});
      }, 2000)
      break;

    case "react vite":
      spinner.start();
      setTimeout(() => {
        spinner.stop({ text: `💀💀💀 Aun no esta desarrollado para react vite`});
      }, 2000)
      break;

    case "nextjs":
      spinner.start();
      setTimeout(() => {
        spinner.stop({ text: `💀💀💀 Aun no esta desarrollado para nextjs`});
      }, 2000)
      break;

    case "angular":
      spinner.start();
      setTimeout(() => {
        spinner.stop({ text: `💀💀💀 Aun no esta desarrollado para angular`});
      }, 2000)
      break;

    case "cancelar":
      spinner.stop({ text: `😢😟 Vuelve pronto`});
      break;
  }
};
