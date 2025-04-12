import { Fragment } from 'react';
import { BriefcaseBusiness } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import type { TExperience } from '@/types/experience';

const experience: TExperience[] = [
  {
    title: 'Full Stack Web Developer',
    company: 'ArtMajeur by YourArt',
    period: '2022 - Present',
    description:
      '<div class="mt-0">• Contributing to the early stages of the web application, and participated in the development process <strong class="font-bold text-black dark:text-white">6 months before production release.</strong>\n</div>' +
      '<div class="mt-3">• Developed and implemented new frontend features using <strong class="font-bold text-black dark:text-white">TypeScript</strong> and <strong class="font-bold text-black dark:text-white">React.js</strong>, enhancing user experience and increasing engagement for a platform supporting up to <strong class="font-bold text-black dark:text-white">1 million unique users monthly.</strong>\n</div>' +
      '<div class="mt-3">• Integrated backend APIs and third-party services (Stripe, Google Maps) with <strong class="font-bold text-black dark:text-white">Python</strong> and <strong class="font-bold text-black dark:text-white">MongoDB</strong>, ensuring seamless data flow and robust functionality across the application.\n</div>' +
      '<div class="mt-3">• Implemented automated testing and <strong class="font-bold text-black dark:text-white">CI/CD pipelines</strong>, enhancing code reliability and <strong class="font-bold text-black dark:text-white">accelerating deployment processes.</strong>\n </div>' +
      '<div class="mt-3">• Implemented <strong class="font-bold text-black dark:text-white">SEO</strong> strategy with <strong class="font-bold text-black dark:text-white">Next.js</strong> (SSG, SSR, images optimization, internationalization, canonical URL, internal links, sitemap, opengraph, metadata, ...).</div>',
    technologies: [
      {
        name: 'React.js',
        iconName: 'react',
      },
      {
        name: 'Next.js',
        iconName: 'nextjs',
      },
      {
        name: 'Vercel',
        iconName: 'vercel',
      },
      {
        name: 'TypeScript',
        iconName: 'typescript',
      },
      {
        name: 'Python',
        iconName: 'python',
      },
      {
        name: 'React Native',
        iconName: 'react_native',
      },
      {
        name: 'GCP',
        iconName: 'googleCloud',
      },
      {
        name: 'MongoDB',
        iconName: 'mongodb',
      },
    ],
  },
  {
    title: 'Full Stack Developer',
    company: 'Digital Innovations',
    period: '2019 - 2021',
    description:
      'Developed and maintained multiple client projects. Implemented CI/CD pipelines and improved development workflows.',
    technologies: [
      {
        name: 'React.js',
        iconName: 'react',
      },
      {
        name: 'Node.js',
        iconName: 'nodejs',
      },
      {
        name: 'MongoDB',
        iconName: 'mongodb',
      },
    ],
  },
  {
    title: 'Software Developer',
    company: 'StartUp Co',
    period: '2018 - 2019',
    description:
      'Built and launched MVP for a SaaS platform. Worked directly with clients to gather requirements and implement features.',
    technologies: [
      {
        name: 'React.js',
        iconName: 'react',
      },
      {
        name: 'Node.js',
        iconName: 'nodejs',
      },
      {
        name: 'MongoDB',
        iconName: 'mongodb',
      },
    ],
  },
];

const Experience = () => {
  const formatDescription = (description: string) => {
    return description.split('\n').map((line, index) => (
      <Fragment key={index}>
        <span dangerouslySetInnerHTML={{ __html: line }} />
      </Fragment>
    ));
  };

  return (
    <>
      <h2 className="flex items-center gap-2 text-2xl font-semibold">
        <BriefcaseBusiness className="size-6" />
        Experience
      </h2>
      <div className="space-y-6">
        {experience.map((job) => (
          <Card key={job.title} className="bg-card/50 p-6 backdrop-blur-sm">
            <div className="space-y-5">
              <div>
                <h3 className="text-xl font-semibold">{job.title}</h3>
                <p className="text-muted-foreground">
                  {job.company} • {job.period}
                </p>
              </div>
              <p className="whitespace-pre-line text-muted-foreground">
                {formatDescription(job.description)}
              </p>
              <div className="flex flex-wrap gap-2">
                {job.technologies.map((tech) => (
                  <Badge key={tech.name} icon={tech.iconName} variant="skill">
                    {tech.name}
                  </Badge>
                ))}
              </div>
            </div>
          </Card>
        ))}
      </div>
    </>
  );
};

export default Experience;
