import ImageNext from 'next/image';
import styled from 'styled-components';

import { Color } from '@/enums';

export const Container = styled.div`
  width: 350px;
  height: 350px;
  border-radius: 50%;
  position: relative;
  overflow: hidden;
  border: 8px solid ${Color.Border};
`;

export const Image = styled(ImageNext)`
  object-fit: cover;
  object-position: top center;
`;
