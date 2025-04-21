import { type TSkill } from '@/types/skill';

export type TExperience = {
  title: string;
  company: string;
  period: string;
  description: string;
  technologies: TSkill[];
};
