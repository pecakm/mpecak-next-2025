import styled from 'styled-components';

import { Color, Breakpoint } from '@/styles';

export const Container = styled.section`
  ${Breakpoint.Tablet} {
    width: 600px;
  }
`;

export const Title = styled.h1`
  color: ${Color.Foreground};
  font-size: 2rem;
`;

export const Highlight = styled.span`
  color: ${Color.Primary};
`;

export const Text = styled.p`
  color: ${Color.MutedForeground};
  margin-top: 1rem;
  line-height: 1.4;
`;

export const Bold = styled.span`
  font-weight: 700;
  color: ${Color.Foreground};
`;

export const ExternalLink = styled.a`
  color: ${Color.Primary};
  text-decoration: none;
  font-weight: 700;

  &:hover {
    text-decoration: underline;
  }
`;
