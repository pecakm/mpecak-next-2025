import styled from 'styled-components';

import { TextSmall } from '@/components';
import { ItemStyles } from '@/styles';

export const Container = styled.article`
  ${ItemStyles}
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const Content = styled.div``;

export const Text = styled(TextSmall)`
  margin-top: 0.375rem;
`;

export const Items = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
