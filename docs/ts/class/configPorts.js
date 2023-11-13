
export const createConfigPorts = () => {
  const data = `import "dotenv/config";

// PROTOCOLO DE CONEXION HTTP O HTTPS
export const PROTOCOL = process.env.PROTOCOL || 'http';
export const URL = process.env.URL || "://localhost:";
export const PORT = process.env.PORT || 4500;

// BASES DE DATOS MYSQL
export const DB_HOST = process.env.DB_HOST || "localhost";
export const DB_USER = process.env.DB_USER || "root";
export const DB_DATABASE = process.env.DB_DB || "nombre_base_de_datos";
export const DB_PORT = process.env.DB_PORT || 3306;
export const DB_PASSWORD = process.env.DB_PASSWORD || "contraseña_db";

// BASE DE DATOS MONGOOSE
export const MONGODB_URI = process.env.MONGODB_URI

`;

  return data;
};
