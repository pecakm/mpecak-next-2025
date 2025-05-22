import Link from 'next/link';
import styled from 'styled-components';

import { Breakpoint, Color } from '@/styles';

export const Container = styled.header`
  padding: 1.25rem 1rem;
  border-bottom: 1px solid ${Color.Border};

  ${Breakpoint.Desktop} {
    padding: 1.25rem 2rem;
  }
`;

export const Title = styled(Link)`
  color: ${Color.Foreground};
  text-decoration: none;
  font-weight: 700;
  font-size: 1.25rem;
`;

export const Highlight = styled.span`
  color: ${Color.Primary};
`;
