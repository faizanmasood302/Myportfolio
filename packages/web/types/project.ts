import { z } from 'zod';

export const ProjectSchema = z.object({
  id: z.string().uuid().or(z.string().regex(/^[a-z0-9-]+$/)),
  title: z.string().min(1).max(100),
  description: z.string().min(1),
  techStack: z.array(z.string()).min(1),
  links: z.object({
    live: z.string().url().optional(),
    repo: z.string().url().optional(),
  }),
  image: z.string().min(1),
  category: z.string().min(1),
});

export const SkillSchema = z.object({
  name: z.string().min(1),
  level: z.number().min(0).max(100),
  icon: z.string().min(1),
  category: z.enum(['Frontend', 'Backend', 'AI/ML', 'Tools']),
});

export type Project = z.infer<typeof ProjectSchema>;
export type Skill = z.infer<typeof SkillSchema>;
