export const createSwagger = () => {
  const data = `import { Express } from "express";
import swaggerUI from 'swagger-ui-express';
import swaggerJSDoc from 'swagger-jsdoc';

class Swagger {
  
  static SwaggerDocumentation( app: Express ){
    const options = {
      definition: {
        openapi: '3.0.1',
        info: {
          title: 'API Documentation',
          description: "a simple express library API",
          version: '1.0.0',
        },
        servers: [
          {
            url: "http://localhost:4500",
            description: "local",
          },
          {
            url: "https://dominio-a-comprar.com.co",
            description: "server",
          },
        ],
      },
      apis: ["./src/routes/*.ts"],
    };

    const specs = swaggerJSDoc(options);
    app.use("/documentation", swaggerUI.serve, swaggerUI.setup(specs))
  }
}

export default Swagger;
`;

  return data;
};
