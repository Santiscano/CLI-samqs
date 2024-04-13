import { exec } from 'child_process';
import path from 'path';
import { createSpinner } from 'nanospinner';
import "colors";



const spinner = createSpinner('inicio todo'.green).start();

setTimeout(() => {
  spinner.success({ text: 'listo' });
}, 5000);

// const route = process.cwd();


// const result = path.resolve(route, 'testing-express-react', 'client')
// console.log('result: ', result);


// exec('npm i', { cwd: result }, (error, stdout, stderr) => {
//   if (error) {
//     console.error(`error al ejecutar: ${error}`);
//     return;
//   }
//   console.log('stdoud:  \n', stdout);
//   console.error('stderr: \n', stderr);
// })
