'use client';

import TextContent from '../textContent/textContent';
import ProfileImage from '../profileImage/profileImage';

import { Container } from './pageContent.styled';

export default function PageContent() {
  return (
    <Container>
      <ProfileImage />
      <TextContent />
    </Container>
  );
}
