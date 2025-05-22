import styled from 'styled-components';

import { Breakpoint } from '@/styles';

export const Container = styled.main`
  padding: 3rem 1rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  max-width: 1240px;
  margin: 0 auto;

  ${Breakpoint.Tablet} {
    flex-direction: row-reverse;
    align-items: center;
  }

  ${Breakpoint.Desktop} {
    padding: 6rem 1.5rem;
  }
`;
