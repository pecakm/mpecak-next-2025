import styled from 'styled-components';

import { ContainerWidth, Color, Breakpoint } from '@/styles';

export const Container = styled.section`
  padding: 3rem 1rem;
  background-color: ${Color.Border};

  ${Breakpoint.Desktop} {
    padding: 6rem 2rem;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  max-width: ${ContainerWidth};
  margin: 0 auto;
  text-align: center;
`;

export const Title = styled.h2`
  font-size: 2rem;
`;

export const Text = styled.p`
  color: ${Color.MutedForeground};
`;
