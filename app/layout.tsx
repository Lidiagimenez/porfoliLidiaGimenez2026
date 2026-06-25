import './globals.css';
import { Playfair_Display, Kalnia } from 'next/font/google';
import type { Metadata } from 'next';
import Navbar from './components/Navbar';

const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-title', weight: ['400','700'] });
const kalnia = Kalnia({ subsets: ['latin'], variable: '--font-body', weight: ['400','600','700'] });

export const metadata: Metadata = {
  title: 'Gimenez Lidia Elisa — Portfolio',
  description: 'Desarrolladora fullstack. React, Next.js, MySQL, PostgreSQL.',
  authors: [{ name: 'Gimenez Lidia Elisa' }],
  robots: { index: true, follow: true },
  openGraph: {
    title: 'Gimenez Lidia Elisa — Portfolio',
    description: 'Desarrolladora fullstack con foco en React y Next.js.',
    type: 'website',
    locale: 'es_AR',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${playfair.variable} ${kalnia.variable}`}>
      <body>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}