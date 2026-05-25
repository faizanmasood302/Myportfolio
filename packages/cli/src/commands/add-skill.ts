import { Command } from 'commander';
import inquirer from 'inquirer';
import path from 'path';
import { readJson, writeJson } from '../utils/data';
import { SkillSchema, Skill } from '../schemas/project';

export function addSkillCommand(program: Command) {
  program
    .command('add-skill')
    .description('Add a new skill to your portfolio')
    .action(async () => {
      const skillsPath = path.join(process.cwd(), 'data', 'skills.json');
      const skills = (await readJson<Skill[]>(skillsPath)) || [];

      const answers = await inquirer.prompt([
        { type: 'input', name: 'name', message: 'Skill Name:' },
        { type: 'number', name: 'level', message: 'Skill Level (0-100):' },
        { type: 'input', name: 'icon', message: 'Icon Name/Path:' },
        { 
          type: 'list', 
          name: 'category', 
          message: 'Category:',
          choices: ['Frontend', 'Backend', 'AI/ML', 'Tools']
        },
      ]);

      try {
        const validatedSkill = SkillSchema.parse(answers);
        skills.push(validatedSkill);
        await writeJson(skillsPath, skills);
        console.log('Skill added successfully!');
      } catch (error) {
        console.error('Validation failed:', error);
      }
    });
}
