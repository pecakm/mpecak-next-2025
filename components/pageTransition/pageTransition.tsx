'use client';

import { ReactNode } from 'react';
import { usePathname } from 'next/navigation';

import { Container } from './pageTransition.styled';

type Props = {
  children: ReactNode;
};

export default function PageTransition({ children }: Props) {
  const pathname = usePathname();

  return (
    <Container key={pathname}>
      {children}
    </Container>
  );
}
