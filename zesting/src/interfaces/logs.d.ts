export interface GeneralLogs {
  fileName: string;
  id?: string | number;
  error: boolean;
  message: string;
};

export interface Logs {
  fileName: string;
  id?: number;
  error: boolean;
  date?: string;
  files_account_type_number: string;
  files_cost_center: string;
  files_code_accounting: string;
  users_identification_type: string;
  users_identification: string;
  message: string;
};
