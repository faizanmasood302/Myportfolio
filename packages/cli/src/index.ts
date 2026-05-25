#!/usr/bin/env node
import { Command } from 'commander';
import { initCommand } from './commands/init';
import { addProjectCommand } from './commands/add-project';
import { addSkillCommand } from './commands/add-skill';
import { buildCommand } from './commands/build';
import { deployCommand } from './commands/deploy';

const program = new Command();

program
  .name('portfolio')
  .description('CLI tool for managing your personal portfolio')
  .version('1.0.0');

initCommand(program);
addProjectCommand(program);
addSkillCommand(program);
buildCommand(program);
deployCommand(program);

program.parse(process.argv);
