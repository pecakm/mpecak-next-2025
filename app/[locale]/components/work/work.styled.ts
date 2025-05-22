import styled from 'styled-components';

import { Color, Breakpoint, ContainerStyles } from '@/styles';

export const Container = styled.section`
  background-color: ${Color.Border};
`;

export const Wrapper = styled.div`
  ${ContainerStyles}
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  text-align: center;
  padding-top: 3rem;
  padding-bottom: 3rem;

  ${Breakpoint.Desktop} {
    padding-top: 6rem;
    padding-bottom: 6rem;
  }
`;
