import styled from 'styled-components';

import { Breakpoint, ItemStyles } from '@/styles';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  ${Breakpoint.Tablet} {
    flex-direction: row;
    gap: 1rem;
  }
`;

export const Item = styled.article`
  ${ItemStyles}
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  flex: 1;
`;
