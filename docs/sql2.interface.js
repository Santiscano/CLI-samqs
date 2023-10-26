
export const createSqlInterface = () => {
  const data = `import { RowDataPacket, OkPacket, ResultSetHeader } from "mysql2";

type Data = RowDataPacket[] | RowDataPacket[][] | OkPacket | OkPacket[] | ResultSetHeader | ResultSetHeader[];

export default Data;
`;

  return data;
};
