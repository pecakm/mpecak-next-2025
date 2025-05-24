import { css } from 'styled-components';

import { Breakpoint, Color, ContainerWidth } from '@/styles';

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

export const ItemStyles = css`
  background-color: ${Color.Background};
  padding: 1.5rem;
  border-radius: 0.5rem;
  border: 1px solid ${Color.Border};
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
`;
