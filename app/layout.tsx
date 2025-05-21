import type { Metadata } from 'next';
import { Geist } from 'next/font/google';

import './globals.css';

import { StyledComponentsRegistry } from '@/lib/styled-components';
import { Header } from '@/components';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Mikołaj Pęcak',
  description: 'Mikołaj Pęcak - Programowanie z pasji',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={geistSans.className}>
        <StyledComponentsRegistry>
          <Header />
          {children}
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
