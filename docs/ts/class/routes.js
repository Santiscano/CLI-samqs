
export const createRoutes = () => {
  const data = `import { Router } from "express";
import exampleRoutes from './example';

const route = Router();

// list routes 
// route.use( "/example", exampleRoutes );

export default route;
`;

  return data;
};
