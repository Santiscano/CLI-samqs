
export const createApiResponse = () => {
  const data = `import Data from "../interfaces/sql2";

interface Response {
  error?: boolean;
  message: string;
  data?: Data | any;
  missing?: string | number | undefined | null;
  firebase?: {error: boolean, data: any};
  path?: Data;
  token?: string;
}

class ApiResponses {
  constructor() {}

  success(
    data?: Data | any,
    message?: string,
    firebase?: { error: boolean; data: any },
    path?: Data
  ): Response {
    message === undefined ? message = 'SUCCESS' : message;
    return { message, data, firebase, path }
  }

  unsuccessfully( error: unknown ): Response {
    console.log(error);
    // agregar un errorLogger que cree los logs de error
    return { error: true, message: 'SERVER_PROBLEM' };
  }

  errorMessage( message: string ): Response {
    return { error: true, message };
  }

  unauthorized(): Response {
    return { error:true, message: 'YOU_DONT_HAVE_UNAUTHORIZED'}
  }

  updateToken( token: string ): Response {
    return { message: 'UPDATE_TOKEN', token };
  }
  
  uncompleted( missing:string | undefined ): Response {
    return { error: true, message: 'INCOMPLETE_INFORMATION', missing };
  }

  serverError(){
    return { error: true, message: 'SERVER_ERROR' }
  }
}

export default ApiResponses
`;

  return data;
};
