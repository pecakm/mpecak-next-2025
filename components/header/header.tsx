'use client';

import { useTranslations } from 'next-intl';

import { Path } from '@/enums';
import { LanguageButton, MobileMenu, DesktopMenu } from '@/components';

import { Container, Title, Highlight, RightSection } from './header.styled';

export default function Header() {
  const t = useTranslations('components.header');

  return (
    <Container>
      <Title href={Path.Home}>
        {t.rich('title', {
          highlight: (chunks) => <Highlight>{chunks}</Highlight>
        })}
      </Title>
      <DesktopMenu />
      <RightSection>
        <LanguageButton />
        <MobileMenu />
      </RightSection>
    </Container>
  );
}
