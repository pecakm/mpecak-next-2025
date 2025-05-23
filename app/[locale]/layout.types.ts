import { ReactNode } from 'react';

export type Props = Readonly<{
  children: ReactNode;
  params: Promise<{ locale: string }>;
}>;
