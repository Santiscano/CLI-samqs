
export const createJWT = () => {
  const data = `import "dotenv/config";
import jwt from "jsonwebtoken";

const secretKey = process.env.JWT_SECRET;
if (!secretKey) {
  throw new Error("Missing JWT Secret");
}

class JWT {

  /**
   * Genera un token JWT a partir de los datos de usuario proporcionados.
   * @param {Object} userData - Datos del usuario que se incluirán en el token.
   * @param {number | string} expiresIn - Duración de validez del token (puede ser un número en segundos o una cadena que represente un intervalo de tiempo, por ejemplo, '24h').
   * @returns {string | null} - Token JWT generado o null en caso de error.
   */
  static generateToken(userData: {}, expiresIn: number | string = '24h' ): string | null {
    try {
      return jwt.sign({ userData }, secretKey, { expiresIn });
    } catch(err) {
      console.log('Error generating token', err);
    }
  }

  /**
   * Verifica la validez de un token JWT.
   * @param {string} token - Token JWT a verificar.
   * @returns {any} - Datos decodificados del token si es válido, de lo contrario, se lanza un error.
   * @throws {Error} - Se lanza un error si el token es inválido o no es una cadena.
   */
  static verifyToken(token: string): any {
    if (typeof token !== "string") throw new Error('Invalid Token');

    try {
      return jwt.verify(token, secretKey);
    } catch (err) {
      console.log(err);
      throw new Error('Invalid Token');
    }
  }

}

export default JWT;

`;

  return data;
};
