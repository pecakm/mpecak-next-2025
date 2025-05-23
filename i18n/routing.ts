import { defineRouting } from 'next-intl/routing';

import { CountryCode } from '@/enums';
 
export const routing = defineRouting({
  locales: [CountryCode.PL, CountryCode.EN],
  defaultLocale: CountryCode.PL,
});
