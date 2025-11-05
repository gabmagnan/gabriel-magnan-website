import { Fragment } from 'react';
import { BriefcaseBusiness, ExternalLink, MapPin } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import type { TExperience } from '@/types/experience';
import { formatDescription } from '@/utils/utils';

const experience: TExperience[] = [
  {
    title: 'Fullstack Web Software Developer',
    company: 'Dialogue Healthcare Technologies',
    period: 'July 2025 - Present',
    location: 'Montreal, QC, Canada',
    website: 'dialogue.co',
    description:
      '<div class="mt-0">• Integrated and maintained new healthcare features across Dialogue\'s platform, improving' +
      ' <strong class="font-bold text-black dark:text-white">performance and reliability</strong> for <strong' +
      ' class="font-bold text-black dark:text-white">millions of users across Canada.</strong>\n</div>' +
      '<div class="mt-3">• Enhanced user experience across <strong class="font-bold text-black' +
      ' dark:text-white">web, Android, and iOS platforms</strong> by developing and refining core features of' +
      ' Dialogue apps using <strong class="font-bold text-black dark:text-white">React</strong> and <strong' +
      ' class="font-bold text-black dark:text-white">TypeScript.</strong>\n</div>' +
      '<div class="mt-3">• Optimized cross-platform UI components to deliver a <strong class="font-bold' +
      ' text-black dark:text-white">consistent, intuitive, and responsive interface</strong> for patients and' +
      ' healthcare professionals.</div>',
    technologies: [
      {
        name: 'React.js',
        iconName: 'reactjs',
      },
      {
        name: 'TypeScript',
        iconName: 'typescript',
      },
      {
        name: 'JavaScript',
        iconName: 'javascript',
      },
      {
        name: 'React Native',
        iconName: 'react_native',
      },
      {
        name: 'iOS',
        iconName: 'ios',
      },
      {
        name: 'Android',
        iconName: 'android',
      },
      {
        name: 'MySQL',
        iconName: 'mysql',
      },
      {
        name: 'GitHub',
        iconName: 'github',
      },
    ],
  },
  {
    title: 'Full Stack Web Developer',
    company: 'ArtMajeur by YourArt',
    period: 'October 2022 - June 2025',
    location: 'Paris, France',
    website: 'artmajeur.com',
    description:
      '<div class="mt-0">• Contributing to the early stages of the web' +
      ' application, and participated in the development process <strong' +
      ' class="font-bold text-black dark:text-white">6 months before' +
      ' production release.</strong>\n</div>' +
      '<div class="mt-3">• Developed and implemented new frontend features' +
      ' using <strong class="font-bold text-black' +
      ' dark:text-white">TypeScript</strong> and <strong class="font-bold' +
      ' text-black dark:text-white">React.js</strong>, enhancing user' +
      ' experience and increasing engagement for a platform supporting up to' +
      ' <strong class="font-bold text-black dark:text-white">1 million' +
      ' unique users monthly.</strong>\n</div>' +
      '<div class="mt-3">• Integrated backend APIs and third-party services' +
      ' (Stripe, Google Maps) with <strong class="font-bold text-black' +
      ' dark:text-white">Python</strong> and <strong class="font-bold' +
      ' text-black dark:text-white">MongoDB</strong>, ensuring seamless data' +
      ' flow and robust functionality across the application.\n</div>' +
      '<div class="mt-3">• Implemented automated testing and <strong' +
      ' class="font-bold text-black dark:text-white">CI/CD' +
      ' pipelines</strong>, enhancing code reliability and <strong' +
      ' class="font-bold text-black dark:text-white">accelerating deployment' +
      ' processes.</strong>\n </div>' +
      '<div class="mt-3">• Implemented <strong class="font-bold text-black' +
      ' dark:text-white">SEO</strong> strategy with <strong class="font-bold' +
      ' text-black dark:text-white">Next.js</strong> (SSG, SSR, images' +
      ' optimization, internationalization, canonical URL, internal links,' +
      ' sitemap, opengraph, metadata, ...).</div>',
    technologies: [
      {
        name: 'React.js',
        iconName: 'reactjs',
      },
      {
        name: 'Next.js',
        iconName: 'nextjs',
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
        name: 'PHP',
        iconName: 'php',
      },
      {
        name: 'React Native',
        iconName: 'react_native',
      },
      {
        name: 'Vercel',
        iconName: 'vercel',
      },
      {
        name: 'GCP',
        iconName: 'googleCloud',
      },
      {
        name: 'GitLab CI/CD',
        iconName: 'gitlab',
      },
      {
        name: 'MongoDB',
        iconName: 'mongodb',
      },
      {
        name: 'MySQL',
        iconName: 'mysql',
      },
      {
        name: 'GraphQL',
        iconName: 'graphql',
      },
      {
        name: 'iOS',
        iconName: 'ios',
      },
      {
        name: 'Android',
        iconName: 'android',
      },
    ],
  },
  {
    title: 'CEO/Co-founder',
    company: 'Gravity Agency',
    period: '2022',
    location: 'Paris, France',
    description:
      '<div class="mt-0">• <strong class="font-bold text-black dark:text-white">Engineered large-scale web' +
      ' solutions</strong> for clients with millions of users, delivering seamless, high-performance experience and' +
      ' intuitive user interfaces.\n\n</div> ' +
      '<div class="mt-3">• <strong class="font-bold text-black dark:text-white">Led end-to-end custom software' +
      ' development</strong>  from conducting discovery sessions to refining concepts and delivering user-centric' +
      ' platforms.</div>',
    technologies: [
      {
        name: 'React.js',
        iconName: 'reactjs',
      },
      {
        name: 'Next.js',
        iconName: 'nextjs',
      },
      {
        name: 'TypeScript',
        iconName: 'typescript',
      },
      {
        name: 'Node.js',
        iconName: 'nodejs',
      },
      {
        name: 'Python',
        iconName: 'python',
      },
      {
        name: 'MongoDB',
        iconName: 'mongodb',
      },
      {
        name: 'GitHub Workflows',
        iconName: 'github',
      },
    ],
  },
  {
    title: 'CEO/Co-founder',
    company: 'Bet Trends',
    period: '2019-2022',
    location: 'Paris, France',
    description:
      '<div class="mt-0">• <strong class="font-bold text-black dark:text-white">Designed and launched</strong> the' +
      ' “Bet Trends” iOS/Android app using <strong class="font-bold text-black dark:text-white">Flutter</strong>, ' +
      ' centralizing multibookmaker betting data into a single dashboard. Optimized user decision-making and' +
      ' elevated the overall betting experience, reaching <strong class="font-bold text-black dark:text-white">over' +
      ' 10k users.</strong> ' +
      '<div class="mt-3">• <strong class="font-bold text-black dark:text-white">Joined Le Tremplin incubator in' +
      ' Paris</strong>, tech accelerator program.',
    technologies: [
      {
        name: 'Flutter',
        iconName: 'flutter',
      },
      {
        name: 'Python',
        iconName: 'python',
      },
      {
        name: 'Firebase',
        iconName: 'firebase',
      },
      {
        name: 'GitHub Workflows',
        iconName: 'github',
      },
      {
        name: 'AWS',
        iconName: 'aws',
      },
      {
        name: 'MongoDB',
        iconName: 'mongodb',
      },
    ],
  },
];

const Experience = () => {
  return (
    <>
      <h2 className="flex items-center gap-2 text-2xl font-semibold">
        <BriefcaseBusiness className="size-6" />
        Experience
      </h2>
      <div className="space-y-6">
        {experience.map((job, index) => (
          <Card key={index} className="bg-card/50 p-6 backdrop-blur-sm">
            <div className="space-y-5">
              <div className="space-y-1">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold">{job.title}</h3>
                    <p className="text-muted-foreground">
                      {job.company} • {job.period}
                    </p>
                    <p className="flex items-center gap-1 text-sm text-muted-foreground">
                      <MapPin className="size-3" />
                      {job.location}
                    </p>
                  </div>
                  {job.website && (
                    <a
                      className="inline-flex items-center gap-1 text-sm text-primary hover:underline"
                      href={`https://${job.website}`}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      {job.website}
                      <ExternalLink className="size-3" />
                    </a>
                  )}
                </div>
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
