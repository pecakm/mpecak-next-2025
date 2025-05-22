import { Mail, Phone } from 'lucide-react';

import { Links } from '@/constants';

import { InfoData } from './data.types';

export const ContactInfo: InfoData[] = [
  {
    icon: <Mail size={20} />,
    label: 'email',
    value: Links.Email,
    activeLink: true,
  },
  {
    icon: <Phone size={20} />,
    label: 'phone',
    value: '+48 514 686 478',
  },
];
