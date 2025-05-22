'use client';

import TextContent from '../textContent/textContent';
import ProfileImage from '../profileImage/profileImage';
import Work from '../work/work';

import { Container, Content } from './pageContent.styled';

export default function PageContent() {
  return (
    <Container>
      <Content>
        <ProfileImage />
        <TextContent />
      </Content>
      <Work />
    </Container>
  );
}
