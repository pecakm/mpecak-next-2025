'use client';

import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { ArrowRight } from 'lucide-react';

import { Path } from '@/enums';
import { PrimaryButton, SecondaryButton } from '@/components';

import { Container } from './buttons.styled';

export default function Buttons() {
  const t = useTranslations('homePage.buttons');

  return (
    <Container>
      <Link href={Path.Contact}>
        <PrimaryButton>
          {t('contact')}
          <ArrowRight size={16} />
        </PrimaryButton>
      </Link>
      <Link href={Path.CV}>
        <SecondaryButton>
          {t('cv')}
        </SecondaryButton>
      </Link>
    </Container>
  );
}
