'use client';

import { useParams } from 'next/navigation';
import { useTranslations } from 'next-intl';

import { MenuItems } from '@/constants';
import { usePathname } from '@/i18n';

import { Container, List, Item, Link } from './desktopMenu.styled';

export default function DesktopMenu() {
  const t = useTranslations('components.menu');
  const pathname = usePathname();
  const { locale } = useParams();

  return (
    <Container>
      <List>
        {MenuItems.map((item) => (
          <Item key={item.labelKey}>
            <Link href={`/${locale}${item.href}`} $active={pathname === item.href}>
              {t(item.labelKey)}
            </Link>
          </Item>
        ))}
      </List>
    </Container>
  );
}
