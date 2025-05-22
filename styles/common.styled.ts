import { css } from 'styled-components';

import { Breakpoint, ContainerWidth } from '@/styles';

export const ContainerStyles = css`
  width: 100%;
  max-width: ${ContainerWidth};
  padding-left: 1rem;
  padding-right: 1rem;
  margin-left: auto;
  margin-right: auto;

  ${Breakpoint.Desktop} {
    padding-left: 2rem;
    padding-right: 2rem;
  }
`;
