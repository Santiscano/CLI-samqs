
export const createPackage = (nameProyect, descriptionProyect = '') => {
  
  const data = `{
  "name": "${nameProyect}",
  "version": "1.0.0",
  "description": "${descriptionProyect}",
  "main": "index.js",
  "scripts": {
    "build": "tsc",
    "prestart": "npm run build",
    "dev": "ts-node-dev --respawn --transpile-only src/index.ts",
    "test": "echo \\"Error: no test specified\\" && exit 1"
  },
  "dependencies": {
    "cors": "*",
    "dotenv": "*",
    "express": "*",
    "mongoose": "*",
    "morgan": "*",
    "multer": "*",
    "mysql2": "*",
    "socket.io": "*",
    "swagger-jsdoc": "*",
    "swagger-ui-express": "*"
  },
  "devDependencies": {
    "@types/cors": "*",
    "@types/dotenv": "*",
    "@types/express": "*",
    "@types/mongoose": "*",
    "@types/morgan": "*",
    "@types/multer": "*",
    "@types/swagger-jsdoc": "*",
    "@types/swagger-ui-express": "*",
    "ts-node-dev": "*",
    "typescript": "*"
  },
  "keywords": [],
  "author": "Santiago-sierra-cano",
  "license": "ISC"
}
`;
  return data;
};
