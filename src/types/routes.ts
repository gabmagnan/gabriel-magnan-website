export const ROUTES = {
  home: '/',
  portfolio: '/portfolio',
  resume: '/resume',
  contact: '/contact',
} as const;

type RouteHref = (typeof ROUTES)[keyof typeof ROUTES];

export type TRoute = {
  href: RouteHref;
  label: string;
};
