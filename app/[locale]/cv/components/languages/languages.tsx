'use client';

import { useTranslations } from 'next-intl';

import { ArticleTitle, TextSmall } from '@/components';

import { Container, Item } from './languages.styled';
import { languagesData } from './languages.data';

export default function Languages() {
  const t = useTranslations('cvPage.languages');

  return (
    <Container>
      {languagesData.map((language) => (
        <Item key={language.language}>
          <ArticleTitle>{language.language}</ArticleTitle>
          <TextSmall>{t('level')} {language.level}</TextSmall>
        </Item>
      ))}
    </Container>
  );
}
