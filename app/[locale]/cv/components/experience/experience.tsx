'use client';

import { useTranslations } from 'next-intl';

import { ArticleTitle, NoWrap, TextSmall } from '@/components';

import { Container, Item, Description } from './experience.styled';
import { experienceData } from './experience.data';

export default function Experience() {
  const t = useTranslations('cvPage.experience');

  return (
    <Container>
      {experienceData.map((experience) => (
        <Item key={experience.titleKey}>
          <ArticleTitle>{t(experience.titleKey)}</ArticleTitle>
          <TextSmall>{t(experience.companyKey)} | <NoWrap>{t(experience.dateKey)}</NoWrap></TextSmall>
          <Description>{t(experience.descriptionKey)}</Description>
        </Item>
      ))}
    </Container>
  );
}
