import styled from 'styled-components';

import { Breakpoint } from '@/styles';

export const Container = styled.ul`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 1rem;
  list-style: none;

  ${Breakpoint.Tablet} {
    grid-template-columns: repeat(2, 1fr);
  }

  ${Breakpoint.Desktop} {
    grid-template-columns: repeat(3, 1fr);
  }
`;
