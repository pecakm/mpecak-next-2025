import { ReactNode } from 'react';

export type InfoData = {
  icon: ReactNode;
  label: string;
  value: string;
  activeLink?: boolean;
};
