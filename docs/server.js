
export const createServer = () => {
  const data = `import fs from 'fs';
import http from "http";
import https from "https";
import path from "path";

import {Server as socketio} from 'socket.io';
import bodyParser from 'body-parser';
import cors from "cors";
import express, { Request, Response, NextFunction, Express } from "express";
import morgan from "morgan";

import { PORT, URL, PROTOCOL } from '../config/configPorts';
import { protocol } from '../interfaces/server'
import { ServerInterface } from '../interfaces/server';
import { SocketEvents } from '../helpers/sockets';
import routes from "../routes";


export class Server implements ServerInterface{
  private app = express();
  io: any;
  server: Express;
  protocol = PROTOCOL;
  sockets: any;

  constructor(){}

  createServer(): Express {
    const serverProtocol = {
      http: () => {
        return http.createServer( this.app );
      },
      https: () => {
        // RUTAS SSL
        const privateKey = fs.readFileSync(\`\${process.env.SSL_PRIVATE_KEY}\`, 'utf8')
        const certificate  = fs.readFileSync(\`\${process.env.SSL_CERTIFICATE}\`, 'utf8')

        const credentials = {
            key: privateKey,
            cert: certificate
        };
        
        return https.createServer( credentials, this.app )
      }
    }
    return serverProtocol[this.protocol as protocol ]();
  }

  middlewares(): void {
    this.app.use(cors());
    this.app.use(morgan("dev"));
    this.app.use(express.json());
    this.app.use(bodyParser.urlencoded({ limit: 'Infinity', extended: true }));
    this.app.use(bodyParser.json({ limit: 'Infinity' }));
  }

  routes(): void {
    // rutas principales por versiones
    this.app.use("/api/v1", routes);
    
    // error ruta no existente
    this.app.use((
      req: Request, 
      res: Response, 
      next: NextFunction
    ) => {
      res.status(404).json({
        message: "endpoint not found",
      });
    })
  }

  // servir archivo frontend
  frontend(): void {
    this.app.use( express.static( path.resolve( __dirname, '../../../client/dist' )))
    this.app.get( "*", (req: Request, res: Response) => {
      res.sendFile( path.join( __dirname, '../../../client/dist/index.html'))
    })
  }

  // crear webSockets
  webSockets(): void {
    // console.log( this.server )
    this.io = new socketio( this.server, /** configuracion */ )

    this.sockets = new SocketEvents( this.io );
  }


  serverOn() {
    this.server = this.createServer()
    this.middlewares();
    this.routes();
    // this.frontend();
    this.webSockets();
    
    this.server.listen( PORT, () => {
      console.log(\`Servidor escuchando en el puerto \${ PROTOCOL }\${ URL }\${ PORT }\`)
    })
  }

}
`;

  return data;
};
