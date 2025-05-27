'use client';

import { useTranslations } from 'next-intl';
import { Download } from 'lucide-react';

import { ExternalLink, PageTitle, PrimaryButton, Text } from '@/components';

import { Container, Content } from './header.styled';

export default function Header() {
  const t = useTranslations('cvPage.header');

  return (
    <Container>
      <Content>
        <PageTitle>{t('title')}</PageTitle>
        <Text>{t('description')}</Text>
      </Content>
      <ExternalLink
        href="/mikolaj-pecak-cv-pl-website.pdf"
        target="_blank"
        rel="noopener noreferrer"
      >
        <PrimaryButton>
          <Download size={16} />
          {t('download')}
        </PrimaryButton>
      </ExternalLink>
    </Container>
  );
}
