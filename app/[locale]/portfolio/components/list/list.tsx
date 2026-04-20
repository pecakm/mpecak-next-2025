'use client';

import Item from '../item/item';

import { listData } from './list.data';
import { Container } from './list.styled';

export default function List() {
  return (
    <Container>
      {listData.map((item) => (
        <Item
          key={item.titleKey}
          titleKey={item.titleKey}
          descriptionKey={item.descriptionKey}
          tags={item.tags}
          image={item.image}
          link={item.link}
          github={item.github}
        />
      ))}
    </Container>
  );
}
