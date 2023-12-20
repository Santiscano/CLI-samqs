export const createAuthDocumentation = (name) => {
  const data = `{
  "$email": "${name}@domain.com",
  "$password": "jhasyifo"
}
`;

  return data;
};
