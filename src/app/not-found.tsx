'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { HomeIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';

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
          404
        </motion.h1>

        <motion.div className="space-y-2" variants={fadeIn}>
          <h2 className="text-2xl font-semibold">Page Not Found</h2>
          <p className="text-muted-foreground">
            {`The page you're looking for doesn't exist or has been moved.`}
          </p>
        </motion.div>

        <motion.div variants={fadeIn}>
          <Button asChild>
            <Link href="/">
              <HomeIcon className="mr-2 size-4" />
              Back to Home
            </Link>
          </Button>
        </motion.div>
      </motion.div>
    </div>
  );
}
