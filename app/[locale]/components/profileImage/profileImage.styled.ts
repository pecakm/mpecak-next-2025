import ImageNext from 'next/image';
import styled from 'styled-components';

import { Breakpoint, Color } from '@/styles';

export const Container = styled.div`
  width: 100%;
  aspect-ratio: 1 / 1;
  max-width: 350px;
  border-radius: 50%;
  position: relative;
  overflow: hidden;
  border: 8px solid ${Color.Border};
  flex-shrink: 0;
  margin: 0 auto;

  ${Breakpoint.Desktop} {
    max-width: 400px;
  }
`;

export const Image = styled(ImageNext)`
  object-fit: cover;
  object-position: top center;
  display: block;
  width: 100%;
  height: auto;
`;
