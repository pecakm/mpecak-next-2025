'use client';

import { useTranslations } from 'next-intl';

import { ArticleTitle } from '@/components';

import { Skill } from '../../page.styled';

import { Container, Item, List } from './skills.styled';
import { skillsData } from './skills.data';

export default function Skills() {
  const t = useTranslations('cvPage.skills');

  return (
    <Container>
      {skillsData.map((skill) => (
        <Item key={skill.titleKey}>
          <ArticleTitle>{t(skill.titleKey)}</ArticleTitle>
          <List>{skill.items.map((item) => <Skill key={item}>{item}</Skill>)}</List>
        </Item>
      ))}
    </Container>
  );
}
