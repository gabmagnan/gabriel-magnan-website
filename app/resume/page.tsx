'use client';

import { Fragment, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import {
  BriefcaseBusiness,
  DownloadIcon,
  GraduationCapIcon,
  HeartIcon,
  LanguagesIcon,
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { type TExperience } from '@/types/experience';
import {
  fadeInUpAnimation,
  staggerContainerAnimation,
} from '@/utils/animations';

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

const education = [
  {
    degree: 'Master of Computer Science',
    school: 'Tech University',
    period: '2016 - 2018',
    description: 'Specialized in Software Engineering and Distributed Systems',
  },
  {
    degree: 'Bachelor of Computer Science',
    school: 'State University',
    period: '2012 - 2016',
    description: "Dean's List, Computer Science Club President",
  },
];

const languages = [
  {
    name: 'English',
    level: 'Native',
    proficiency: '100%',
  },
  {
    name: 'French',
    level: 'Fluent',
    proficiency: '90%',
  },
  {
    name: 'Spanish',
    level: 'Intermediate',
    proficiency: '70%',
  },
  {
    name: 'German',
    level: 'Basic',
    proficiency: '40%',
  },
];

const hobbies = [
  'Photography',
  'Rock Climbing',
  'Open Source Contributing',
  'Piano',
  'Travel',
  'Reading',
];

export default function Resume() {
  const formatDescription = (description: string) => {
    return description.split('\n').map((line, index) => (
      <Fragment key={index}>
        <span dangerouslySetInnerHTML={{ __html: line }} />
      </Fragment>
    ));
  };

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="py-12">
      <motion.div
        animate="visible"
        className="space-y-12"
        initial="hidden"
        variants={staggerContainerAnimation()}
      >
        <div className="space-y-4">
          <motion.h1
            className="text-4xl font-bold tracking-tight"
            variants={fadeInUpAnimation()}
          >
            Resume
          </motion.h1>
          <motion.p
            className="text-xl text-muted-foreground"
            variants={fadeInUpAnimation()}
          >
            My professional journey and qualifications
          </motion.p>
          <motion.div variants={fadeInUpAnimation()}>
            <Button asChild>
              <a
                href="/gabriel_magnan_resume.pdf"
                rel="noopener noreferrer"
                target="_blank"
              >
                <DownloadIcon className="mr-2 size-4" />
                Download Full Resume
              </a>
            </Button>
          </motion.div>
        </div>

        <div className="grid gap-8 lg:grid-cols-[2fr_1fr]">
          <motion.div className="space-y-6" variants={fadeInUpAnimation()}>
            <h2 className="flex items-center gap-2 text-2xl font-semibold">
              <BriefcaseBusiness className="size-6" />
              Experience
            </h2>
            <div className="space-y-6">
              {experience.map((job) => (
                <Card
                  key={job.title}
                  className="bg-card/50 p-6 backdrop-blur-sm"
                >
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
                        <Badge
                          key={tech.name}
                          icon={tech.iconName}
                          variant="skill"
                        >
                          {tech.name}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </motion.div>

          <motion.div className="space-y-8" variants={fadeInUpAnimation()}>
            <div className="space-y-6">
              <h2 className="flex items-center gap-2 text-2xl font-semibold">
                <GraduationCapIcon className="size-6" />
                Education
              </h2>
              <div className="space-y-6">
                {education.map((edu) => (
                  <Card
                    key={edu.degree}
                    className="bg-card/50 p-6 backdrop-blur-sm"
                  >
                    <div className="space-y-2">
                      <h3 className="text-lg font-semibold">{edu.degree}</h3>
                      <p className="text-muted-foreground">
                        {edu.school} • {edu.period}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {edu.description}
                      </p>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <h2 className="flex items-center gap-2 text-2xl font-semibold">
                <LanguagesIcon className="size-6" />
                Languages
              </h2>
              <Card className="bg-card/50 p-6 backdrop-blur-sm">
                <div className="space-y-4">
                  {languages.map((lang) => (
                    <div key={lang.name} className="space-y-2">
                      <div className="flex justify-between">
                        <span className="font-medium">{lang.name}</span>
                        <span className="text-muted-foreground">
                          {lang.level}
                        </span>
                      </div>
                      <div className="h-2 overflow-hidden rounded-full bg-secondary">
                        <div
                          className="h-full rounded-full bg-primary transition-all duration-500"
                          style={{ width: lang.proficiency }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </div>

            <div className="space-y-6">
              <h2 className="flex items-center gap-2 text-2xl font-semibold">
                <HeartIcon className="size-6" />
                Hobbies & Interests
              </h2>
              <Card className="bg-card/50 p-6 backdrop-blur-sm">
                <div className="flex flex-wrap gap-2">
                  {hobbies.map((hobby) => (
                    <Badge
                      key={hobby}
                      className="bg-background/50"
                      variant="secondary"
                    >
                      {hobby}
                    </Badge>
                  ))}
                </div>
              </Card>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
