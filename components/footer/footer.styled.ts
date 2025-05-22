import styled from 'styled-components';

import { ContainerWidth, Breakpoint, Color } from '@/styles';

export const Container = styled.footer`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: ${ContainerWidth};
  padding: 1.5rem 1rem;
  margin: 0 auto;

  ${Breakpoint.Tablet} {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  ${Breakpoint.Desktop} {
    padding: 3rem 2rem;
  }
`;

export const Text = styled.p`
  text-align: center;
  display: flex;
  flex-direction: column;
  color: ${Color.MutedForeground};
  font-size: 0.875rem;

  ${Breakpoint.Mobile} {
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
  }
`;

export const Copyright = styled.span`
  display: block;

  ${Breakpoint.Mobile} {
    display: inline;
  }
`;

export const Separator = styled.span`
  display: none;

  ${Breakpoint.Mobile} {
    display: inline;
  }
`;

export const Quote = styled.q`
  display: block;
  
  &::before,
  &::after {
    color: ${Color.Foreground};
  }

  ${Breakpoint.Mobile} {
    display: inline;
  }
`;

export const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: center;
`;

export const SocialLink = styled.a`
  color: ${Color.Foreground};
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  height: 2.5rem;
`;

export const ExternalLink = styled.a`
  color: ${Color.Primary};
  font-weight: 700;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;
