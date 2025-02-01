'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { LockIcon, KeyIcon, EyeIcon, EyeOffIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';

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

export default function Password() {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate password verification
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Replace this with your actual password verification logic
    if (password === 'your-secret-password') {
      toast({
        title: 'Access Granted',
        description: 'Welcome to the protected area',
      });
      // Add your redirect or content reveal logic here
    } else {
      toast({
        title: 'Access Denied',
        description: 'Invalid password',
        variant: 'destructive',
      });
    }

    setIsSubmitting(false);
  };

  return (
    <div className="py-12">
      <motion.div
        animate="visible"
        className="mx-auto max-w-md space-y-8"
        initial="hidden"
        variants={staggerContainer}
      >
        <motion.div className="space-y-4 text-center" variants={fadeInUp}>
          <div className="flex justify-center">
            <div className="flex size-16 items-center justify-center rounded-full bg-primary/10">
              <LockIcon className="size-8 text-primary" />
            </div>
          </div>
          <h1 className="text-4xl font-bold tracking-tight">Protected Area</h1>
          <p className="text-xl text-muted-foreground">
            Please enter the password to continue
          </p>
        </motion.div>

        <motion.div variants={fadeInUp}>
          <Card className="bg-card/50 p-6 backdrop-blur-sm">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="space-y-2">
                <label className="text-sm font-medium" htmlFor="password">
                  Password
                </label>
                <div className="relative">
                  <Input
                    required
                    className="pr-10"
                    id="password"
                    placeholder="Enter password"
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <button
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground transition-colors hover:text-foreground"
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <EyeOffIcon className="size-4" />
                    ) : (
                      <EyeIcon className="size-4" />
                    )}
                  </button>
                </div>
              </div>

              <Button className="w-full" disabled={isSubmitting} type="submit">
                {isSubmitting ? (
                  <>Verifying...</>
                ) : (
                  <>
                    <KeyIcon className="mr-2 size-4" />
                    Access
                  </>
                )}
              </Button>
            </form>
          </Card>
        </motion.div>
      </motion.div>
    </div>
  );
}
