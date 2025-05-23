'use client';

import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { ArrowRight, FileText } from 'lucide-react';

import { Path } from '@/enums';
import { PrimaryButton, SecondaryButton } from '@/components';

import { Container } from './buttons.styled';
import { Props } from './buttons.types';

export default function Buttons({ className }: Props) {
  const t = useTranslations('homePage.buttons');

  return (
    <Container className={className}>
      <Link href={Path.Contact}>
        <PrimaryButton>
          {t('contact')}
          <ArrowRight size={16} />
        </PrimaryButton>
      </Link>
      <Link href={Path.CV}>
        <SecondaryButton>
          <FileText size={16} />
          {t('cv')}
        </SecondaryButton>
      </Link>
    </Container>
  );
}
