import styled from 'styled-components';

import { ContainerStyles, Breakpoint } from '@/styles';
import { Text as TextBase } from '@/components';

export const Container = styled.main`
  ${ContainerStyles}
  padding-top: 3rem;
  padding-bottom: 3rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const Content = styled.div``;

export const Title = styled.h1``;

export const Text = styled(TextBase)`
  margin-top: 0.5rem;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  ${Breakpoint.Tablet} {
    flex-direction: row;
  }
`;
