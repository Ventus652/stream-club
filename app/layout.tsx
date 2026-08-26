import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Stream Club — Nos accès partagés',
  description: 'L’espace commun de notre groupe pour retrouver nos abonnements.',
  openGraph: {
    title: 'Stream Club',
    description: 'Nos accès, au même endroit.',
    images: ['/og.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Stream Club',
    description: 'Nos accès, au même endroit.',
    images: ['/og.png'],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="fr"><body>{children}</body></html>;
}
