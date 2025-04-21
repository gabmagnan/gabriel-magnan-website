'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { HomeIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { strings } from '@/translations/strings';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function NotFound() {
  return (
    <div className="flex min-h-[80vh] items-center justify-center">
      <motion.div
        animate="visible"
        className="max-w-md space-y-6 px-6 text-center"
        initial="hidden"
        variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
      >
        <motion.h1
          className="text-8xl font-bold text-muted-foreground/20"
          variants={fadeIn}
        >
          {strings.global.error.httpCode}
        </motion.h1>

        <motion.div className="space-y-2" variants={fadeIn}>
          <h2 className="text-2xl font-semibold">
            {strings.global.error.title}
          </h2>
          <p className="text-muted-foreground">
            {strings.global.error.description}
          </p>
        </motion.div>

        <motion.div variants={fadeIn}>
          <Button asChild>
            <Link href="/about">
              <HomeIcon className="mr-2 size-4" />
              {strings.global.error.backButton}
            </Link>
          </Button>
        </motion.div>
      </motion.div>
    </div>
  );
}
