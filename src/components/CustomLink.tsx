// components/CustomLink.tsx
import { type ReactNode } from 'react';
import Link from 'next/link';

interface CustomLinkProps {
  href: string;
  className: string;
  rel: string;
  target: string;
  children: ReactNode;
}

const CustomLink = ({
  href,
  className,
  rel,
  target,
  children,
}: CustomLinkProps) => {
  const isInternalLink = /^\/(?!\/)/.test(href);

  if (isInternalLink) {
    return (
      <Link className={className} href={{ pathname: href }}>
        {children}
      </Link>
    );
  }

  return (
    <a className={className} href={href} rel={rel} target={target}>
      {children}
    </a>
  );
};

export default CustomLink;
