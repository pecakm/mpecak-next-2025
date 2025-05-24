'use client';

import { useTranslations } from 'next-intl';

import { ExternalLink, Text } from '@/components';

import { Container, Icon, Content, Label } from './infoItem.styled';
import { Props } from './infoItem.types';
import { stripProtocol } from './infoItem.utils';
export default function InfoItem({ data }: Props) {
  const t = useTranslations('contactPage.infoItem');

  return (
    <Container>
      <Icon>{data.icon}</Icon>
      <Content>
        <Label>{t(data.label)}</Label>
        {data.activeLink ? (
          <ExternalLink href={data.value}>{stripProtocol(data.value)}</ExternalLink>
        ) : (
          <Text>{data.value}</Text>
        )}
      </Content>
    </Container>
  );
}
