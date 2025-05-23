'use client';

import Profile from './assets/mikolaj-pecak.jpg';
import { Container, Image } from './profileImage.styled';

export default function ProfileImage() {
  return (
    <Container>
      <Image
        src={Profile}
        alt="Mikołaj Pęcak"
        priority
        width={400}
        height={400}
      />
    </Container>
  );
}
