
export const createUseResponsive = () => {
  const data = `import { useTheme } from '@mui/material/styles'; // Importa el hook useTheme desde Material-UI para acceder al tema actual de la aplicación
import useMediaQuery from '@mui/material/useMediaQuery'; // Importa el hook useMediaQuery desde Material-UI para realizar consultas de medios

export const useResponsive = (query:string, start:any, end:any = undefined) => { // Define la función useResponsive con tres parámetros: query, start y end (este último con un valor predeterminado de undefined)
  const theme = useTheme(); // Obtiene el tema actual de la aplicación utilizando el hook useTheme

  const mediaUp = useMediaQuery(theme.breakpoints.up(start)); // Realiza una consulta de medios para verificar si la pantalla está por encima del punto de ruptura especificado por start
  const mediaDown = useMediaQuery(theme.breakpoints.down(start)); // Realiza una consulta de medios para verificar si la pantalla está por debajo del punto de ruptura especificado por start

  // Realiza una consulta de medios para verificar si la pantalla está entre los puntos de ruptura especificados por start y end
  const mediaBetween = end ? useMediaQuery(theme.breakpoints.between(start, end)) : false;

  const mediaOnly = useMediaQuery(theme.breakpoints.only(start)); // Realiza una consulta de medios para verificar si la pantalla está en el punto de ruptura especificado por start

  if (query === 'up') { // Si el parámetro query es 'up'
    return mediaUp; // Devuelve el resultado de la consulta de medios para 'up'
  }

  if (query === 'down') { // Si el parámetro query es 'down'
    return mediaDown; // Devuelve el resultado de la consulta de medios para 'down'
  }

  if (query === 'between') { // Si el parámetro query es 'between'
    return mediaBetween; // Devuelve el resultado de la consulta de medios para 'between'
  }

  return mediaOnly; // Devuelve el resultado de la consulta de medios para 'only' (por defecto)
}


/**
 *  itera a través de las claves de los puntos de ruptura del tema (invertidas), realizando consultas de medios para determinar el ancho actual de la pantalla en función de los puntos de ruptura. Retorna la clave del punto de ruptura que coincide con el ancho actual de la pantalla o devuelve 'xs' si no se encuentra ninguna coincidencia.
 */
export const useWidth = () => { // Define la función useWidth
  const theme = useTheme(); // Obtiene el tema actual de la aplicación utilizando el hook useTheme

  const keys = [...theme.breakpoints.keys].reverse(); // Obtiene las claves de los puntos de ruptura del tema y las invierte

  return ( // Retorna el resultado de la siguiente expresión
  // @ts-ignore
    keys.reduce((output, key) => { // Utiliza el método reduce para iterar sobre las claves de los puntos de ruptura
      const matches = useMediaQuery(theme.breakpoints.up(key)); // Realiza una consulta de medios para verificar si la pantalla está por encima del punto de ruptura actual

      return !output && matches ? key : output; // Si no se ha encontrado aún el ancho y la consulta de medios es verdadera, devuelve la clave actual; de lo contrario, devuelve el valor actual de output
    }, null) || 'xs' // Si no se ha encontrado ningún punto de ruptura coincidente, devuelve 'xs' (el ancho más pequeño)
  );
}

`;
  return data;
}
