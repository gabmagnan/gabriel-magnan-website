import { type UrlObject } from 'url';
import { type LucideIcon } from 'lucide-react';

export type TSocialLink = {
  name: string;
  href: string | UrlObject;
  icon: LucideIcon;
};
