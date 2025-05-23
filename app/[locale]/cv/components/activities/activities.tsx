'use client';

import { ArticleTitle, TextSmall } from '@/components';

import { Container, Item, Text } from './activities.styled';
import { activitiesData } from './activities.data';

export default function Activities() {
  return (
    <Container>
      {activitiesData.map((activity) => (
        <Item key={`${activity.institution}-${activity.date}`}>
          <ArticleTitle>{activity.institution}</ArticleTitle>
          <TextSmall>{activity.date}</TextSmall>
          <Text>{activity.info}</Text>
        </Item>
      ))}
    </Container>
  );
}
