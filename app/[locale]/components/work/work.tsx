'use client';

import { useTranslations } from 'next-intl';

import { SectionTitle, Text } from '@/components';

import { Container, Wrapper } from './work.styled';

export default function Work() {
  const t = useTranslations('homePage.work');

  return (
    <Container>
      <Wrapper>
        <SectionTitle>{t('title')}</SectionTitle>
        <Text>{t('text')}</Text>
      </Wrapper>
    </Container>
  );
}
