import { readFileSync, writeFileSync } from 'fs';

export const updateRouteIndex = async ( module, filePath ) => {

  const newImportString = `import ${module} from \'./${module}.routes\';`;
  const newRouteUse = `route.use( "/${module}", ${module} );`;

  try {
    let data = readFileSync(filePath, 'utf-8');
    console.log('file: ', data);
    data = writeString( data, '.routes', newImportString );
    console.log('update 1: ', data);
    data = writeString( data, 'route.use', newRouteUse );
    console.log('update 2: ', data);

    writeFileSync( filePath, data, 'utf-8' );
  } catch (error) {
    console.error('error', error)
  }

};

const writeString = ( data, dividerText, newWriteContent ) => {
  const lastRoutesIndex = data.lastIndexOf(dividerText); // Encuentra el índice de la última línea que contiene ".routes"
  const newlineAfterLastRoutesIndex = data.indexOf('\n', lastRoutesIndex); // Encuentra la posición del salto de línea después de la última línea que contiene ".routes"

  const firstPart = data.slice(0, newlineAfterLastRoutesIndex + 1); // Divide el archivo en dos partes
  const secondPart = data.slice(newlineAfterLastRoutesIndex + 1);

  // Crea el nuevo contenido combinando las partes y la nueva importación
  const newContent = `${firstPart}${newWriteContent}\n${secondPart}`;
  return newContent;
};
