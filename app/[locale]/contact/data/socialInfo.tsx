import { Github, Linkedin } from 'lucide-react';

import { Links } from '@/constants';

import { InfoData } from './data.types';

export const SocialInfo: InfoData[] = [
  {
    icon: <Github size={20} />,
    label: 'github',
    value: Links.GitHub,
    activeLink: true,
  },
  {
    icon: <Linkedin size={20} />,
    label: 'linkedin',
    value: Links.LinkedIn,
    activeLink: true,
  },
];
