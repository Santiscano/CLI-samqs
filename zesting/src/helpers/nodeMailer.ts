import "dotenv/config";
import * as nodeMailer from "nodemailer";
import SMTPTransport from 'nodemailer/lib/smtp-transport';

interface Attachments {
  filename: string;
  content: string;
  encoding: string;
}

class NodeMailerClass {

  /**
   * Método estático para configurar y obtener un objeto de transporte de nodemailer.
   * @param host Tipo de host para configurar el transporte ( "gmail", "mailtrap" u otro ).
   * @returns Objeto de transporte de nodemailer configurado.
   * @throws {Error} Si el tipo de host no es válido.
   */
  private static createTransport(host:string){
    const transport = nodeMailer.createTransport({
      host,
      port: Number(process.env.MAIL_PORT) || 465,
      secure: true,
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASSWORD
      }
    });
    transport.verify().then(() => console.log('NodeMailer OK to send emails'));

    return transport;
  } 

  /**
   * Método estático para enviar un correo electrónico.
   * @param hostType Tipo de host para la configuración del transporte ( "gmail", "mailtrap", "otro" ).
   * @param title Título del remitente.
   * @param email Dirección de correo electrónico del destinatario.
   * @param subject Asunto del correo electrónico.
   * @param {Buffer} content Contenido del correo electrónico en formato HTML como Buffer.
   * @param {Attachments} attachments Arreglo opcional de archivos adjuntos al correo electrónico, la opcion content debe ser base64.
   * @returns Una promesa que se resuelve con la información sobre el mensaje enviado.
   * @throws {Error} Si el tipo de host no es válido.
   * @example
   * Ejemplo de uso:
   * const emailInfo = await NodeMailer.sendEmail(
   *   "gmail",
   *   "Titulo del mail",
   *   "destinatario@example.com",
   *   "Asunto del Correo",
   *   fs.readFile( pathHTML ),
   *   [{ 
   *      filename: "archivo.png", 
   *      content: qrCoding.split('base64')[1], 
   *      encoding: 'base64' 
   *   }]
   * );
   * console.log("Información del correo enviado:", emailInfo);
   */
  static async sendEmail(
    hostType:"gmail" | "mailtrap", title:string, email:string, 
    subject:string, content:Buffer, attachments: Attachments[] = []
  ): Promise<SMTPTransport.SentMessageInfo> {
    
    const host = {
      gmail: "smtp.gmail.com",
      mailtrap: "sandbox.smtp.mailtrap.io",
    }

    if (!(hostType in host)) {
      throw new Error("Tipo de host no válido");
    }

    const mailOptions = {
      from: `"${title}" <${process.env.MAIL_USER}>`, // sender address
      to: `${email}`,
      subject,
      html: content.toString(),
      attachments
    }

    const transporter = this.createTransport(host[hostType]);
    const info = await transporter.sendMail( mailOptions );

    console.log("Mensaje enviado con id: ", info.messageId);

    return info;
  }

}

export default NodeMailerClass;

