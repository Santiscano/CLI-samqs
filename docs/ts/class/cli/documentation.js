
export const fileContentDocTsClass = (listAndTypeColumns) => {
  const parseString = listAndTypeColumns.map((obj, ) => {
    const key = Object.keys(obj)[0];
    const value = obj[key];
    return `"${key}": ${value == "string" ? `"${value}"` : 3}`
  }).join(', \n  ');

  return `{
  ${parseString}
}
`;
};

export const fileContentDocResTsClass = (listAndTypeColumns) => {
  const parseString = listAndTypeColumns.map((obj, ) => {
    const key = Object.keys(obj)[0];
    const value = obj[key];
    return `"${key}": ${value == "string" ? `"${value}"` : 3}`
  }).join(', \n    ');

  return `{
  "message": "SUCCESS",
  "error": false,
  "data": {
    ${parseString}
  }
}
`;
};

