'use client';

import { useTranslations } from 'next-intl';

import { Path } from '@/enums';

import { Container, Title, Highlight } from './header.styled';

export default function Header() {
  const t = useTranslations('components.header');

  return (
    <Container>
      <Title href={Path.Home}>
        {t.rich('title', {
          highlight: (chunks) => <Highlight>{chunks}</Highlight>
        })}
      </Title>
    </Container>
  );
}
