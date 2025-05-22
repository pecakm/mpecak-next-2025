const duration = 8;
const repeat = Number.POSITIVE_INFINITY;
const backgroundGradients = [
  'radial-gradient(circle, rgba(144, 202, 249, 0.1) 0%, rgba(66, 73, 88, 0.1) 100%)',
  'radial-gradient(circle, rgba(144, 202, 249, 0.15) 0%, rgba(66, 73, 88, 0.15) 100%)',
  'radial-gradient(circle, rgba(144, 202, 249, 0.1) 0%, rgba(66, 73, 88, 0.1) 100%)',
];

export const backgroundAnim = {
  background: backgroundGradients,
};

export const circle1Anim = {
  r: ['30%', '32%', '30%'],
  strokeOpacity: [0.2, 0.3, 0.2],
};

export const circle2Anim = {
  r: ['40%', '42%', '40%'],
  strokeOpacity: [0.15, 0.25, 0.15],
};

export const baseTransition = {
  duration,
  repeat,
  repeatType: 'reverse' as const,
};
