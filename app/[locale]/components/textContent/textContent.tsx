'use client';

import { useTranslations } from 'next-intl';

import { Links } from '@/constants';
import { ExternalLink, PageTitle } from '@/components';

import {
  Container,
  Highlight,
  StyledText,
  Bold,
  StyledButtons,
  StyledSocialLinks,
} from './textContent.styled';

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
      <StyledButtons />
      <StyledSocialLinks />
    </Container>
  );
}
