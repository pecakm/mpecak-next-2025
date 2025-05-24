'use client';

import { useTranslations } from 'next-intl';

import { PageTitle } from '@/components';

import { ContactInfo, SocialInfo } from '../../data';
import Info from '../info/info';

import { Container, Content, Text, InfoContainer } from './pageContent.styled';

export default function PageContent() {
  const t = useTranslations('contactPage.pageContent');
  
  return (
    <Container>
      <Content>
        <PageTitle>{t('title')}</PageTitle>
        <Text>{t('text')}</Text>
      </Content>
      <InfoContainer>
        <Info title={t('info.title')} text={t('info.text')} items={ContactInfo} />
        <Info title={t('social.title')} text={t('social.text')} items={SocialInfo} />
      </InfoContainer>
    </Container>
  );
}
