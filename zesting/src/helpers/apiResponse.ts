import Data from "../interfaces/sql2";
import { Response } from "../interfaces/apiResponse";
import Logs from "../middlewares/logs";

/**
 * Clase que proporciona métodos estáticos para generar respuestas comunes de la API.
 */
class ApiResponses {
  constructor() {}

  /**
   * Genera una respuesta exitosa.
   * @param data Datos a incluir en la respuesta.
   * @param message Mensaje de la respuesta.
   * @param firebase Objeto Firebase opcional.
   * @param path Datos de la ruta opcional.
   * @returns Objeto de respuesta con formato estándar.
   */
  static success(
    data?: Data | any,
    message?: string,
    firebase?: { error: boolean; data: any },
    path?: Data
  ): Response {
    message === undefined ? message = 'SUCCESS' : message;
    return { message, data, firebase, path }
  }

  /**
   * Genera una respuesta para manejar errores no esperados.
   * @param error Objeto de error.
   * @returns Objeto de respuesta con formato estándar para errores.
   */
  static unsuccessfully( error: unknown ): Response {
    console.log(error);
    Logs.errorLogger(error);
    return { error: true, message: 'SERVER_PROBLEM', typeError: error };
  }

  /**
   * Genera una respuesta para un mensaje de error específico.
   * @param message Mensaje de error.
   * @returns Objeto de respuesta con formato estándar para mensajes de error.
   */
  static errorMessage( message: string ): Response {
    return { error: true, message };
  }

  /**
   * Genera una respuesta para indicar falta de autorización.
   * @returns Objeto de respuesta con formato estándar para falta de autorización.
   */
  static unauthorized(): Response {
    return { error:true, message: 'YOU_DONT_HAVE_UNAUTHORIZED'}
  }

  /**
   * Genera una respuesta para actualizar un token.
   * @param token Nuevo token a incluir en la respuesta.
   * @returns Objeto de respuesta con formato estándar para actualización de token.
   */
  static updateToken( token: string ): Response {
    return { message: 'UPDATE_TOKEN', token };
  }
  
  /**
   * Genera una respuesta para indicar información incompleta.
   * @param missing Información que falta.
   * @returns Objeto de respuesta con formato estándar para información incompleta.
   */
  static uncompleted( missings:string[] | {}[] | undefined ): Response {
    return { error: true, message: 'INCOMPLETE_INFORMATION', missings };
  }
}

export default ApiResponses
