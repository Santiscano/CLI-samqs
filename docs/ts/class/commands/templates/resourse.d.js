export const fileContentInterfaceResourse = (tableName, tableNamePascal) => {
  return `
export interface TypeId${tableNamePascal} {
  id${tableName}?: number | string;
};

export interface Type${tableNamePascal} extends TypeId${tableNamePascal} {

};
`;
};
