import styled from 'styled-components';

import { ContainerStyles, Breakpoint } from '@/styles';

export const Container = styled.main`
  ${ContainerStyles}
  padding-top: 3rem;
  padding-bottom: 3rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  ${Breakpoint.Desktop} {
    padding-top: 6rem;
    padding-bottom: 6rem;
  }
`;

export const Header = styled.section`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;
