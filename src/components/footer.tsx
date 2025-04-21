'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { LinkedinIcon, MailIcon, MoonIcon, SunIcon } from 'lucide-react';
import { useTheme } from 'next-themes';
import CustomLink from '@/components/CustomLink';
import { Button } from '@/components/ui/button';
import { strings } from '@/translations/strings';
import { type TSocialLink } from '@/types/socialLink';
import { fadeInUpAnimation } from '@/utils/animations';

export function Footer() {
  const { setTheme, theme } = useTheme();

  const socialLinks: TSocialLink[] = [
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/gabriel-magnan/',
      icon: LinkedinIcon,
    },
    {
      name: 'Email',
      href: '/contact',
      icon: MailIcon,
    },
  ];

  return (
    <motion.footer
      className="border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
      initial="hidden"
      variants={fadeInUpAnimation({
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
      })}
      viewport={{ once: true }}
      whileInView="visible"
    >
      <div className="container mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="py-12">
          <div className="grid gap-8 md:grid-cols-[1fr_auto_1fr]">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Gabriel Magnan</h3>
              <p className="max-w-xs text-sm text-muted-foreground">
                {strings.global.footer.firstSectionDescription}
              </p>
            </div>

            <nav className="space-y-4">
              <h3 className="text-lg font-semibold">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    href="/about"
                  >
                    {strings.global.sections.about}
                  </Link>
                </li>
                {/*<li>
                  <Link
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    href="/portfolio"
                  >
                    Portfolio
                  </Link>
                </li>*/}
                <li>
                  <Link
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    href="/resume"
                  >
                    {strings.global.sections.resume}
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    href="/contact"
                  >
                    {strings.global.sections.contact}
                  </Link>
                </li>
              </ul>
            </nav>

            <div className="space-y-4 md:text-right">
              <h3 className="text-lg font-semibold">
                {strings.global.footer.thirdSectionTitle}
              </h3>
              <div className="flex gap-4 md:justify-end">
                {socialLinks.map((link) => {
                  const Icon = link.icon;
                  return (
                    <CustomLink
                      key={link.name}
                      className="text-muted-foreground transition-colors hover:text-foreground"
                      href={link.href}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <Icon className="size-5" />
                    </CustomLink>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="mt-12 flex flex-col items-center gap-4 border-t pt-8">
            <Button
              className="rounded-full"
              size="icon"
              variant="ghost"
              onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
            >
              <SunIcon className="size-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <MoonIcon className="absolute size-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            </Button>
            <p className="text-sm text-muted-foreground">
              {strings.global.footer.copyright}
            </p>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}
