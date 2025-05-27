'use client';

import { useTranslations } from 'next-intl';
import { ArrowRight } from 'lucide-react';

import Experience from '../experience/experience';
import Skills from '../skills/skills';
import Languages from '../languages/languages';
import Education from '../education/education';
import Activities from '../activities/activities';
import Interests from '../interests/interests';
import Section from '../section/section';
import Header from '../header/header';

import { Container, StyledButton } from './pageContent.styled';

export default function PageContent() {
  const t = useTranslations('cvPage.pageContent');

  return (
    <Container>
      <Header />
      <Section title={t('experience')}>
        <Experience />
      </Section>
      <Section title={t('skills')}>
        <Skills />
      </Section>
      <Section title={t('languages')}>
        <Languages />
      </Section>
      <Section title={t('education')}>
        <Education />
      </Section>
      <Section title={t('activities')}>
        <Activities />
      </Section>
      <Section title={t('interests')}>
        <Interests />
      </Section>
      <StyledButton>
        {t('contact')}
        <ArrowRight size={16} />
      </StyledButton>
    </Container>
  );
}
