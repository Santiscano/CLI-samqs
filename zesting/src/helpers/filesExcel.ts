import { PassThrough } from "stream";

import "dotenv/config";
import ExcelJS from 'exceljs';
import { Response } from "express";

class Excel {

  /**
   * Exporta datos a un archivo Excel y envía la respuesta al cliente.
   * @param res - Objeto Response de Express.
   * @param data - Array de objetos con los datos a exportar.
   * @param headers - Array de strings que representa los encabezados de las columnas.
   * @param fileName - Nombre del archivo Excel a generar (opcional, por defecto toma la fecha actual).
   * @param nameSheet - Nombre de la hoja de cálculo (opcional, por defecto "sheet1").
   * @returns Una promesa que se resuelve cuando la escritura del archivo Excel se completa.
   * @example
   * const data = [
   *    {name: "santiago", lastname: "sierra", email:"santiscano@gmail.com", phone: "3117137084" },
   *    {name: "santiago", lastname: "sierra", email:"santiscano@gmail.com", phone: "3117137084" }
   * ]
   * route.get('/exportExcel', (req: Request, res: Response ) => {
   *    Excel.ExportExcel(res, data, Object.keys(data[0]), "santiago-presentacion", "el santi");
   * })
   * 
   * 
   */
  static async ExportExcel(res:Response, data: {}[], headers: string[], fileName:string = String(new Date), nameSheet:string = "sheet1"){

    try {
      const workbook = new ExcelJS.Workbook(); // crear libro de trabajo
      const worksheet = workbook.addWorksheet(nameSheet); // crear hoja de calculo
      // worksheet.columns = [{header: "nombre", key: "key", width: 30}]; // cuando se necesita mas personalizado "1 objeto por columna"
      const headerRow = worksheet.addRow(headers); // agrega encabezado a la hoja de calculo
      worksheet.autoFilter = worksheet.getColumn(1).letter + "1:" + worksheet.getColumn( headers.length ).letter + ( data.length + 1  ); // configura el filtro automatico en la hoja de calculo

      data.forEach((fila, index) => {
        const row = worksheet.addRow( Object.values(fila) ); // llenar cada fila - " se unsa Object porque addRow recibe es string[] "
        let fillColor = index % 2 === 0 ? "f9fafb" : "ffffff";
        
        for (let column = 1; column < headers.length + 1; column++) {
          const cell = row.getCell(column);
          const cellHeaders = headerRow.getCell(column);

          cellHeaders.fill = {
            type: "pattern",
            pattern:"solid",
            fgColor:{ argb: "FFFFFF" },
          };
          cellHeaders.font = {
            color: { argb: "000000" },
            bold: true,
          };
          cell.fill = {
            type: "pattern",
            pattern: "solid",
            fgColor: { argb: fillColor },
          };
        }

      });

      res.setHeader("Content-Type", "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet");
      res.setHeader('Content-Disposition', `attachment; filename=${fileName.replace(" ", "-")}.xlsx`);

      return await workbook.xlsx.write(res);

    } catch (error) {
      console.log('error: ', error);
    }
  }

  /**
   * Convierte datos de un archivo Excel o CSV en un array de objetos.
   * @param {string} fileContent - Contenido del archivo Excel o CSV (puede ser binario u otra representación adecuada).
   * @param {string} fileExtension  - Extensión del archivo ('.xlsx' o '.csv').
   * @param {number} rowHeader - Numero de fila donde se encuentran los encabezados del excel
   * @param {number} rowBody - Numero de fila donde inicia el cuerpo del excel
   * @returns {Promise<Array>} - Promesa que se resuelve con un array de objetos que representa los datos del archivo.
   * @example
   * import Excel from "../helpers/filesExcel";
   * import multer from "multer";
   * const storage = multer.memoryStorage();
   * const upload = multer({ storage });
   * route.post('/readExcel', upload.single('file'), async (req:Request, res:Response) => {
   * 
   * const data = req.file;
   * 
   * if (data){
   *   const name = data?.originalname.split('.');
   *   const extension = name[name.length - 1]
   *   if (extension === 'xlsx' || extension === 'csv'){ // valido para quitar el error de tipos
   *     const dataArray = await Excel.ExcelToArray(data.buffer, extension, 1, 2 )
   *     console.log('dataArray: ', dataArray);
   *   }
   * }
   * return res.json({ file: req.file })
   * })
   */
  static async ExcelToArray(
    fileContent: Buffer, fileExtension: 'xlsx' | 'csv', rowHeader: number = 1, rowBody: number = 2
  ): Promise<Array<Record<string, any>> | Record<string, string>> {
    try {
      // CREAMOS LIBRO DE TRABAJO
      const workbook = new ExcelJS.Workbook();
      
      if (fileExtension === 'xlsx') {
        await workbook.xlsx.load(fileContent); // Cargar datos desde el buffer
      } else if (fileExtension === 'csv') {
        const bufferStream = new PassThrough(); // instanciamos un stream
        bufferStream.end(fileContent); // convertimos buffer a stream
        await workbook.csv.read(bufferStream); // carga datos desde stream
      } else {
        return {message: "Formato de archivo no compatible. Solo se admiten archivos Excel (.xlsx) o CSV (.csv)." };
      }

      const worksheet = workbook.getWorksheet(1); // Obtener la primera hoja del libro
      const headers = worksheet?.getRow(rowHeader).values as string[]; // Obtener encabezados
      const data: Array<Record<string, any>> = []; // Inicializar array para almacenar datos
  
      if (fileExtension === 'xlsx') {
        // Iterar sobre cada fila a partir de la segunda fila
        for (let i = rowBody; i <= worksheet?.rowCount!; i++) {
          const rowData = worksheet?.getRow(i).values as Array<any>;
          const obj: Record<string, any> = {};
          headers.forEach((header, index) => (obj[header] = rowData[index]));
          data.push(obj);
        }

        return data;
      } else if (fileExtension === 'csv') {
        const keys = headers[1].split(',');

        for (let i = rowBody; i < worksheet?.rowCount!; i++) {
          const rowData = worksheet?.getRow(i).values as Array<any>;
          const bodyRow = rowData[1].split(',');

          const obj = keys.reduce(( ob:any, key, index ) => {
            ob[key] = bodyRow[index];
            return ob; // retorno el objeto modificado en cada iteracion
          }, {})

          data.push(obj);
        }

        return data;
      } else {
        return {message: "no deberia estar esta respuesta" };
      }
    } catch (error) {
      throw new Error('Error al cargar datos desde el archivo: ' + error);
    }
  }
}

export default Excel;


// =============FRONTEND================== //
// <table id="myTable">
//   <thead>
//     <tr>
//       <th>nombre</th>
//       <th>apellido</th>
//       <th>edad</th>
//     </tr>
//   </thead>
//   <tbody>
//     <tr>
//       <td>santiago</td>
//       <td>sierra</td>
//       <td>34</td>
//     </tr>
//     <tr>
//       <td>estefa</td>
//       <td>castaño</td>
//       <td>23</td>
//     </tr>
//     <tr>
//       <td>maria</td>
//       <td>cano</td>
//       <td>62</td>
//     </tr>
//   </tbody>
// </table>
// <button onclick="exportToExcel()">exportar</button>
// <script src="https://cdnjs.cloudflare.com/ajax/libs/FileSaver.js/2.0.5/FileSaver.min.js" integrity="sha512-Qlv6VSKh1gDKGoJbnyA5RMXYcvnpIqhO++MhIM2fStMcGT9i2T//tSwYFlcyoRRDcDZ+TYHpH8azBBCyhpSeqw==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
// <script src="https://cdnjs.cloudflare.com/ajax/libs/exceljs/4.4.0/exceljs.min.js" integrity="sha512-dlPw+ytv/6JyepmelABrgeYgHI0O+frEwgfnPdXDTOIZz+eDgfW07QXG02/O8COfivBdGNINy+Vex+lYmJ5rxw==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
// <script>
//   function exportToExcel(){
//     //? get table and create workbook
//     const htmlTable = document.getElementById('myTable'); // id de la tabla
//     const workbook = new ExcelJS.Workbook();
//     const worksheet = workbook.addWorksheet("sheet1");
//    //? add the column names to the worksheet
//     const headerRow = worksheet.addRow([]);
//     const headerCells = htmlTable.getElementsByTagName('th');
//     for (let i = 0; i < headerCells.length; i++){
//       headerRow.getCell(i + 1).value = headerCells[i].innerText;
//     }

//    //? add the html table data to the workseet
//     const rows = htmlTable.getElementsByTagName('tr');
//     for (let i = 0; i < rows.length; i++) {
//       const cells = rows[i].getElementsByTagName('td');
//       const rowData = [];
//       for (let j = 0; j < cells.length; j++) {
//         rowData.push(cells[j].innerText);
//       }
//       worksheet.addRow(rowData);
//     }
//    //? generate a blob object from the workbook and download it as an attachment
//     workbook.xlsx.writeBuffer().then((buffer) => {
//       var blob = new Blob([buffer],{ type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"});
//       saveAs(blob, 'table.xlsx')
//     });
//   }
// </script>

