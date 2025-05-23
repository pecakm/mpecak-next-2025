'use client';

import { useTranslations } from 'next-intl';

import { MenuItems } from '@/constants';
import { usePathname } from '@/i18n';

import { Container, List, Item, Link } from './desktopMenu.styled';

export default function DesktopMenu() {
  const t = useTranslations('components.menu');
  const pathname = usePathname();

  return (
    <Container>
      <List>
        {MenuItems.map((item) => (
          <Item key={item.labelKey}>
            <Link href={item.href} $active={pathname === item.href}>
              {t(item.labelKey)}
            </Link>
          </Item>
        ))}
      </List>
    </Container>
  );
}
