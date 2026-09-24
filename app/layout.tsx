import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Stream Club — Dashboard frontend',
  description: 'Prototype responsive de gestion d’abonnements partagé, réalisé avec React et TypeScript.',
  openGraph: {
    title: 'Stream Club',
    description: 'Un dashboard responsive pensé pour organiser des abonnements partagés.',
    images: ['/og.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Stream Club',
    description: 'Un dashboard responsive pensé pour organiser des abonnements partagés.',
    images: ['/og.png'],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="fr"><body>{children}</body></html>;
}

