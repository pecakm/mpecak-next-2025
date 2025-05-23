'use client';

import { useTranslations } from 'next-intl';

import { ArticleTitle, TextSmall } from '@/components';

import { Container, Item, Text } from './activities.styled';
import { activitiesData } from './activities.data';

export default function Activities() {
  const t = useTranslations('cvPage.activities');

  return (
    <Container>
      {activitiesData.map((activity) => (
        <Item key={`${activity.institution}-${activity.date}`}>
          <ArticleTitle>{activity.institution}</ArticleTitle>
          <TextSmall>{activity.date}</TextSmall>
          <Text>{t(activity.infoKey)}</Text>
        </Item>
      ))}
    </Container>
  );
}
