import styled from 'styled-components';

import { Breakpoint } from '@/styles';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  ${Breakpoint.Tablet} {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;
