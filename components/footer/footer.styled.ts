import styled from 'styled-components';

import { Breakpoint, Color, ContainerStyles } from '@/styles';

import { TextSmall } from '../common.styled';

export const Container = styled.footer`
  ${ContainerStyles}
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
  margin-top: auto;
  border-top: 1px solid ${Color.Border};

  ${Breakpoint.Tablet} {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  ${Breakpoint.Desktop} {
    padding-top: 3rem;
    padding-bottom: 3rem;
  }
`;

export const Text = styled(TextSmall)`
  text-align: center;
  display: flex;
  flex-direction: column;

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
