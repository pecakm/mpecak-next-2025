import styled from 'styled-components';

import { TextSmall } from '@/components';
import { Color, ItemStyles } from '@/styles';

export const Container = styled.li`
  ${ItemStyles}
  padding: 0;
  overflow: hidden;
`;

export const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 319 / 181;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 100%;
    height: auto;
    object-fit: contain;
    object-position: center;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
`;

export const StyledTextSmall = styled(TextSmall)`
  margin-top: 0.5rem;
`;

export const Tags = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
`;

export const Tag = styled.li`
  display: block;
  background-color: ${Color.Border};
  padding: 0.25rem 0.625rem;
  border-radius: 100px;
  font-size: 12px;
  font-weight: 600;
`;

export const ExternalLinks = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 0.5rem;
`;
