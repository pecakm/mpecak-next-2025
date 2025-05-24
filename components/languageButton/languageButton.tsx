'use client';

import { useLocale } from 'next-intl';
import { useParams, useRouter, usePathname } from 'next/navigation';

// import { useRouter, usePathname } from '@/i18n';
import { CountryCode } from '@/enums';

import { HeaderButton } from '../common.styled';

export default function LanguageButton() {
  const router = useRouter();
  const pathname = usePathname();
  const currentLocale = useLocale();
  const { locale } = useParams();
  console.log(currentLocale, locale);
  const nextLocale = locale === CountryCode.PL ? CountryCode.EN : CountryCode.PL;
  const nextPathname = pathname.replace(`/${locale}`, `/${nextLocale}`);

  const handleClick = () => {
    router.replace(nextPathname);
    // router.replace(pathname, { locale: nextLocale });
  };

  return (
    <HeaderButton onClick={handleClick}>
      {locale === CountryCode.PL ? '🇵🇱' : '🇬🇧'}
    </HeaderButton>
  );
}
