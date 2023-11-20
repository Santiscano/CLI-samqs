
export const createValidateToken = () => {
  const data = `import { Request, Response, NextFunction } from "express";

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
        return res.status(resStatus.unauthorized).json(ApiResponses.unauthorized())
      }
      return next();
    } catch (error) {
      return res.status(resStatus.serverError).json(ApiResponses.serverError())
    }
  }
}

export default ValidateToken

// como utilizar auth
// import ValidateToken from "../middlewares/token.ts"
// router.get( "/products", ValidateToken.auth, (req,res) => res.json() )

`;

  return data;
};


/**
 * Validate token
 * 
 * 
 * import { Request, Response, NextFunction } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import "dotenv/config";
import { errorMessage, unsuccessfully } from "../Helpers/response";

const secretKey = process.env.JWT_SECRET;

const validateToken = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];
    if (typeof token == "undefined") {
      return res
        .status(401)
        .json({ message: "No cuentas con un token de autorizacion" });
    }
    if (typeof secretKey == "undefined") {
      return res
        .status(409)
        .json({ message: "Hay conflicto con las llaves de autorizacion" });
    }
    const payload: string | JwtPayload = jwt.verify(token!, secretKey!);
    // @ts-ignore
    if (Date.now() > payload.iat) {
      return res.status(208).json(errorMessage("Token Expirado"));
    }
    next();
  } catch (error) {
    return res.status(512).json(unsuccessfully(error));
  }
};

export default validateToken;
 */



