import { Request, Response } from "express";

import { AuthContext, SignEmail, SignFacebook, SignGithub, SignGoogle } from "../class/auth.strategy";
import { Strategy } from "../interfaces/authContext";
import { resStatus } from "../helpers/resStatus";
import ApiResponses from "../helpers/apiResponse";

const optionsMethodSign = {
  "email": new SignEmail(),
  "google": new SignGoogle(),
  "facebook": new SignFacebook(),
  "github": new SignGithub(),
}
type MethodType = keyof typeof optionsMethodSign;

class AuthController {

  static async signup(req: Request, res: Response) {
    /* #swagger.tags = ['auth'] 
      #swagger.description = 'Endpoint to sign in a specific user' */
    try {
      const { methodSign } = req.body;

      if (!Object.keys(optionsMethodSign).includes(methodSign)) {
        return res.status(resStatus.badRquest).json(ApiResponses.errorMessage("wrong entry method") )
      };
      
      // instanciamos el signup
      const sign = new AuthContext(optionsMethodSign[methodSign as MethodType] as Strategy)
      const token = sign.signup(req.body);
      
      return res
        .status(resStatus.success)
        .json( ApiResponses.success({token}, "¿sera este el fin del hombre araña?"))
    } catch (error){
      console.log('error: ', error);
      return res
        .status(resStatus.serverError)
        .json(ApiResponses.unsuccessfully(error))
    }
  }

  static async signin(req: Request, res: Response) {
    /* #swagger.tags = ['auth'] 
      #swagger.description = 'Endpoint to sign in a specific user' */
    try {
      res.json({msg: "pasaste la autorizacion"})
    } catch (error) {
      console.log('error: ', error);
    }
  }
}

export default AuthController;

