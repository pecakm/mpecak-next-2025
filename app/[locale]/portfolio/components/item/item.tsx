'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { ExternalLink, Github } from 'lucide-react';

import { ArticleTitle, SocialLink } from '@/components';

import { Props } from './item.types';
import {
  Container,
  ImageWrapper,
  Content,
  StyledLink,
  StyledTextSmall,
  Tags,
  Tag,
  ExternalLinks,
} from './item.styled';

export default function Item({ titleKey, descriptionKey, image, tags, link, github }: Props) {
  const t = useTranslations('portfolioPage.item');

  return (
    <Container>
      <ImageWrapper href={link} target="_blank" rel="noopener noreferrer">
        <Image src={image} alt={t(titleKey)} width={800} height={454} />
      </ImageWrapper>
      <Content>
        <StyledLink href={link} target="_blank" rel="noopener noreferrer">
          <ArticleTitle>{t(titleKey)}</ArticleTitle>
        </StyledLink>
        <StyledTextSmall>
          {t(descriptionKey)}
        </StyledTextSmall>
        <Tags>
          {tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </Tags>
        <ExternalLinks>
          <SocialLink href={link} target="_blank" rel="noopener noreferrer">
            <ExternalLink size={16} />
          </SocialLink>
          <SocialLink href={github} target="_blank" rel="noopener noreferrer">
            <Github size={16} />
          </SocialLink>
        </ExternalLinks>
      </Content>
    </Container>
  );
}
