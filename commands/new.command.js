import { Command } from "commander";

export const newCommand = (program) => {
  program
    .command('new')
    .alias('n')
    .description('genera nueva app')
};
