
class StringsMethods {

  constructor(){}
  
  /**
    * convierte la Primer letra en mayuscula y todas las demas en minusculas
    * @param text palabra a convertir
    * @returns Palabra A Convertir
    */
  static firstCapitalLetter(text: string): string {
    if(text == null) return ' '
    const words = text.toLowerCase().split(' ');
    const capitalizedWords = words.map((word) => {
      return word.charAt(0).toUpperCase() + word.slice(1);
    });
    return capitalizedWords.join(' ');
  };

  /**
  * se toma la parte que esta despues de // hasta el primer /
  * un ejemplo es https://solucionesenviexpress.com/QR/web lo convierte en solucionesenviexpress.com
  * @param url type string: https://solucionesenviexpress.com/QR/web
  * @returns  solucionesenviexpress.com/QR/web
  */
  static deleteProtocol(url:string) {
    const matches = url.match(/\/\/(.*?)\.com/);
    if (matches && matches.length > 1) {
      const capturedString = matches[1];
      return capturedString;
    }
  }

  /**
   * toma un archivo y captura el nombre, elimina los espacios y la extencion
   * @param fileName archivo tipo,img, pdf o excel : mi archivo.pdf
   * @returns  mi-archivo
   */
  static fileName(fileName: string): string {
    const lastDotIndex = fileName.lastIndexOf('.'); // Buscar el índice del último punto en el nombre del archivo
    const fileNameWithoutExtension = fileName.slice(0, lastDotIndex); // Obtener la parte del nombre del archivo antes de la extensión
    const fileNameWithoutSpaces = fileNameWithoutExtension.replace(/s/g, '-'); // Eliminar los espacios en blanco del nombre del archivo
    return fileNameWithoutSpaces;
  }
  
  /**
   * toma el nombre de un archivo y cambia los espacios por "-"
   * @param fileName archivo tipo,img, pdf o excel : mi archivo.pdf
   * @returns  mi-archivo
   */
  static replaceSpaceWithDash(fileName: string): string {
    const lastDotIndex = fileName.lastIndexOf('.'); // entrega el índice del último "." en el nombre del archivo
    const fileNameWithoutExtension = fileName.slice(0, lastDotIndex); // Obtiene el nombre del archivo sin la extensión
    const extension = fileName.slice(lastDotIndex); // extension con punto ".pdf"
    const fileNameWithoutSpaces = fileNameWithoutExtension.replace(/s/g, '-'); // Remplaza espacios en blanco por "-"
    return `${fileNameWithoutSpaces}${extension}`;
  }

  // 1- convertir camelCase a PascalCase
  static camelToPascal = (str: string) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  // 2- convertir camelCase a snake_case
  static camelToSnake = (camelCase: string) => {
    const snakeCase = camelCase.replace(
      /[A-Z]/g,
      (match) => "_" + match.toLowerCase()
    );
    return snakeCase;
  };

  /**
   * remplaza el string de snake_case a PascalCase
   * @param snakeCase 
   * @returns PascalCase
   */
  static SnakeToPascal = (snakeCase: string) => {
    const arrayWords = snakeCase.split("_");
    const pascalCase = arrayWords.map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join("");
    return pascalCase;
  }

  /**
   * remplaza el string de snake_case a camelCase
   * @param snakeCase 
   * @returns camelCase
   */
  static SnakeToCamel = (snakeCase: string) => {
    const arrayWords = snakeCase.split("_"); //creamos un array por cada palabra separada
    // primera palabra la dejamos igual y la unimos con todas las demas que se les hara el camelcase
    const camelCase = arrayWords[0] + arrayWords.slice(1).map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join("");
    return camelCase;
}

  // 3 -convertir pascal a snake
  static pascalToSnake = (pascalCase: string) => {
    const snakeCase = pascalCase.replace(
      /[A-Z]/g,
      (match, index) => (index !== 0 ? "_" : "") + match.toLowerCase()
    );
    return snakeCase;
  };

  // 4 -pascal a camel
  static pascalToCamel = (pascalCase: string) => {
    const camelCase = pascalCase.charAt(0).toLowerCase() + pascalCase.slice(1);
    return camelCase;
  };

}

export default StringsMethods
