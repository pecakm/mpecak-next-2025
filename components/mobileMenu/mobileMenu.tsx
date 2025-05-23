'use client';

import { useState } from 'react';
import { X, Menu } from 'lucide-react';
import { useTranslations } from 'next-intl';

import { usePathname } from '@/i18n';
import { Path } from '@/enums';

import { HeaderButton } from '../common.styled';

import { Container, Drawer, CloseButton, List, ListItem, Link } from './mobileMenu.styled';

export default function MobileMenu() {
  const t = useTranslations('components.menu');
  const pathname = usePathname();
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
            <ListItem>
              <Link
                href={Path.Home}
                $active={pathname === Path.Home}
                onClick={onClose}
              >
                {t('about')}
              </Link>
            </ListItem>
            <ListItem>
              <Link
                href={Path.CV}
                $active={pathname === Path.CV}
                onClick={onClose}
              >
                {t('cv')}
              </Link>
            </ListItem>
            <ListItem>
              <Link
                href={Path.Contact}
                $active={pathname === Path.Contact}
                onClick={onClose}
              >
                {t('contact')}
              </Link>
            </ListItem>
        </List>
      </Drawer>
    </Container>
  );
}
