'use client';

import { ArticleTitle } from '@/components';

import { Skill } from '../../page.styled';

import { Container, Item, List } from './skills.styled';
import { skillsData } from './skills.data';

export default function Skills() {
  return (
    <Container>
      {skillsData.map((skill) => (
        <Item key={skill.title}>
          <ArticleTitle>{skill.title}</ArticleTitle>
          <List>{skill.items.map((item) => <Skill key={item}>{item}</Skill>)}</List>
        </Item>
      ))}
    </Container>
  );
}
