import { exec } from 'child_process';
import "colors";

export function openVSCode(path) {
  exec(`code ${path}`, (error, stdout, stderr) => {
    if (error) {
      console.error(`Error al abrir Visual Studio Code: ${error.message}`);
      return;
    }
    if (stderr) {
      console.error(`Error al abrir Visual Studio Code: ${stderr}`);
      return;
    }
  });
}
