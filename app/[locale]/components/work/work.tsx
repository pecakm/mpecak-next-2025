'use client';

import { useTranslations } from 'next-intl';

import { Container, Wrapper, Title, Text } from './work.styled';

export default function Work() {
  const t = useTranslations('homePage.work');

  return (
    <Container>
      <Wrapper>
        <Title>{t('title')}</Title>
        <Text>{t('text')}</Text>
      </Wrapper>
    </Container>
  );
}
