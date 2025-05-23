import styled from 'styled-components';

import { Color, Breakpoint } from '@/styles';
import { Text } from '@/components';

export const Container = styled.section`
  ${Breakpoint.Tablet} {
    width: 600px;
  }
`;

export const Highlight = styled.span`
  color: ${Color.Primary};
`;

export const StyledText = styled(Text)`
  margin-top: 1rem;
`;

export const Bold = styled.span`
  font-weight: 700;
  color: ${Color.Foreground};
`;

export const Buttons = styled.div`
  margin-top: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;
