import styled from 'styled-components';

import { Breakpoint, ItemStyles } from '@/styles';

export const Container = styled.ul`
  ${ItemStyles}
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;

  ${Breakpoint.Tablet} {
    width: calc(50% - 0.5rem);
  }
`;
