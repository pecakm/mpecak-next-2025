'use client';

import { useTranslations } from 'next-intl';
import { ArrowRight } from 'lucide-react';

import { useLocalePath } from '@/i18n';
import { Path } from '@/enums';
import { PrimaryButton } from '@/components';

import Experience from '../experience/experience';
import Skills from '../skills/skills';
import Languages from '../languages/languages';
import Education from '../education/education';
import Activities from '../activities/activities';
import Interests from '../interests/interests';
import Section from '../section/section';
import Header from '../header/header';

import { Container, StyledLink } from './pageContent.styled';

export default function PageContent() {
  const t = useTranslations('cvPage.pageContent');
  const localePath = useLocalePath();

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
      <StyledLink href={localePath(Path.Contact)}>
        <PrimaryButton>
          {t('contact')}
          <ArrowRight size={16} />
        </PrimaryButton>
      </StyledLink>
    </Container>
  );
}
