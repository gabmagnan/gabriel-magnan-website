'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { BriefcaseIcon, LinkedinIcon, Users2Icon } from 'lucide-react';
import profile_picture from '$/assets/profile_picture.webp';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { type TSkill } from '@/types/skill';
import {
  fadeInUpAnimation,
  imageAnimation,
  staggerContainerAnimation,
} from '@/utils/animations';
import { formatDescription } from '@/utils/utils';

const skills: TSkill[] = [
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
    name: 'JavaScript',
    iconName: 'javascript',
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
    name: 'Flutter',
    iconName: 'flutter',
  },
  {
    name: 'Express.js',
    iconName: 'expressjs',
  },
  {
    name: 'Node.js',
    iconName: 'nodejs',
  },
  {
    name: 'Firebase',
    iconName: 'firebase',
  },
  {
    name: 'MySQL',
    iconName: 'mysql',
  },
  {
    name: 'GCP',
    iconName: 'googleCloud',
  },
  {
    name: 'AWS',
    iconName: 'aws',
  },
  {
    name: 'Vercel',
    iconName: 'vercel',
  },
  {
    name: 'React Native',
    iconName: 'react_native',
  },
  {
    name: 'Docker',
    iconName: 'docker',
  },
  {
    name: 'GitHub',
    iconName: 'github',
  },
  {
    name: 'GitLab',
    iconName: 'gitlab',
  },
  {
    name: 'GraphQL',
    iconName: 'graphql',
  },
  {
    name: 'PHP',
    iconName: 'php',
  },
  {
    name: 'Tag Manager',
    iconName: 'tag_manager',
  },
];

const backgroundText =
  'I am a full-stack engineer with <strong class="font-bold text-black dark:text-white">5 years of experience</strong> in developing scalable web applications. ' +
  ' My employment history scales across multiple settings; from working for a large enterprise, to creating my own' +
  ' company, and to most recently working in a fast-paced environment at a startup.' +
  ' My focus is centered around creating <strong class="font-bold text-black dark:text-white">modern solutions</strong>' +
  ' with <strong class="font-bold text-black dark:text-white">robust backend</strong> and <strong class="font-bold' +
  ' text-black dark:text-white">seamless user experience.</strong> ' +
  ' Most people would describe me as <strong class="font-bold text-black dark:text-white">professional, curious,' +
  ' logical, and ambitious</strong>. I collaborate efficiently with' +
  ' diverse teams, am recognised for my <strong class="font-bold text-black dark:text-white">strong coding skills.</strong>';

const profiles = [
  {
    name: 'Malt',
    icon: BriefcaseIcon,
    description: 'Hire me for freelance projects',
    url: 'https://www.malt.fr/profile/gabrielmagnan2',
    color: 'text-rose-500',
  },
  {
    name: 'Collective',
    icon: Users2Icon,
    description: 'View my developer collective profile',
    url: 'https://www.collective.work/profile/gabriel-magnan',
    color: 'text-purple-500',
  },
  {
    name: 'LinkedIn',
    icon: LinkedinIcon,
    description: 'Connect with me professionally',
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

export default function About() {
  return (
    <div className="w-full space-y-16 py-12">
      <motion.section
        animate="visible"
        className="flex flex-col-reverse items-center gap-8 md:flex-row"
        initial="hidden"
        variants={staggerContainerAnimation()}
      >
        <motion.div
          className="flex-1 space-y-6"
          variants={staggerContainerAnimation()}
        >
          <div className="space-y-4">
            <motion.h1
              className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-5xl font-bold leading-tight tracking-tight text-transparent md:leading-[1.2]"
              variants={fadeInUpAnimation()}
            >
              {`Hi, I'm Gabriel Magnan 👋`}
            </motion.h1>
            <motion.p
              className="text-xl leading-relaxed text-muted-foreground"
              variants={fadeInUpAnimation()}
            >
              A passionate Software Engineer specializing in building
              exceptional digital experiences.
            </motion.p>
          </div>
        </motion.div>
        <motion.div
          className="relative size-48 md:size-64"
          variants={imageAnimation()}
        >
          <Image
            fill
            alt="Gabriel Magnan"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4eHRoaHSQtJSEkLzYvLy02Mi85OEI2PTZFOT5ZXVlphZmZnHR8goqLlJSL4eLz///2wBDARUXFx4eHh4eHiIiIiIuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4v/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
            className="rounded-full object-cover shadow-2xl"
            loading="lazy"
            placeholder="blur"
            quality={75}
            sizes="(max-width: 768px) 192px, 256px"
            src={profile_picture}
            //translations="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d"
          />
          <motion.div
            animate={{ opacity: 0.1 }}
            className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-purple-600"
            initial={{ opacity: 0 }}
            transition={{ duration: 1 }}
          />
        </motion.div>
      </motion.section>

      <motion.section
        className="space-y-8"
        initial="hidden"
        variants={staggerContainerAnimation()}
        viewport={{ once: true, margin: '-100px' }}
        whileInView="visible"
      >
        <motion.h2
          className="text-center text-3xl font-bold tracking-tight"
          variants={fadeInUpAnimation()}
        >
          About Me
        </motion.h2>
        <div className="xs:px-2 grid justify-center gap-8 md:grid-cols-[60%_40%] md:px-4">
          <motion.div variants={fadeInUpAnimation()}>
            <Card className="h-full space-y-4 bg-card/50 p-6 backdrop-blur-sm">
              <h3 className="text-xl font-semibold">Background</h3>
              <p className="leading-relaxed text-muted-foreground">
                {formatDescription(backgroundText)}
              </p>
            </Card>
          </motion.div>
          <motion.div variants={fadeInUpAnimation()}>
            <Card className="h-full space-y-4 bg-card/50 p-6 backdrop-blur-sm">
              <h3 className="text-xl font-semibold">Skills</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill: TSkill) => (
                  <Badge key={skill.name} icon={skill.iconName} variant="skill">
                    {skill.name}
                  </Badge>
                ))}
              </div>
            </Card>
          </motion.div>
        </div>
      </motion.section>

      <motion.section
        className="space-y-8"
        initial="hidden"
        variants={staggerContainerAnimation()}
        viewport={{ once: true, margin: '-100px' }}
        whileInView="visible"
      >
        <motion.h2
          className="text-center text-3xl font-bold tracking-tight"
          variants={fadeInUpAnimation()}
        >
          Where to Find Me
        </motion.h2>
        <motion.div
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          variants={staggerContainerAnimation()}
        >
          {profiles.map((profile) => {
            const Icon = profile.icon;
            return (
              <motion.a
                key={profile.name}
                className="group"
                href={profile.url}
                rel="noopener noreferrer"
                target="_blank"
                variants={fadeInUpAnimation()}
              >
                <Card className="h-full bg-card/50 p-6 backdrop-blur-sm">
                  <div className="space-y-4">
                    <Icon className={`size-8 ${profile.color}`} />
                    <div>
                      <h3 className="text-xl font-semibold">{profile.name}</h3>
                      <p className="text-muted-foreground">
                        {profile.description}
                      </p>
                    </div>
                  </div>
                </Card>
              </motion.a>
            );
          })}
        </motion.div>
      </motion.section>
    </div>
  );
}
