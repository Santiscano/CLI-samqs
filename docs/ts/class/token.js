
export const createValidateToken = () => {
  const data = `// in process 
  

class ValidateToken {
  try{
    
  } catch(error){
    console.log('error: ', error);
  }
}
  
  
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



