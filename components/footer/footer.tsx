'use client';

import { useTranslations } from 'next-intl';
import { Github, Linkedin, Mail } from 'lucide-react';

import { Links } from '@/constants';

import {
  Container,
  Text,
  Separator,
  SocialLinks,
  SocialLink,
  Quote,
  ExternalLink,
  Copyright,
} from './footer.styled';

export default function Footer() {
  const t = useTranslations('components.footer');

  return (
    <Container>
      <Text>
        <Copyright>
          {t.rich('copyright', {
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
        </Copyright>
        <Separator>
          {' - '}
        </Separator>
        <Quote>{t('quote')}</Quote>
      </Text>
      <SocialLinks>
        <SocialLink href={Links.GitHub}>
          <Github size={16} />
        </SocialLink>
        <SocialLink href={Links.LinkedIn}>
          <Linkedin size={16} />
        </SocialLink>
        <SocialLink href={Links.Email}>
          <Mail size={16} />
        </SocialLink>
      </SocialLinks>
    </Container>
  );
}
