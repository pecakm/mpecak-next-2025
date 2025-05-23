import styled from 'styled-components';

import { ItemStyles } from '@/styles';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const Item = styled.article`
  ${ItemStyles}
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;
