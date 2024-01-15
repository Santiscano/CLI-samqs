
class numberMethods{

  constructor(){}

  /**
   * metodo para formatear los numeros a dinero "COP"
   * @param amount numero a formatear
   * @returns precio formateada
   */
  static formattedAmount( amount: string ){
    const numericAmount = parseFloat( amount );

    const formatted = numericAmount.toLocaleString('es-CO',{
      style: 'currency',
      currency: 'COP',
      minimumFractionDigits: 0,
    });
    return formatted;
  }

  /**
   * cualquier numero recibido menor que 10 lo entregara en 2 digitos
   * @param num
   * @returns
   */
  static numberToStringTwoDigit(num: number): string {
    const regex = /[a-zA-Z]/g;
    const value = Number(num);
    if (value >= 100 || value <= 0 || regex.test(value.toString()) || value.toString().length > 3 ){
      return `INVALID_VALUED`
    } else if ( value < 10 ) {
      return `0${value.toString()}`
    } else {
      return value.toString();
    };
  }

  /**
   * recibe el numero de nit y en base a el genera el digito de verificacion
   * @param myNit numero de nit
   * @returns digito de verificación
   */
  static digitVerifiedDocument(myNit: string): number {
    try {
      let vpri: any, x: number, y: any, z: number;
      myNit = myNit.replace ( /s/g, "" ) ; // Espacios
      myNit = myNit.replace ( /,/g,  "" ) ; // Comas
      myNit = myNit.replace ( /./g, "" ) ; // Puntos
      myNit = myNit.replace ( /-/g,  "" ) ; // Guiones
        
      // Procedimiento
      vpri = new Array(16); 
      z = myNit.length;
        
      vpri[1]  =  3 ;
      vpri[2]  =  7 ;
      vpri[3]  = 13 ; 
      vpri[4]  = 17 ;
      vpri[5]  = 19 ;
      vpri[6]  = 23 ;
      vpri[7]  = 29 ;
      vpri[8]  = 37 ;
      vpri[9]  = 41 ;
      vpri[10] = 43 ;
      vpri[11] = 47 ;  
      vpri[12] = 53 ;  
      vpri[13] = 59 ; 
      vpri[14] = 67 ; 
      vpri[15] = 71 ;

      x = 0 ;
      y = 0 ;
      for  ( let i = 0; i < z; i++ )  { 
        y = ( myNit.substr( i, 1 ) ) ;
        x += ( y * vpri [z-i] ) ;
      };
      y = x % 11 ;
      return( y > 1 ) ? 11 - y : y
    } catch (error) {
      // console.log('error: ', error);
      return NaN
    }
  }

}

export default numberMethods
