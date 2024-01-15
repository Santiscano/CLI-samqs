import http from 'http';
import https from 'https';

export type Protocol = 'http' | 'https';

export interface ServerInterface{
  createServer(protocol: protocol): void;
    // http.Server<typeof http.IncomingMessage, typeof http.ServerResponse> | 
    // https.Server<typeof http.IncomingMessage, typeof http.ServerResponse>
  middlewares(): void;
  routes(): void;
  frontend?():void;
  webSockets?(protocol: protocol):void;

  serverOn(protocol:protocol): any;
}
