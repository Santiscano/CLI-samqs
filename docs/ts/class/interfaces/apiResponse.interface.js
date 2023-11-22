export const createApiResponseInterface = () => {
  const data = `export interface Response {
  error?: boolean;
  message: string;
  data?: Data | any;
  missing?: string | number | undefined | null;
  firebase?: {error: boolean, data: any};
  path?: Data;
  token?: string;
}
`;

  return data;
};
