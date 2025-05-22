import styled from 'styled-components';

import { Text } from '@/components';
import { Color } from '@/styles';

export const Container = styled.li`
  display: flex;
  gap: 1rem;
`;

export const Icon = styled.div`
  margin-top: 0.125rem;
  color: ${Color.MutedForeground};
`;

export const Content = styled.div``;

export const Label = styled(Text)`
  font-weight: 500;
  color: ${Color.Foreground};
`;
