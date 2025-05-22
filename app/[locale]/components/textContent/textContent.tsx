'use client';

import { useTranslations } from 'next-intl';

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
              href="https://pl.linkedin.com/in/mikołaj-pęcak-1649a612b"
              target="_blank"
              rel="noopener noreferrer"
            >
              {chunks}
            </ExternalLink>
          ),
          itpulse: (chunks) => (
            <ExternalLink
              href="https://itpulse.pl"
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
