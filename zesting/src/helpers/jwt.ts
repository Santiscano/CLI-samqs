import "dotenv/config";
import jwt from "jsonwebtoken";
import { EXPIRE_TOKEN, SECRET_KEY } from "../config/configPorts";

if (!SECRET_KEY) {
  throw new Error("Missing JWT Secret");
}

class JWT {

  /**
   * Genera un token JWT a partir de los datos de usuario proporcionados.
   * @param {Object} userData - Datos del usuario que se incluirán en el token.
   * @returns {string | null} - Token JWT generado o null en caso de error.
   */
  static createToken( userData: Record<string, string>): string | undefined {
    try {
      return jwt.sign({...userData}, SECRET_KEY, { expiresIn: EXPIRE_TOKEN } );
    } catch (error) {
      console.log('Error generating token', error);
      return undefined
    }
  }

  /**
   * Verifica la validez de un token JWT.
   * @param {string} token - Token JWT a verificar.
   * @returns {any} - Datos decodificados del token si es válido, de lo contrario, se lanza un error.
   * @throws {Error} - Se lanza un error si el token es inválido o no es una cadena.
   */
  static verifyToken(token: string = ""): string | jwt.JwtPayload | unknown {
    if (typeof token !== "string") throw new Error('Invalid Token');

    try {
      return jwt.verify(token, SECRET_KEY);
    } catch (err) {
      return err;
    }
  }

}

export default JWT;

// como user createToken
// import JWT from "../helpers/jwt.ts"
// const token = JWT.createToken({name:"Juan", email:"juan@gmail.com"})
// console.log(token)

// como user verifyToken
// import JWT from "../helpers/jwt.ts"
// const data = JWT.verifyToken(token)
