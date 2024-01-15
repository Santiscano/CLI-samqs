// Tipos de codificación admitidos por la clase Buffer
type BufferTypes =
  | "ascii"
  | "utf8"
  | "utf-8"
  | "utf16le"
  | "utf-16le"
  | "ucs2"
  | "ucs-2"
  | "base64"
  | "base64url"
  | "latin1"
  | "binary"
  | "hex";

/**
 * Proporciona métodos para la manipulación de datos utilizando la clase Buffer en Node.js.
 */
class BufferMethods {

  /**
   * Transforma una cadena de un tipo de codificación a otro.
   * @param input - Cadena de entrada que se desea transformar.
   * @param from - Tipo de codificación de la cadena de entrada.
   * @param to - Tipo de codificación al que se desea transformar la cadena.
   * @returns Cadena transformada al tipo especificado.
   */
  static bufferTransform( input:string, from:BufferTypes, to: BufferTypes ){
    const buffer = Buffer.from( input, from );
    return buffer.toString( to );
  }

  /**
   * Convierte una cadena Base64 a una cadena de datos binarios.
   * @param input - Cadena Base64 que se desea convertir.
   * @returns Cadena de datos binarios.
   */
  static base64ToBinary(input:string):string {
    const buffer = Buffer.from(input, 'base64');
    return buffer.toString('binary')
  }

  /**
   * Convierte una cadena de datos binarios a una cadena Base64.
   * @param input - Cadena de datos binarios que se desea convertir.
   * @returns Cadena Base64.
   */
  static binaryToBase64(input:string):string {
    const buffer = Buffer.from(input, 'binary');
    return buffer.toString('base64');
  }

  /**
   * Convierte una cadena Base64 a una cadena UTF-8.
   * @param encodedString - Cadena Base64 que se desea convertir.
   * @returns Cadena UTF-8.
   */
  static Base64ToString(encodedString: string):string {
    const buffer = Buffer.from(encodedString, 'base64');
    return buffer.toString('utf-8');
  }

  /**
   * Convierte una cadena de datos binarios a una cadena UTF-8.
   * @param input - Cadena de datos binarios que se desea convertir.
   * @returns Cadena UTF-8.
   */
  static binaryToString(input:string):string {
    const buffer = Buffer.from(input, 'binary');
    return buffer.toString('utf-8');
  }

}

export default BufferMethods;

