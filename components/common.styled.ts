'use client';

import styled, { css } from 'styled-components';
import { Button } from '@mui/material';

import { Breakpoint, Color } from '@/styles';

export const PageTitle = styled.h1`
  font-size: 2rem;
  font-weight: 700;

  ${Breakpoint.Desktop} {
    font-size: 3rem;
  }
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

const iconButtonStyles = css`
  border-radius: calc(0.5rem - 2px);
  color: ${Color.Foreground};
  width: 2.5rem;
  height: 2.5rem;
  min-width: 0;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: ${Color.Border};
  }
`;

export const HeaderButton = styled(Button)`
  && {
    border: 1px solid ${Color.Border};
    background-color: ${Color.Background};
    ${iconButtonStyles}
  }
`;

export const SocialLink = styled.a`
  ${iconButtonStyles}
`;

const buttonStyles = css`
  height: 2.5rem;
  padding: 0 1rem;
  font-size: 14px;
  font-weight: 500;
  border-radius: 0.25rem;
  gap: 1rem;
  text-transform: none;
`;

export const PrimaryButton = styled(Button)`
  && {
    ${buttonStyles}
    background-color: ${Color.Primary};
    color: ${Color.PrimaryForeground};

    &:hover {
      background-color: ${Color.PrimaryHover};
    }
  }
`;

export const SecondaryButton = styled(Button)`
  && {
    ${buttonStyles}
    background-color: ${Color.Background};
    color: ${Color.Foreground};
    border: 1px solid ${Color.Border};

    &:hover {
      background-color: ${Color.Border};
    }
  }
`;
