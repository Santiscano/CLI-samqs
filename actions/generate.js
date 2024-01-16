import { createSpinner } from 'nanospinner';
import { expressOptionsResourse, inquirerMenu } from '../helpers/inquirer.js';
import { expressResourse } from '../utilities/express.js';


export const resourse = async (nameResourse) => {

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

export const resourseSql = async () => {};
export const resourseMongo = async () => {};
export const genRoute = async () => {};
export const genInterface = async () => {};
export const genController = async () => {};
export const genModel = async () => {};
export const genMiddleware = async () => {};
