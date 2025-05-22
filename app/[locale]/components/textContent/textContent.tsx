'use client';

import { useTranslations } from 'next-intl';

import { Links } from '@/constants';

import {
  Container,
  Title,
  Highlight,
  Text,
  ExternalLink,
  Bold,
} from './textContent.styled';

export default function TextContent() {
  const t = useTranslations('homePage');

  return (
    <Container>
      <Title>
        {t.rich('title', {
          highlight: (chunks) => <Highlight>{chunks}</Highlight>,
        })}
      </Title>
      <Text>
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
      </Text>
    </Container>
  );
}
