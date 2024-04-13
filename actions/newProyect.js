import { expressProyect } from '../buildkite/express.js';
import { expressReactProyect } from '../buildkite/expressReact.js';
import { reactProyect } from '../buildkite/react.js';

import { expressOptions, inquirerMenu } from '../helpers/inquirer.js';

export const newProyect = async ( nameProyect ) => {
  
  console.clear();
  
  let optionTech = await inquirerMenu(); // express, express-react
  if (optionTech == "cancelar") {
    return
  }
  let { tool, paradigm, descriptionProyect } = await expressOptions(); // js,ts - class,function, descripcion

  switch (optionTech) {
    case "express":
      await expressProyect(tool, paradigm, nameProyect, descriptionProyect );
    break;

    case "react":
      await reactProyect( tool, paradigm, nameProyect, descriptionProyect );
    break;

    case "express-react":
      await expressReactProyect(tool, paradigm, nameProyect, descriptionProyect);
    break;


















    case "fastify":
      setTimeout(() => {
        spinner.stop({ text: `💀💀💀 Aun no esta desarrollado para fastify`});
      }, 2000)
      break;
  
    case "nestjs":
      setTimeout(() => {
        spinner.stop({ text: `💀💀💀 Aun no esta desarrollado para nestjs`});
      }, 2000)
      break;

    case "react vite":
      setTimeout(() => {
        spinner.stop({ text: `💀💀💀 Aun no esta desarrollado para react vite`});
      }, 2000)
      break;

    case "nextjs":
      setTimeout(() => {
        spinner.stop({ text: `💀💀💀 Aun no esta desarrollado para nextjs`});
      }, 2000)
      break;

    case "angular":
      setTimeout(() => {
        spinner.stop({ text: `💀💀💀 Aun no esta desarrollado para angular`});
      }, 2000)
      break;

    case "cancelar":
      spinner.stop({ text: `😢😟 Vuelve pronto`});
      break;
  }
};
