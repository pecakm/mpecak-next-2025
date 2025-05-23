'use client';

import { useTranslations } from 'next-intl';

import { Path } from '@/enums';

import { Container, List, Item, Link } from './desktopMenu.styled';

export default function DesktopMenu() {
  const t = useTranslations('components.menu');

  return (
    <Container>
      <List>
        <Item>
          <Link href={Path.Home}>
            {t('about')}
          </Link>
        </Item>
        <Item>
          <Link href={Path.CV}>
            {t('cv')}
          </Link>
        </Item>
        <Item>
          <Link href={Path.Contact}>
            {t('contact')}
          </Link>
        </Item>
      </List>
    </Container>
  );
}
