import { Command } from 'commander';
import fs from 'fs-extra';
import path from 'path';

export function initCommand(program: Command) {
  program
    .command('init <name>')
    .description('Initialize a new portfolio project')
    .action(async (name: string) => {
      const targetDir = path.resolve(process.cwd(), name);
      
      if (await fs.pathExists(targetDir)) {
        console.error(`Error: Directory ${name} already exists.`);
        return;
      }

      console.log(`Initializing portfolio project: ${name}...`);
      
      try {
        await fs.ensureDir(targetDir);
        await fs.ensureDir(path.join(targetDir, 'data'));
        
        // Create initial data files
        await fs.writeJson(path.join(targetDir, 'data', 'projects.json'), [], { spaces: 2 });
        await fs.writeJson(path.join(targetDir, 'data', 'skills.json'), [], { spaces: 2 });

        // Copy config template
        const templatePath = path.resolve(__dirname, '../../templates/portfolio.config.ts.template');
        if (await fs.pathExists(templatePath)) {
          await fs.copy(templatePath, path.join(targetDir, 'portfolio.config.ts'));
        }
        
        console.log(`Successfully initialized ${name}!`);
      } catch (error) {
        console.error('Initialization failed:', error);
      }
    });
}
