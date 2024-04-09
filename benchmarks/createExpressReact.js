import fs from 'fs';
import path from 'path';

import { createProyectExpressTsClass } from './createExpress.js';
import { createProyectReactTsClass } from './createReact.js';

export const createProyectExpressReactTsClass = async (fileProyectPath, nameProyect, descriptionProyect) => {
  // ----------------------------PROYECTO EXPRESS-------------------------------------//
  await createProyectExpressTsClass(fileProyectPath, nameProyect, descriptionProyect);
  // --------------------------ARCHIVOS DENTRO DE CLIENT--------------------------------//
  await createProyectReactTsClass(fileProyectPath, nameProyect, descriptionProyect);
};
