import styled from 'styled-components';

import { Color, ItemStyles } from '@/styles';
import { Text as TextBase } from '@/components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const Item = styled.article`
  ${ItemStyles}
`;

export const Header = styled.div`
  margin-bottom: 1.5rem;
`;

export const Text = styled(TextBase)`
  color: ${Color.Foreground};
  margin-top: 0.5rem;
`;
