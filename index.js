#!/usr/bin/env node

import "colors";
import { createSpinner } from 'nanospinner';

import { expressOptions, inquirerMenu } from "./helpers/inquirer.js";

// OTRAS LIBRERIAS INTERESANTES PARA DECORAR
// https://www.npmjs.com/package/chalk
// https://www.npmjs.com/package/chalk-animation
// https://www.npmjs.com/package/figlet
// https://www.npmjs.com/package/gradient-string
// https://www.npmjs.com/package/nanospinner

const main = async () => {
  
  const spinner = createSpinner('validando desarrollo de maqueta');

  console.clear();

  let opt = await inquirerMenu();

  switch (opt) {
    case "express":
      expressOptions();
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

main();
