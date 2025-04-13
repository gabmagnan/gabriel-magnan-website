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
import {
  fadeInUpAnimation,
  staggerContainerAnimation,
} from '@/utils/animations';

const formSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  from: z.string().email('Invalid email address'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
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
        throw new Error(result.error || 'Failed to send message');
      }

      toast({
        title: 'Message sent!',
        description: "Thank you for reaching out. I'll get back to you soon.",
      });

      reset();
    } catch (error) {
      toast({
        title: 'Error',
        description:
          error instanceof Error ? error.message : 'Failed to send message',
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
          <h1 className="text-4xl font-bold tracking-tight">Contact Me</h1>
          <p className="text-xl text-muted-foreground">
            Have a question or want to work together?
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
                    Name
                  </label>
                  <Input
                    id="name"
                    {...register('name')}
                    required
                    minLength={2}
                    name="name"
                    placeholder="Your name"
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
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    {...register('from')}
                    placeholder="your@email.com"
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
                    Message
                  </label>
                  <Textarea
                    id="message"
                    {...register('message')}
                    required
                    minLength={10}
                    name="message"
                    placeholder="Your message..."
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
                  <>Sending...</>
                ) : (
                  <>
                    <SendIcon className="mr-2 size-4" />
                    Send Message
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
