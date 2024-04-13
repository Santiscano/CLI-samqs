
import path from 'path';
import fs from 'fs';

// const dir = path.join(path.resolve(), '../integrations/ts/class/react/public/favicon/android-chrome-192x192.png')
// console.log('dir: ', dir);

// const pathname = path.join(new URL(import.meta.url).pathname, '../integrations/ts/class/react/public/favicon/android-chrome-192x192.png');
// console.log('pathname: ', pathname);

const dir = process.cwd();
console.log('dir: ', dir);

const rutaDeEsteArchivo = path.dirname(new URL(import.meta.url).pathname);

function formatPath(path) {
  return path.replace(/^\//, '').replace(/\//g, '\\');
}

const formattedPath = formatPath(rutaDeEsteArchivo);
console.log('formattedPath: ', formattedPath);

const file = path.join(formattedPath, '/integrations/ts/class/react/public/favicon/android-chrome-192x192.png');

if (fs.existsSync(file)) {
  console.log('existe');
}
