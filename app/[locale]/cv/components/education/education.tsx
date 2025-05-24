'use client';

import { useTranslations } from 'next-intl';

import { ArticleTitle, NoWrap, TextSmall } from '@/components';

import { educationData } from './education.data';
import { Container, Item, Header, Text } from './education.styled';

export default function Education() {
  const t = useTranslations('cvPage.education');

  return (
    <Container>
      {educationData.map((education) => (
        <Item key={t(education.fieldKey)}>
          <Header>
            <ArticleTitle>{t(education.fieldKey)}</ArticleTitle>
            <TextSmall>{t(education.institutionKey)} | <NoWrap>{education.date}</NoWrap></TextSmall>
          </Header>
          <Text>
            {t('specialization')}<br />
            {t(education.specializationKey)}
          </Text>
          <Text>{t('degree')} {t(education.degreeKey)}</Text>
        </Item>
      ))}
    </Container>
  );
}
