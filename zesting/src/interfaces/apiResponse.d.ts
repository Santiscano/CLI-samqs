export interface Response {
  error?: boolean;
  typeError?: any;
  message: string;
  data?: Data | any;
  missings?: string[] | {}[] | number | undefined | null;
  firebase?: {error: boolean, data: any};
  path?: Data;
  token?: string;
}
