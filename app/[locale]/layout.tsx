import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { notFound } from 'next/navigation';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import { ThemeProvider } from '@mui/material/styles';
import { NextIntlClientProvider, hasLocale } from 'next-intl';

import '@/styles/globals.css';

import { StyledComponentsRegistry } from '@/lib/styled-components';
import { theme } from '@/lib/mui';
import { Header } from '@/components';
import { Footer } from '@/components';
import { routing } from '@/i18n';

import { Props } from './layout.types';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Mikołaj Pęcak',
  description: 'Mikołaj Pęcak - Programowanie z pasji',
};

export default async function RootLayout({ children, params }: Props) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  
  return (
    <html lang={locale}>
      <body className={inter.className}>
        <NextIntlClientProvider>
          <StyledComponentsRegistry>
            <AppRouterCacheProvider>
              <ThemeProvider theme={theme}>
                <Header />
                {children}
                <Footer />
              </ThemeProvider>
            </AppRouterCacheProvider>
          </StyledComponentsRegistry>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
