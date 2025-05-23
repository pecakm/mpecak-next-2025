'use client';

import { useTranslations } from 'next-intl';

import { Skill } from '../../page.styled';

import { interestsData } from './interests.data';
import { Container } from './interests.styled';

export default function Interests() {
  const t = useTranslations('cvPage.interests');

  return (
    <Container>
      {interestsData.map((interest) => (
        <Skill key={interest}>{t(interest)}</Skill>
      ))}
    </Container>
  );
}
