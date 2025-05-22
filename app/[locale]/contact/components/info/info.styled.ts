import styled from 'styled-components';

import { TextSmall } from '@/components';
import { Color } from '@/styles';

export const Container = styled.article`
  flex: 1;
  background-color: ${Color.Background};
  padding: 1.5rem;
  border-radius: 0.5rem;
  border: 1px solid ${Color.Border};
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
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
