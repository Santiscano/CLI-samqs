import "dotenv/config";

// PROTOCOLO DE CONEXION HTTP O HTTPS
export const PROTOCOL = process.env.PROTOCOL || 'http....';
export const URL = process.env.URL || "://localhost:....";
export const PORT = process.env.PORT || 4600;

// BASES DE DATOS MYSQL
export const DB_HOST = process.env.DB_HOST || "localhost";
export const DB_USER = process.env.DB_USER || "root";
export const DB_DATABASE = process.env.DB_DB || "nombre_base_de_datos";
export const DB_PORT = process.env.DB_PORT || 3306;
export const DB_PASSWORD = process.env.DB_PASSWORD || "contraseña_db";

// BASE DE DATOS MONGOOSE
export const MONGODB_URI = process.env.MONGODB_URI;

// SECURITY: JWT CONFIG
export const SECRET_KEY = process.env.SECRET_KEY || "secret-key";
export const EXPIRE_TOKEN = process.env.EXPIRE_TOKEN || "24h";
// API_KEY
export const API_KEY = process.env.API_KEY || "api_key";

// SSL
export const SSL_PRIVATE_KEY = process.env.SSL_PRIVATE_KEY || "ssl-private-key";
export const SSL_CERTIFICATE = process.env.SSL_CERTIFICATE || "ssl-certificate-key";
