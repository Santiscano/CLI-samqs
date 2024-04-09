export const fileContentInterfaceTsClass = (tableName, tableNamePascal, interfaceWithoutId) => {
  return `
export interface TypeId${tableNamePascal} {
  id${tableName}?: number | string;
};

export interface Type${tableNamePascal} extends TypeId${tableNamePascal} {
  ${interfaceWithoutId}
};
`;
};


