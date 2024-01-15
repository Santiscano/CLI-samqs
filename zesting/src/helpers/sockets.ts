

export class SocketEvents {
  io

  constructor( io:any ){
    // instancias de modelos - ejm: this.bandList = new BandList();

    this.io = io;
    this.socketEvents();
  }

  socketEvents(){
    // on Connection
    this.io.on('connection', ( socket:any ) => {

      console.log('Cliente conectado');

      // Eschuchar evento: init
      socket.on('message-to-server', (data: any) => {
        console.log(data);

        this.io.emit('message-from-server', data);
      });

      // lista de eventos
      // ...........
    })
  }
}
