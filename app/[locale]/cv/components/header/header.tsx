'use client';

import { useTranslations } from 'next-intl';

import { PageTitle, Text } from '@/components';

import { Container, Content } from './header.styled';

export default function Header() {
  const t = useTranslations('cvPage.header');

  return (
    <Container>
      <Content>
        <PageTitle>{t('title')}</PageTitle>
        <Text>{t('description')}</Text>
      </Content>
    </Container>
  );
}
