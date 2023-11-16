
export const createSqlInterface = () => {
  const data = `import { RowDataPacket, OkPacket, ResultSetHeader } from "mysql2";

type SQLResponse =
  | RowDataPacket[]
  | RowDataPacket[][]
  | OkPacket
  | OkPacket[]
  | ResultSetHeader
  | ResultSetHeader[];

export default SQLResponse;
`;

  return data;
};
