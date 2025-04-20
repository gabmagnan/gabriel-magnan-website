'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { DownloadIcon } from 'lucide-react';
import Education from '@/app/resume/_components/Education';
import Experience from '@/app/resume/_components/Experience';
import HobbiesInterests from '@/app/resume/_components/HobbiesInterests';
import Languages from '@/app/resume/_components/Languages';
import { Button } from '@/components/ui/button';
import {
  fadeInUpAnimation,
  staggerContainerAnimation,
} from '@/utils/animations';

export default function Resume() {
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
            <Experience />
          </motion.div>
          <motion.div className="space-y-8" variants={fadeInUpAnimation()}>
            <Education />
            <Languages />
            <HobbiesInterests />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
