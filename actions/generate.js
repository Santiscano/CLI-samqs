import { expressOptionsResourse, inquirerMenu } from '../helpers/inquirer.js';
import { expressResourse, expressResourseSql } from '../utilities/express.js';


export const newResourse = async (nameResourse) => {

  let optionTech = await inquirerMenu();

  switch (optionTech) {
    case "express":
      const { tool, paradigm } = await expressOptionsResourse();
      expressResourse(tool, paradigm, nameResourse )

    break;
    case "fastify":
    break;
    case "nestjs":
    break;
  }
};
export const newResourseMongo = async () => {};
export const newResourseSql = async (nameResourse) => {
  let optionTech = await inquirerMenu();

  switch (optionTech) {
    case "express":
      const { tool, paradigm } = await expressOptionsResourse();
      expressResourseSql(tool, paradigm, nameResourse );

    break;
    case "fastify":
    break;
    case "nestjs":
    break;
  }
};

export const genController = async () => {};
export const genInterface = async () => {};
export const genMiddleware = async () => {};
export const genModel = async () => {};
export const genRoute = async () => {};
