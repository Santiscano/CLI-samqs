export const createRoutesTemplate = () => {
  const data = `export const fileContentRoutes = ( tableCamel:string, tablePascal:string ) => {
  return \`import { Router } from "express";
import \${tablePascal}Controller from "../controllers/\${tableCamel}.controller";

const route = Router();

route.get( "/", \${tablePascal}Controller.getAll\${tablePascal} );
route.get("/count", \${tablePascal}Controller.count\${tablePascal} ); 
route.get("/:id", \${tablePascal}Controller.get\${tablePascal}ById );

route.post("/create", \${tablePascal}Controller.post\${tablePascal} );
route.post("/bulk", \${tablePascal}Controller.bulk\${tablePascal} );

route.put("/:id", \${tablePascal}Controller.put\${tablePascal} );
route.patch("/:id", \${tablePascal}Controller.patch\${tablePascal} );

route.delete("/:id", \${tablePascal}Controller.delete\${tablePascal} );

export default route;
\`;
}
`;

  return data;
};
