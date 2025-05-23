'use client';

import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { ArrowRight } from 'lucide-react';

import { Links } from '@/constants';
import { ExternalLink, PageTitle, PrimaryButton, SecondaryButton } from '@/components';
import { Path } from '@/enums';

import { Container, Highlight, StyledText, Bold, Buttons } from './textContent.styled';

export default function TextContent() {
  const t = useTranslations('homePage.textContent');

  return (
    <Container>
      <PageTitle>
        {t.rich('title', {
          highlight: (chunks) => <Highlight>{chunks}</Highlight>,
        })}
      </PageTitle>
      <StyledText>
        {t.rich('text', {
          bold: (chunks) => <Bold>{chunks}</Bold>,
          linkedin: (chunks) => (
            <ExternalLink
              href={Links.LinkedIn}
              target="_blank"
              rel="noopener noreferrer"
            >
              {chunks}
            </ExternalLink>
          ),
          itpulse: (chunks) => (
            <ExternalLink
              href={Links.ITPulse}
              target="_blank"
              rel="noopener noreferrer"
            >
              {chunks}
            </ExternalLink>
          ),
        })}
      </StyledText>
      <Buttons>
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
      </Buttons>
    </Container>
  );
}
