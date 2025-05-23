import LinkNext from 'next/link';
import styled, { css } from 'styled-components';

import { Breakpoint, Color } from '@/styles';

import { LinkProps } from './desktopMenu.types';

export const Container = styled.nav`
  display: none;

  ${Breakpoint.Tablet} {
    display: block;
  }
`;

export const List = styled.ul`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  position: relative;
  left: -2.5rem;
`;

export const Item = styled.li`
  display: block;
`;

export const Link = styled(LinkNext)<LinkProps>`
  display: block;
  color: ${Color.Foreground};
  background-color: ${Color.Background};
  padding: 0.75rem 1rem;
  border-radius: 0.25rem;
  font-size: 14px;
  text-decoration: none;
  font-weight: 500;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: ${Color.Border};
  }

  ${({ $active }) => $active && css`
    background-color: ${Color.Border};
  `}
`;
