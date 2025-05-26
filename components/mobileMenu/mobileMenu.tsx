'use client';

import { useState } from 'react';
import { X, Menu } from 'lucide-react';
import { useTranslations } from 'next-intl';

import { usePathname, useLocalePath } from '@/i18n';
import { MenuItems } from '@/constants';

import { HeaderButton } from '../common.styled';

import { Container, Drawer, CloseButton, List, ListItem, Link } from './mobileMenu.styled';

export default function MobileMenu() {
  const t = useTranslations('components.menu');
  const pathname = usePathname();
  const localePath = useLocalePath();
  const [open, setOpen] = useState(false);

  const onClose = () => {
    setOpen(false);
  };

  return (
    <Container>
      <HeaderButton onClick={() => setOpen(true)}>
        <Menu size={16} />
      </HeaderButton>
      <Drawer open={open} onClose={onClose} anchor="right">
        <CloseButton onClick={onClose}>
          <X size={16} />
        </CloseButton>
        <List>
          {MenuItems.map((item) => (
            <ListItem key={item.labelKey}>
              <Link
                href={localePath(item.href)}
                $active={pathname === item.href}
                onClick={onClose}
              >
                {t(item.labelKey)}
              </Link>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </Container>
  );
}
