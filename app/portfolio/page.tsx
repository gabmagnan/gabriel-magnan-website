'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ExternalLinkIcon, GithubIcon, StarIcon } from 'lucide-react';
import { projects } from '@/app/portfolio/data/projects';
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
import {
  fadeInUpAnimation,
  staggerContainerAnimation,
} from '@/utils/animations';

export default function Portfolio() {
  const featuredProjects = projects.filter((project) => project.featured);
  const otherProjects = projects.filter((project) => !project.featured);

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
            Portfolio
          </motion.h1>

          <motion.p
            className="text-xl text-muted-foreground"
            variants={fadeInUpAnimation()}
          >
            A showcase of my recent projects and technical achievements
          </motion.p>
        </div>

        <motion.section className="space-y-6" variants={fadeInUpAnimation()}>
          <h2 className="flex items-center justify-center gap-2 text-2xl font-semibold">
            <StarIcon className="size-5 text-yellow-500" />
            Featured Projects
          </h2>
          <div className="grid gap-8 md:grid-cols-2">
            {featuredProjects.map((project) => (
              <motion.div
                key={project.title}
                transition={{ duration: 0.2 }}
                variants={fadeInUpAnimation()}
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

        <motion.section className="space-y-6" variants={fadeInUpAnimation()}>
          <h2 className="text-center text-2xl font-semibold">Other Projects</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {otherProjects.map((project) => (
              <motion.div
                key={project.title}
                transition={{ duration: 0.2 }}
                variants={fadeInUpAnimation()}
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
