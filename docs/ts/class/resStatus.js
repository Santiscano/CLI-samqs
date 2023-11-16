
export const createResStatus = () => {
  const data = `
export const resStatus = {
  success: 200,
  unauthorized: 401,
  notFound: 404,
  noContent: 417,
  unCompleted: 422,
  serverError: 500,
}
`;

  return data;
};
