'use client';

import { useParams, useRouter, usePathname } from 'next/navigation';

import { CountryCode } from '@/enums';

import { HeaderButton } from '../common.styled';

export default function LanguageButton() {
  const router = useRouter();
  const pathname = usePathname();
  const { locale } = useParams();
  const nextLocale = locale === CountryCode.PL ? CountryCode.EN : CountryCode.PL;
  const nextPathname = pathname.replace(`/${locale}`, `/${nextLocale}`);

  const handleClick = () => {
    router.replace(nextPathname);
  };

  return (
    <HeaderButton onClick={handleClick}>
      {locale === CountryCode.PL ? '🇵🇱' : '🇬🇧'}
    </HeaderButton>
  );
}
