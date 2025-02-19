'use client';

import * as React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { MenuIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { cn } from '@/lib/utils';

type Route = {
  href: '/' | '/portfolio' | '/resume' | '/contact';
  label: string;
};

const routes: Route[] = [
  {
    href: '/',
    label: 'About',
  },
  {
    href: '/portfolio',
    label: 'Portfolio',
  },
  {
    href: '/resume',
    label: 'Resume',
  },
  {
    href: '/contact',
    label: 'Contact',
  },
];

export function Navigation() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <nav className="flex h-16 items-center justify-between">
          <Link className="text-xl font-bold" href="/">
            GM
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center space-x-8 text-sm font-medium md:flex">
            {routes.map((route) => (
              <Link
                key={route.href}
                className={cn(
                  'transition-colors hover:text-foreground/80',
                  pathname === route.href
                    ? 'text-foreground'
                    : 'text-foreground/60'
                )}
                href={route.href}
              >
                {route.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Trigger */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button size="icon" variant="ghost">
                <MenuIcon className="size-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent className="w-[300px] sm:w-[400px]" side="right">
              <SheetTitle className="text-left">Navigation Menu</SheetTitle>
              <nav className="mt-8 flex flex-col gap-4">
                {routes.map((route) => (
                  <Link
                    key={route.href}
                    className={cn(
                      'rounded-md px-2 py-1 text-lg font-medium transition-colors hover:text-foreground/80',
                      pathname === route.href
                        ? 'bg-secondary text-foreground'
                        : 'text-foreground/60'
                    )}
                    href={route.href}
                    onClick={() => setIsOpen(false)}
                  >
                    {route.label}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </nav>
      </div>
    </header>
  );
}
