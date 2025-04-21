'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import Cookies from 'js-cookie';
import { EyeIcon, EyeOffIcon, KeyIcon, LockIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { COOKIES_ACCESS_PASSWORD } from '@/env-constants';
import { strings } from '@/translations/strings';
import {
  fadeInUpAnimation,
  staggerContainerAnimation,
} from '@/utils/animations';

export default function Password() {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate password verification
    await new Promise((resolve) => setTimeout(resolve, 1000));

    Cookies.set(COOKIES_ACCESS_PASSWORD, password, { expires: 7 });
    router.refresh();
    setIsSubmitting(false);
    setPassword('');
  };

  return (
    <div className="py-12">
      <motion.div
        animate="visible"
        className="mx-auto max-w-md space-y-8"
        initial="hidden"
        variants={staggerContainerAnimation()}
      >
        <motion.div
          className="space-y-4 text-center"
          variants={fadeInUpAnimation()}
        >
          <div className="flex justify-center">
            <div className="flex size-16 items-center justify-center rounded-full bg-primary/10">
              <LockIcon className="size-8 text-primary" />
            </div>
          </div>
          <h1 className="text-4xl font-bold tracking-tight">
            {strings.password.title}
          </h1>
          <p className="text-xl text-muted-foreground">
            {strings.password.description}
          </p>
        </motion.div>

        <motion.div variants={fadeInUpAnimation()}>
          <Card className="bg-card/50 p-6 backdrop-blur-sm">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="space-y-2">
                <label className="text-sm font-medium" htmlFor="password">
                  {strings.password.form.password.label}
                </label>
                <div className="relative">
                  <Input
                    required
                    className="pr-10"
                    id="password"
                    placeholder={strings.password.form.password.placeholder}
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
                  <>{strings.password.submitLoading}</>
                ) : (
                  <>
                    <KeyIcon className="mr-2 size-4" />
                    {strings.password.submitButton}
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
