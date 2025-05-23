'use client';

import { ArticleTitle, NoWrap, TextSmall } from '@/components';

import { Container, Item, Description } from './experience.styled';
import { experienceData } from './experience.data';

export default function Experience() {
  return (
    <Container>
      {experienceData.map((experience) => (
        <Item key={experience.title}>
          <ArticleTitle>{experience.title}</ArticleTitle>
          <TextSmall>{experience.company} | <NoWrap>{experience.date}</NoWrap></TextSmall>
          <Description>{experience.description}</Description>
        </Item>
      ))}
    </Container>
  );
}
