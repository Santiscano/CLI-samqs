import { parseISO, differenceInYears } from 'date-fns';

class dateMethods{

  constructor(){}

  /**
   * convierte la fecha actual en 2023/07/13 - 10:31 am
   * @returns fecha entregada en
   */
  static genereDateNowDMYHM() {
    const date = new Date();
    const options: Intl.DateTimeFormatOptions = {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    };
    const formattedTime = date.toLocaleString("en-US", options);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    const formattedDate = `${day.toString().padStart(2, "0")}/${month.toString().padStart(2, "0")}/${year.toString()}`;

    return `${formattedDate} - ${formattedTime}`;
  };

  /**
   * metodo transformacion de fecha de 2023-05-10T15:11:14.000Z a 10 de mayo, 0:55 p. m.
   * @param fecha 2023-05-10T15:11:14.000Z
   * @returns 10 de mayo, 0:55 p. m.
   */
  static formaterDMH(fecha:any) {
    const fecha_dt = new Date(fecha);
    const opciones = {
      day: 'numeric',
      month: 'long',
      hour: 'numeric',
      minute: 'numeric',
      hour12: true
    };
    // @ts-ignore
    const fecha_formateada = fecha_dt.toLocaleString('es-ES', opciones);
    return fecha_formateada;
  }

  /**
   * metodo transformacion de fecha
   * @param fecha 2023-05-10T15:11:14.000Z
   * @returns 10 de mayo 2023.
   */
  static formateData(fecha:any) {
    const fecha_dt = new Date(fecha);
    const opciones = {
      day: 'numeric',
      month: 'long',
      year: 'numeric', // Agregamos el año
    };
    // @ts-ignore
    const fecha_formateada = fecha_dt.toLocaleString('es-ES', opciones);
    return fecha_formateada;
  }

  /**
   * transforma en formato YYYY-MM-DD
   * @param fileName fecha rara "2122-12-12T05:00:00.000Z"
   * @returns
   */
  static formatYMD = (fileName: string) => {
    if(fileName == null) return null;
    const file = fileName.split('T').shift();
    return file
  };

  /**
   * toma la fecha de nacimiento y da su edad actual, necesita la libreria date-fns
   * @returns age
   */
  static AgeToBirthdayWithFNS = (birthDate:string) => {
    const dateNow = new Date();
    const dateBirthDay = parseISO(birthDate);
    const age = differenceInYears(dateNow, dateBirthDay);
    console.log('age: ', age);
    return age;
  };

  /**
   * convierte la fecha de nacimiento en formato 1992-06-17T1200000... a 31 años
   * @param birthDate fecha nacimiento
   * @returns edad
   */
  static AgeToBirthday = (birthDate:string) => {
    const dateNow = new Date();
    const dateBirthDay = new Date(birthDate);
  
    let age = dateNow.getFullYear() - dateBirthDay.getFullYear();
    const currentMonth = dateNow.getMonth();
    const birthMonth = dateBirthDay.getMonth();
  
    if (currentMonth < birthMonth || (currentMonth === birthMonth && dateNow.getDate() < dateBirthDay.getDate())) {
      age--;
    }
    return `${age} años`;
  };

}

export default dateMethods
