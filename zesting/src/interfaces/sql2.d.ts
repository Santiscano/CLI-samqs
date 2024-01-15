import { RowDataPacket, OkPacket, ResultSetHeader } from "mysql2";

type SQLResponse =
  | RowDataPacket[]
  | RowDataPacket[][]
  | OkPacket
  | OkPacket[]
  | ResultSetHeader[]
  | ProcedureCallPacket;

export default SQLResponse;
