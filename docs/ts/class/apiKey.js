
export const createApiKey = () => {
  const data = `import "dotenv/config";
import { Request, Response, NextFunction } from "express";
import { resStatus } from "../utilities/resStatus";
import ApiResponses from "../utilities/apiResponse";

class ApiKeys {
  constructor(){}

  validateApikey = ( req: Request, res: Response, next: NextFunction ) => {
    const { api_key } = req.headers;
    try{
      if( api_key !== process.env.API_KEY ) {
        return res
          .status(resStatus.unauthorized)
          .json(ApiResponses.unauthorized)
      }
      return next();
    } catch(error){
      console.log('error: ', error);
    }
  };
};

export default ApiKeys;`;

  return data;
};
