import "dotenv/config";
import { Request, Response, NextFunction } from "express";

import { API_KEY } from "../config/configPorts";
import { resStatus } from "../helpers/resStatus";
import ApiResponses from "../helpers/apiResponse";


class ApiKeys {
  constructor(){}

  validateApikey = ( req: Request, res: Response, next: NextFunction ) => {
    const { api_key } = req.headers;
    try{
      if( api_key !== API_KEY ) {
        return res
          .status(resStatus.unauthorized)
          .json(ApiResponses.unauthorized())
      }
      return next();
    } catch(error){
      console.log('error: ', error);
    }
  };
};

export default ApiKeys;

