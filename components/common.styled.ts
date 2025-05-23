'use client';

import styled from 'styled-components';

import { Color } from '@/styles';

export const PageTitle = styled.h1`
  font-size: 2rem;
  font-weight: 700;
`;

export const SectionTitle = styled.h2`
  font-size: 2rem;
  font-weight: 700;
`;

export const ArticleTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
`;

export const Text = styled.p`
  color: ${Color.MutedForeground};
  line-height: 1.5;
`;

export const TextSmall = styled(Text)`
  font-size: 0.875rem;
`;

export const ExternalLink = styled.a`
  color: ${Color.Primary};
  text-decoration: none;
  font-weight: 700;

  &:hover {
    text-decoration: underline;
  }
`;

export const NoWrap = styled.span`
  white-space: nowrap;
`;
