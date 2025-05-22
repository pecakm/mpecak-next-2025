'use client';

import { Container, Bg, Svg, Circle1, Circle2 } from './bgAnim.styled';
import {
  backgroundAnim,
  circle1Anim,
  circle2Anim,
  baseTransition,
} from './bgAnim.settings';

export default function BgAnim() {
  return (
    <Container>
      <Bg
        animate={backgroundAnim}
        transition={baseTransition}
      />
      <Svg>
        <Circle1
          cx="50%"
          cy="50%"
          r="30%"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.5"
          strokeOpacity="0.2"
          animate={circle1Anim}
          transition={baseTransition}
        />
        <Circle2
          cx="50%"
          cy="50%"
          r="40%"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.5"
          strokeOpacity="0.15"
          animate={circle2Anim}
          transition={{
            ...baseTransition,
            delay: 1,
          }}
        />
      </Svg>
    </Container>
  );
}
