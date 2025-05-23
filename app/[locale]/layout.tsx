import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { notFound } from 'next/navigation';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import { ThemeProvider } from '@mui/material/styles';
import { NextIntlClientProvider, hasLocale } from 'next-intl';

import '@/styles/globals.css';

import { StyledComponentsRegistry } from '@/lib/styled-components';
import { theme } from '@/lib/mui';
import { Header, Footer, BgAnim, PageTransition } from '@/components';
import { routing } from '@/i18n';
import { CountryCode } from '@/enums';

import { Props } from './layout.types';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
});

export const dynamic = 'force-static';

export const generateStaticParams = async () => {
  return [
    { locale: CountryCode.PL },
    { locale: CountryCode.EN },
  ];
};

export const metadata: Metadata = {
  title: 'Mikołaj Pęcak',
  description: 'Mikołaj Pęcak - Programowanie z pasji',
};

async function getMessages(locale: string) {
  try {
    return (await import(`@/i18n/${locale}.json`)).default;
  } catch {
    notFound();
  }
}

export default async function RootLayout({ children, params }: Props) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const messages = await getMessages(locale);
  
  return (
    <html lang={locale}>
      <body className={inter.className}>
        <NextIntlClientProvider messages={messages}>
          <StyledComponentsRegistry>
            <AppRouterCacheProvider>
              <ThemeProvider theme={theme}>
                <BgAnim />
                <Header />
                <PageTransition>
                  {children}
                </PageTransition>
                <Footer />
              </ThemeProvider>
            </AppRouterCacheProvider>
          </StyledComponentsRegistry>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
