import { Request, Response, NextFunction } from "express";

import JWT from "../helpers/jwt";
import { resStatus } from "../helpers/resStatus";
import ApiResponses from "../helpers/apiResponse";


class ValidateToken {

  /**
   * Middleware para la autenticación con tokens.
   * @example router.get( "/products", ValidateToken.auth, (req,res) => res.json() )
   * @param req - Objeto de solicitud (Request) de Express.
   * @param res - Objeto de respuesta (Response) de Express.
   * @param next - Función para pasar la solicitud al siguiente middleware.
   * @returns Llama a la función 'next()' si la autenticación es exitosa.
   * @throws Retorna un JSON de error si la verificación del token falla.
   */
  static auth(req: Request, res: Response, next: NextFunction){
    try {
      const token = req.headers.authorization?.split(" ")[1];
      const verify = JWT.verifyToken(token);
      if(verify.name === "JsonWebTokenError"){
        return res.status(resStatus.unauthorized).json(ApiResponses.unauthorized());
      }
      return next();
    } catch (error) {
      return res.status(resStatus.serverError).json(ApiResponses.unsuccessfully(error));
    }
  }
}

export default ValidateToken

// como utilizar auth
// import ValidateToken from "../middlewares/token.ts"
// router.get( "/products", ValidateToken.auth, (req,res) => res.json() )

