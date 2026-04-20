import Link from 'next/link';
import styled from 'styled-components';

import { Text as TextBase } from '@/components';
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

export const Content = styled.div``;

export const Text = styled(TextBase)`
  margin-top: 0.5rem;
`;

export const StyledLink = styled(Link)`
  margin-top: 2rem;
  margin-left: auto;
  margin-right: auto;
`;
