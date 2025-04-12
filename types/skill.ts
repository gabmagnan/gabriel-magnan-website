import { type IconName } from '@/components/ui/icon';

export type TSkillName =
  | 'AWS'
  | 'React.js'
  | 'React Native'
  | 'GCP'
  | 'Python'
  | 'MongoDB'
  | 'Next.js'
  | 'Docker'
  | 'Node.js'
  | 'TypeScript'
  | 'Vercel'
  | 'JavaScript'
  | 'MySQL';

export type TSkill = {
  name: TSkillName;
  iconName: IconName;
};
