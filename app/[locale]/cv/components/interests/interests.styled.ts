import styled from 'styled-components';

import { ItemStyles } from '@/styles';

export const Container = styled.ul`
  ${ItemStyles}
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;
