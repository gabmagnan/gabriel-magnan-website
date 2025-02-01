'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ExternalLinkIcon, GithubIcon, StarIcon } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

const projects = [
  {
    title: 'E-commerce Platform',
    description:
      'A full-stack e-commerce platform with real-time inventory management, secure payments via Stripe, and an intuitive admin dashboard.',
    image: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc',
    technologies: [
      'Next.js',
      'TypeScript',
      'Stripe',
      'Prisma',
      'PostgreSQL',
      'TailwindCSS',
    ],
    github: '#',
    demo: '#',
    featured: true,
  },
  {
    title: 'AI-Powered Task Manager',
    description:
      'Smart task management application that uses AI to prioritize and categorize tasks, with real-time collaboration features.',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40',
    technologies: [
      'React',
      'Node.js',
      'Socket.io',
      'MongoDB',
      'OpenAI',
      'Express',
    ],
    github: '#',
    demo: '#',
    featured: true,
  },
  {
    title: 'Real-Time Analytics Dashboard',
    description:
      'Interactive analytics dashboard with real-time data visualization, custom reporting, and predictive analytics capabilities.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71',
    technologies: ['React', 'D3.js', 'Node.js', 'WebSocket', 'Redis', 'AWS'],
    github: '#',
    demo: '#',
    featured: false,
  },
  {
    title: 'Social Media Content Manager',
    description:
      'A comprehensive tool for scheduling, analyzing, and optimizing social media content across multiple platforms.',
    image: 'https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07',
    technologies: ['Vue.js', 'Python', 'Django', 'Celery', 'PostgreSQL'],
    github: '#',
    demo: '#',
    featured: false,
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

export default function Portfolio() {
  const featuredProjects = projects.filter((project) => project.featured);
  const otherProjects = projects.filter((project) => !project.featured);

  return (
    <div className="py-12">
      <motion.div
        animate="visible"
        className="space-y-12"
        initial="hidden"
        variants={staggerContainer}
      >
        <motion.div className="space-y-4 text-center" variants={fadeInUp}>
          <h1 className="text-4xl font-bold tracking-tight">Portfolio</h1>
          <p className="text-xl text-muted-foreground">
            A showcase of my recent projects and technical achievements
          </p>
        </motion.div>

        <motion.section className="space-y-6" variants={fadeInUp}>
          <h2 className="flex items-center justify-center gap-2 text-2xl font-semibold">
            <StarIcon className="size-5 text-yellow-500" />
            Featured Projects
          </h2>
          <div className="grid gap-8 md:grid-cols-2">
            {featuredProjects.map((project) => (
              <motion.div
                key={project.title}
                transition={{ duration: 0.2 }}
                variants={fadeInUp}
                whileHover={{ y: -5 }}
              >
                <Card className="group flex h-full flex-col overflow-hidden">
                  <div className="relative aspect-video overflow-hidden">
                    <Image
                      fill
                      alt={project.title}
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 50vw"
                      src={project.image}
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="text-base">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge
                          key={tech}
                          className="bg-background/50"
                          variant="secondary"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="gap-4">
                    <Button asChild variant="outline">
                      <a
                        href={project.github}
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        <GithubIcon className="mr-2 size-4" />
                        View Code
                      </a>
                    </Button>
                    <Button asChild>
                      <a
                        href={project.demo}
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        <ExternalLinkIcon className="mr-2 size-4" />
                        Live Demo
                      </a>
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section className="space-y-6" variants={fadeInUp}>
          <h2 className="text-center text-2xl font-semibold">Other Projects</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {otherProjects.map((project) => (
              <motion.div
                key={project.title}
                transition={{ duration: 0.2 }}
                variants={fadeInUp}
                whileHover={{ y: -5 }}
              >
                <Card className="group flex h-full flex-col">
                  <div className="relative aspect-video overflow-hidden">
                    <Image
                      fill
                      alt={project.title}
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      src={project.image}
                    />
                  </div>
                  <CardHeader>
                    <CardTitle>{project.title}</CardTitle>
                    <CardDescription>{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge
                          key={tech}
                          className="bg-background/50"
                          variant="secondary"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="gap-4">
                    <Button asChild size="sm" variant="outline">
                      <a
                        href={project.github}
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        <GithubIcon className="mr-2 size-4" />
                        Code
                      </a>
                    </Button>
                    <Button asChild size="sm">
                      <a
                        href={project.demo}
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        <ExternalLinkIcon className="mr-2 size-4" />
                        Demo
                      </a>
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </motion.div>
    </div>
  );
}
