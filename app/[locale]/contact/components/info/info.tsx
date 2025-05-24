'use client';

import { ArticleTitle } from '@/components';

import InfoItem from '../infoItem/infoItem';

import { Container, Content, Text, Items } from './info.styled';
import { Props } from './info.types';

export default function Info({ title, text, items }: Props) {
  return (
    <Container>
      <Content>
        <ArticleTitle>{title}</ArticleTitle>
        <Text>{text}</Text>
      </Content>
      <Items>
        {items.map((item) => (
          <InfoItem key={item.label} data={item} />
        ))}
      </Items>
    </Container>
  );
}
