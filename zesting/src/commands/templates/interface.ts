export const fileContentInterface = (tableName:string, tableNamePascal:string, interfaceWithoutId:string) => {
  return `
export interface TypeId${tableNamePascal} {
  id${tableName}?: number | string;
};

export interface Type${tableNamePascal} extends TypeId${tableNamePascal} {
  ${interfaceWithoutId}
};
`;
};


