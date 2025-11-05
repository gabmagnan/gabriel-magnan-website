import { type IconName } from '@/components/ui/icon';

export type TSkillName =
  | 'AWS'
  | 'React.js'
  | 'React Native'
  | 'Flutter'
  | 'GCP'
  | 'Python'
  | 'MongoDB'
  | 'Next.js'
  | 'Docker'
  | 'Node.js'
  | 'Express.js'
  | 'TypeScript'
  | 'Vercel'
  | 'JavaScript'
  | 'MySQL'
  | 'GitHub'
  | 'GitHub Workflows'
  | 'GitLab'
  | 'GitLab CI/CD'
  | 'Java'
  | 'PHP'
  | 'Firebase'
  | 'GraphQL'
  | 'iOS'
  | 'Android'
  | 'Tag Manager';

export type TSkill = {
  name: TSkillName;
  iconName: IconName;
};
