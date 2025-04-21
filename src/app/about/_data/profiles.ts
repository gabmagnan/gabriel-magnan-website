import { BriefcaseIcon, LinkedinIcon, Users2Icon } from 'lucide-react';
import { strings } from '@/translations/strings';

export const profiles = [
  {
    name: strings.about.profiles.malt.title,
    icon: BriefcaseIcon,
    description: strings.about.profiles.malt.description,
    url: 'https://www.malt.fr/profile/gabrielmagnan2',
    color: 'text-rose-500',
  },
  {
    name: strings.about.profiles.collective.title,
    icon: Users2Icon,
    description: strings.about.profiles.collective.description,
    url: 'https://www.collective.work/profile/gabriel-magnan',
    color: 'text-purple-500',
  },
  {
    name: strings.about.profiles.linkedin.title,
    icon: LinkedinIcon,
    description: strings.about.profiles.linkedin.description,
    url: 'https://www.linkedin.com/in/gabriel-magnan/',
    color: 'text-blue-500',
  },
  /*{
    name: 'Portfolio',
    icon: Globe2Icon,
    description: 'Visit my personal website',
    url: `${BASE_URL}/portfolio`,
    color: 'text-green-500',
  },*/
];
