'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { MailIcon, SendIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import {
  fadeInUpAnimation,
  staggerContainerAnimation,
} from '@/utils/animations';

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: 'Message sent!',
      description: "Thank you for reaching out. I'll get back to you soon.",
    });

    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
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
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="space-y-4">
                <div>
                  <label
                    className="mb-2 block text-sm font-medium"
                    htmlFor="name"
                  >
                    Name
                  </label>
                  <Input
                    required
                    id="name"
                    minLength={2}
                    name="name"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label
                    className="mb-2 block text-sm font-medium"
                    htmlFor="email"
                  >
                    Email
                  </label>
                  <Input
                    required
                    id="email"
                    name="email"
                    placeholder="your@email.com"
                    type="email"
                  />
                </div>

                <div>
                  <label
                    className="mb-2 block text-sm font-medium"
                    htmlFor="message"
                  >
                    Message
                  </label>
                  <Textarea
                    required
                    id="message"
                    minLength={10}
                    name="message"
                    placeholder="Your message..."
                    rows={5}
                  />
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

        <motion.div
          className="space-y-4 text-center"
          variants={fadeInUpAnimation()}
        >
          <div className="inline-flex items-center justify-center gap-2 text-muted-foreground">
            <MailIcon className="size-5" />
            <span>Or email me directly at:</span>
          </div>
          <a
            className="block text-lg font-medium transition-colors hover:text-primary"
            href="mailto:gabriel@magnan.com"
          >
            gabriel@magnan.com
          </a>
        </motion.div>
      </motion.div>
    </div>
  );
}
