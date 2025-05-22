import styled from 'styled-components';

import { Breakpoint, ContainerWidth } from '@/styles';

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 3rem 1rem;
  max-width: ${ContainerWidth};
  margin: 0 auto;

  ${Breakpoint.Tablet} {
    flex-direction: row-reverse;
    align-items: center;
  }

  ${Breakpoint.Desktop} {
    padding: 6rem 2rem;
  }
`;
