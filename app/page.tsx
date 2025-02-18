'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  BriefcaseIcon,
  GithubIcon,
  Globe2Icon,
  LinkedinIcon,
  Users2Icon,
} from 'lucide-react';
import profile_picture from '$/assets/profile_picture.webp';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { BASE_URL } from '@/env-constants';
import { type TSkill } from '@/types/skill';

const skills: TSkill[] = [
  {
    name: 'React.js',
    iconName: 'react',
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
    name: 'Next.js',
    iconName: 'nextjs',
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
    name: 'Docker',
    iconName: 'docker',
  },
  {
    name: 'MongoDB',
    iconName: 'mongodb',
  },
  {
    name: 'MySQL',
    iconName: 'mysql',
  },
];

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
  {
    name: 'GitHub',
    icon: GithubIcon,
    description: 'Check out my open source work',
    url: 'https://github.com/gabrielmagnan',
    color: 'text-gray-700 dark:text-gray-300',
  },
  {
    name: 'Portfolio',
    icon: Globe2Icon,
    description: 'Visit my personal website',
    url: `${BASE_URL}/portfolio`,
    color: 'text-green-500',
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 15,
    },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const imageAnimation = {
  hidden: {
    opacity: 0,
    scale: 0.8,
    rotate: -10,
  },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 20,
    },
  },
};

export default function Home() {
  return (
    <div className="w-full space-y-16 py-12">
      <motion.section
        animate="visible"
        className="flex flex-col-reverse items-center gap-8 md:flex-row"
        initial="hidden"
        variants={staggerContainer}
      >
        <motion.div className="flex-1 space-y-6" variants={staggerContainer}>
          <div className="space-y-4">
            <motion.h1
              className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-5xl font-bold leading-tight tracking-tight text-transparent md:leading-[1.2]"
              variants={fadeInUp}
            >
              {`Hi, I'm Gabriel Magnan 👋`}
            </motion.h1>
            <motion.p
              className="text-xl leading-relaxed text-muted-foreground"
              variants={fadeInUp}
            >
              A passionate Software Engineer specializing in building
              exceptional digital experiences.
            </motion.p>
          </div>
        </motion.div>
        <motion.div
          className="relative size-48 md:size-64"
          variants={imageAnimation}
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
            //src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d"
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
        variants={staggerContainer}
        viewport={{ once: true, margin: '-100px' }}
        whileInView="visible"
      >
        <motion.h2
          className="text-center text-3xl font-bold tracking-tight"
          variants={fadeInUp}
        >
          About Me
        </motion.h2>
        <div className="grid gap-8 md:grid-cols-2">
          <motion.div variants={fadeInUp}>
            <Card className="h-full space-y-4 bg-card/50 p-6 backdrop-blur-sm">
              <h3 className="text-xl font-semibold">Background</h3>
              <p className="leading-relaxed text-muted-foreground">
                {`With over 5 years of experience in software development, I've
                worked on various projects ranging from small business websites
                to large-scale enterprise applications. I'm passionate about
                creating efficient, scalable, and user-friendly solutions.`}
              </p>
            </Card>
          </motion.div>
          <motion.div variants={fadeInUp}>
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
        variants={staggerContainer}
        viewport={{ once: true, margin: '-100px' }}
        whileInView="visible"
      >
        <motion.h2
          className="text-center text-3xl font-bold tracking-tight"
          variants={fadeInUp}
        >
          Where to Find Me
        </motion.h2>
        <motion.div
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          variants={staggerContainer}
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
                variants={fadeInUp}
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
