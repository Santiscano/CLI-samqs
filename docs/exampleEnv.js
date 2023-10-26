

export const createExampleEnv = () => {
    const data = `
LOCAL_PORT = 4500
SERVER_PORT = 443
URL_LOCAL = http://localhost
URL_SERVER = https://solucionesenviexpress.com

#MySQL
DB_HOST = localhost
DB_USER = root
DB_DB = localdigitalizacion
DB_PORT = 3306
DB_PASSWORD = Santi1026

API_KEY = 283749860296492735462875694752698

#FIREBASE
API_KEY_FIREBASE = hgJHAGLGkhjgkk4hjgKJAHJG34H5
AUTH_DOMAIN = nombre.firebaseapp.com
PROJECT_ID = nombreproyecto
STORAFEBUCKER = nombreproyecto.appspot.com
MESSAGINGSENDERID = 81927396427627
API_ID = 9:873497568795634:web:shdgfkgsdfkwgiue

#BUCKET GCP
PROJECT_NAME = nombreproyecto
BUCKET_NAME = nombre-proyecto-bucket
BUCKET_ASSIGN = prueba

#SSL
SSL_PRIVATE_KEY =
SSL_CERTIFICATE =

LOCAL
"scripts": {
    "build": "tsc",
    "prestart": "npm run build",
    "start": "ts-node-dev --respawn --transpile-only src/index.ts"
}
HEROKU
"scripts": {
    "start": "node dist/index.js",
    "build": "tsc"
}
`;

    return data;
}