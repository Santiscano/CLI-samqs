
export const createIndex = () => {
  const data = `// CLASES
import { Server } from './services';

const server = new Server();

server.serverOn();
`;

  return data;
};
