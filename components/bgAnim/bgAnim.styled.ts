import styled from 'styled-components';
import { motion } from 'framer-motion';

import { Breakpoint } from '@/styles';

export const Container = styled.div`
  position: fixed;
  inset: -100px;
  z-index: -10;
  overflow: hidden;

  ${Breakpoint.Mobile} {
    inset: -50px;
  }

  ${Breakpoint.Tablet} {
    inset: 0;
  }
`;

export const Bg = styled(motion.div)`
  position: absolute;
  inset: 0;
`;

export const Svg = styled.svg`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
`;

export const Circle1 = styled(motion.circle)``;

export const Circle2 = styled(motion.circle)``;
