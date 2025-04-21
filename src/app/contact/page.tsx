'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { motion } from 'framer-motion';
import { SendIcon } from 'lucide-react';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { strings } from '@/translations/strings';
import {
  fadeInUpAnimation,
  staggerContainerAnimation,
} from '@/utils/animations';

const formSchema = z.object({
  name: z.string().min(2, strings.contact.form.name.error),
  from: z.string().email(strings.contact.form.email.error),
  message: z.string().min(10, strings.contact.form.message.error),
});

type FormData = z.infer<typeof formSchema>;

export default function Contact() {
  const { toast } = useToast();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(
          result.error || strings.contact.submitToast.error.description
        );
      }

      toast({
        title: strings.contact.submitToast.success.title,
        description: strings.contact.submitToast.success.description,
      });

      reset();
    } catch (error) {
      toast({
        title: strings.contact.submitToast.error.title,
        description:
          error instanceof Error
            ? error.message
            : strings.contact.submitToast.error.description,
        variant: 'error',
      });
    }
  };

  return (
    <div className="py-12">
      <motion.div
        animate="visible"
        className="mx-auto max-w-2xl space-y-8"
        initial="hidden"
        variants={staggerContainerAnimation()}
      >
        <motion.div
          className="space-y-4 text-center"
          variants={fadeInUpAnimation()}
        >
          <h1 className="text-4xl font-bold tracking-tight">
            {strings.contact.title}
          </h1>
          <p className="text-xl text-muted-foreground">
            {strings.contact.description}
          </p>
        </motion.div>

        <motion.div variants={fadeInUpAnimation()}>
          <Card className="bg-card/50 p-6 backdrop-blur-sm">
            <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
              <div className="space-y-4">
                <div>
                  <label
                    className="mb-2 block text-sm font-medium"
                    htmlFor="name"
                  >
                    {strings.contact.form.name.label}
                  </label>
                  <Input
                    id="name"
                    {...register('name')}
                    required
                    minLength={2}
                    name="name"
                    placeholder={strings.contact.form.name.placeholder}
                  />
                  {errors.name && (
                    <p className="mt-2 text-sm text-destructive">
                      {errors.name.message}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    className="mb-2 block text-sm font-medium"
                    htmlFor="email"
                  >
                    {strings.contact.form.email.label}
                  </label>
                  <Input
                    id="email"
                    type="email"
                    {...register('from')}
                    placeholder={strings.contact.form.email.placeholder}
                  />
                  {errors.from && (
                    <p className="mt-2 text-sm text-destructive">
                      {errors.from.message}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    className="mb-2 block text-sm font-medium"
                    htmlFor="message"
                  >
                    {strings.contact.form.message.label}
                  </label>
                  <Textarea
                    id="message"
                    {...register('message')}
                    required
                    minLength={10}
                    name="message"
                    placeholder={strings.contact.form.message.placeholder}
                    rows={5}
                  />
                  {errors.message && (
                    <p className="mt-2 text-sm text-destructive">
                      {errors.message.message}
                    </p>
                  )}
                </div>
              </div>

              <Button className="w-full" disabled={isSubmitting} type="submit">
                {isSubmitting ? (
                  <>{strings.contact.submitLoading}</>
                ) : (
                  <>
                    <SendIcon className="mr-2 size-4" />
                    {strings.contact.submitButton}
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
