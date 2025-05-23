'use client';

import { useLocale } from 'next-intl';

import { useRouter, usePathname } from '@/i18n';
import { CountryCode } from '@/enums';

import { HeaderButton } from '../common.styled';

export default function LanguageButton() {
  const router = useRouter();
  const pathname = usePathname();
  const currentLocale = useLocale();
  const nextLocale = currentLocale === CountryCode.PL ? CountryCode.EN : CountryCode.PL;

  const handleClick = () => {
    router.replace(pathname, { locale: nextLocale });
  };

  return (
    <HeaderButton onClick={handleClick}>
      {currentLocale === CountryCode.PL ? '🇵🇱' : '🇬🇧'}
    </HeaderButton>
  );
}
