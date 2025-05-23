import styled from 'styled-components';

import { Color, ItemStyles } from '@/styles';
import { Text } from '@/components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const Item = styled.article`
  ${ItemStyles}
`;

export const Description = styled(Text)`
  margin-top: 1.5rem;
  color: ${Color.Foreground};
`;
