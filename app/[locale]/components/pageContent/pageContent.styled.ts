import styled from 'styled-components';

import { Breakpoint, ContainerStyles } from '@/styles';

export const Container = styled.main`
  display: flex;
  flex-direction: column;
`;

export const Content = styled.div`
  ${ContainerStyles}
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding-top: 3rem;
  padding-bottom: 3rem;
  
  ${Breakpoint.Tablet} {
    flex-direction: row-reverse;
    align-items: center;
  }

  ${Breakpoint.Desktop} {
    padding-top: 6rem;
    padding-bottom: 6rem;
  }
`;
