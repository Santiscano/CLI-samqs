
export const createPackage = (nameProyect, descriptionProyect = '') => {
  
  const data = `{
  "name": "${nameProyect}",
  "version": "1.0.0",
  "description": "${descriptionProyect}",
  "main": "index.js",
  "scripts": {
    "allDatabaseMySQL": "ts-node-dev --transpile-only src/commands/allDatabaseMySQL.ts",
    "build": "tsc",
    "crudMongo": "ts-node-dev --transpile-only src/commands/crudMongo.ts",
    "crudMySQL": "ts-node-dev --transpile-only src/commands/crudMysql.ts",
    "dev": "ts-node-dev --respawn --transpile-only src/index.ts",
    "prestart": "npm run build",
    "start": "node dist/index.js",
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
