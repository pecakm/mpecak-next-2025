'use client';

import styled from 'styled-components';
import { Button } from '@mui/material';

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

export const HeaderButton = styled(Button)`
  && {
    border: 1px solid ${Color.Border};
    background-color: ${Color.Background};
    border-radius: calc(0.5rem - 2px);
    color: ${Color.Foreground};
    width: 2.5rem;
    height: 2.5rem;
    min-width: 0;
    font-size: 16px;

    &:hover {
      background-color: ${Color.Border};
    }
  }
`;
