
export const createSendFileTemp = () => {
  const data = '// in progress ';

  return data;
}

/**
 * Send File Temporal
 * 
 * import { Request, Response } from "express";
import path from "path";
import { missingData } from "../Helpers/missingData";
import { uncompleted, unsuccessfully } from "../Helpers/response";

// ENTREGAR UN ARCHIVO
export const sendFile = async (req: Request, res: Response) => {
  const { fileName } = req.params;
  try {
    const missing = missingData(fileName);
    if (missing.error)
      return res.status(422).json(uncompleted(missing.missing));
    // @ts-ignore
    return res
      .status(200)
      .sendFile(path.join(__dirname, `../Temp/${fileName}`));
  } catch (error) {
    return res.status(512).json(unsuccessfully(error));
  }
};
 */


