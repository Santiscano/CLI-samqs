
export const createPackage = (nameProyect) => {
  
  const data = `{
  "name": "${nameProyect}",
  "version": "1.0.0",
  "description": "",
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
    "socket.io": "*"
  },
  "devDependencies": {
    "@types/cors": "*",
    "@types/dotenv": "*",
    "@types/express": "*",
    "@types/mongoose": "*",
    "@types/morgan": "*",
    "@types/multer": "*",
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