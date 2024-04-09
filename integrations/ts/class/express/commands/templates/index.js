export const createIndexTemplate = () => {
  const data = `
export * from './controller';
export * from './documentation';
export * from './interface';
export * from './model';
export * from './routes';
`;

  return data;
};
