'use client';

import { useTranslations } from 'next-intl';
import { Github } from 'lucide-react';

import { Links } from '@/constants';
import { PageTitle, PrimaryButton } from '@/components';

import List from '../list/list';

import { Container, Content, Text, StyledLink } from './pageContent.styled';

export default function PageContent() {
  const t = useTranslations('portfolioPage.pageContent');

  return (
    <Container>
      <Content>
        <PageTitle>{t('title')}</PageTitle>
        <Text>{t('text')}</Text>
      </Content>
      <List />
      <StyledLink href={Links.GitHub} target="_blank" rel="noopener noreferrer">
        <PrimaryButton>
          {t('more')}
          <Github size={16} />
        </PrimaryButton>
      </StyledLink>
    </Container>
  );
}
