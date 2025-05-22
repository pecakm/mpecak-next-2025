import Link from 'next/link';
import styled from 'styled-components';

import { Breakpoint, Color } from '@/styles';

export const Container = styled.header`
  position: sticky;
  top: 0;
  z-index: 100;
  padding: 1.25rem 1rem;
  border-bottom: 1px solid ${Color.Border};
  background: rgba(2, 8, 23, 0.6);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);

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
