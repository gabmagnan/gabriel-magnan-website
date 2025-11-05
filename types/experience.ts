import { type TSkill } from '@/types/skill';

export type TExperience = {
  title: string;
  company: string;
  period: string;
  location: string;
  description: string;
  technologies: TSkill[];
  website?: string;
};
