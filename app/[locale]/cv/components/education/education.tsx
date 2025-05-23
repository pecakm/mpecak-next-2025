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
        <Item key={education.field}>
          <Header>
            <ArticleTitle>{education.field}</ArticleTitle>
            <TextSmall>{education.institution} | <NoWrap>{education.date}</NoWrap></TextSmall>
          </Header>
          <Text>
            {t('specialization')}<br />
            {education.specialization}
          </Text>
          <Text>{t('degree')} {education.degree}</Text>
        </Item>
      ))}
    </Container>
  );
}
