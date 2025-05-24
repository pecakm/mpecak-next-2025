'use client';

import { useParams } from 'next/navigation';

export const useLocalePath = () => {
  const { locale } = useParams();
  
  return (path: string) => `/${locale}${path}`;
};
