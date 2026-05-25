import { Command } from 'commander';
import inquirer from 'inquirer';
import path from 'path';
import { readJson, writeJson } from '../utils/data';
import { ProjectSchema, Project } from '../schemas/project';

export function addProjectCommand(program: Command) {
  program
    .command('add-project')
    .description('Add a new project to your portfolio')
    .action(async () => {
      const projectsPath = path.join(process.cwd(), 'data', 'projects.json');
      const projects = (await readJson<Project[]>(projectsPath)) || [];

      const answers = await inquirer.prompt([
        { type: 'input', name: 'id', message: 'Project ID (slug):' },
        { type: 'input', name: 'title', message: 'Project Title:' },
        { type: 'input', name: 'description', message: 'Project Description:' },
        { type: 'input', name: 'techStack', message: 'Tech Stack (comma separated):' },
        { type: 'input', name: 'live', message: 'Live Link (optional):' },
        { type: 'input', name: 'repo', message: 'Repo Link (optional):' },
        { type: 'input', name: 'image', message: 'Image Path/URL:' },
        { type: 'input', name: 'category', message: 'Category (e.g. AI/ML, Web):' },
      ]);

      const projectData = {
        ...answers,
        techStack: answers.techStack.split(',').map((s: string) => s.trim()),
        links: {
          live: answers.live || undefined,
          repo: answers.repo || undefined,
        },
      };

      try {
        const validatedProject = ProjectSchema.parse(projectData);
        projects.push(validatedProject);
        await writeJson(projectsPath, projects);
        console.log('Project added successfully!');
      } catch (error) {
        console.error('Validation failed:', error);
      }
    });
}
