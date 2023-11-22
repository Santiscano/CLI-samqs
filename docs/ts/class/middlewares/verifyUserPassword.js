
export const createVerifyUserPassword = () => {
  const data = `// in progress `

  return data;
}


/**
 * Verify User Password
 * 
 * 
 * import { Request, Response, NextFunction } from "express";
import { unauthorized, unsuccessfully } from "../Helpers/response.utilities";
import { verifyPassword } from "../Helpers/hashPassword";
import { connection } from "../Config/database/mysql";

export const verifyUserPassword = async (req: Request, res:Response, next: NextFunction) => {
  const { email, password } = req.body;
  try{
    const response = await connection.query(`SELECT password FROM ... WHERE email = ?`,[email]);
    const hash = "extraccion  hash del response"
    const validate = await verifyPassword(password, hash);
    if(!validate){
      return res.status(401).json(unauthorized());
    }
    next()
  }catch(error){
    return res.status(512).json(unsuccessfully(error));
  }
};
 */



