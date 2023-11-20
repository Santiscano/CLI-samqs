
export const createApiResponse = () => {
  const data = `import Data from "../interfaces/sql2";
import { Response } from "../interfaces/apiResponse";


class ApiResponses {
  constructor() {}

  static success(
    data?: Data | any,
    message?: string,
    firebase?: { error: boolean; data: any },
    path?: Data
  ): Response {
    message === undefined ? message = 'SUCCESS' : message;
    return { message, data, firebase, path }
  }

  static unsuccessfully( error: unknown ): Response {
    console.log(error);
    // agregar un errorLogger que cree los logs de error
    return { error: true, message: 'SERVER_PROBLEM' };
  }

  static errorMessage( message: string ): Response {
    return { error: true, message };
  }

  static unauthorized(): Response {
    return { error:true, message: 'YOU_DONT_HAVE_UNAUTHORIZED'}
  }

  static updateToken( token: string ): Response {
    return { message: 'UPDATE_TOKEN', token };
  }
  
  static uncompleted( missing:string | undefined ): Response {
    return { error: true, message: 'INCOMPLETE_INFORMATION', missing };
  }

  static serverError(){
    return { error: true, message: 'SERVER_ERROR' }
  }
}

export default ApiResponses

`;

  return data;
};
