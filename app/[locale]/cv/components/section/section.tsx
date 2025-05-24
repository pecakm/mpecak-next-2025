'use client';

import { ArticleTitle } from '@/components';

import { Props } from './section.types';
import { Container } from './section.styled';

export default function Section({ title, children }: Props) {
  return (
    <Container>
      <ArticleTitle>{title}</ArticleTitle>
      {children}
    </Container>
  );
}
