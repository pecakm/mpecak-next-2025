'use client';

import { Github, Linkedin, Mail } from 'lucide-react';

import { SocialLink } from '@/components';
import { Links } from '@/constants';

import { Container } from './socialLinks.styled';
import { Props } from './socialLinks.types';

export default function SocialLinks({ className }: Props) {
  return (
    <Container className={className}>
      <SocialLink href={Links.GitHub} target="_blank" rel="noopener noreferrer">
        <Github size={16} />
      </SocialLink>
      <SocialLink href={Links.LinkedIn} target="_blank" rel="noopener noreferrer">
        <Linkedin size={16} />
      </SocialLink>
      <SocialLink href={Links.Email} target="_blank" rel="noopener noreferrer">
        <Mail size={16} />
      </SocialLink>
    </Container>
  );
}
