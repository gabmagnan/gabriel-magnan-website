import { strings } from '@/translations/strings';
import type { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  return strings.portfolio.metadata;
}

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
