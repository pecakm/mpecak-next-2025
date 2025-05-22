'use client';

import { Container, Bg, Svg, Circle1, Circle2 } from './bgAnim.styled';

export default function BgAnim() {
  return (
    <Container>
      <Bg
        animate={{
          background: [
            'radial-gradient(circle, rgba(144, 202, 249, 0.1) 0%, rgba(66, 73, 88, 0.1) 100%)',
            'radial-gradient(circle, rgba(144, 202, 249, 0.15) 0%, rgba(66, 73, 88, 0.15) 100%)',
            'radial-gradient(circle, rgba(144, 202, 249, 0.1) 0%, rgba(66, 73, 88, 0.1) 100%)',
          ],
        }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: 'reverse',
        }}
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
          animate={{
            r: ['30%', '32%', '30%'],
            strokeOpacity: [0.2, 0.3, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: 'reverse',
          }}
        />
        <Circle2
          cx="50%"
          cy="50%"
          r="40%"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.5"
          strokeOpacity="0.15"
          animate={{
            r: ['40%', '42%', '40%'],
            strokeOpacity: [0.15, 0.25, 0.15],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: 'reverse',
            delay: 1,
          }}
        />
      </Svg>
    </Container>
  );
}
