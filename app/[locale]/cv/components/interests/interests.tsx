'use client';

import { Skill } from '../../page.styled';

import { interestsData } from './interests.data';
import { Container } from './interests.styled';

export default function Interests() {
  return (
    <Container>
      {interestsData.map((interest) => (
        <Skill key={interest}>{interest}</Skill>
      ))}
    </Container>
  );
}
