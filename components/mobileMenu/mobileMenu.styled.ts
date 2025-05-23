import LinkNext from 'next/link';
import styled, { css } from 'styled-components';
import { Drawer as DrawerMUI, Button } from '@mui/material';

import { Breakpoint, Color } from '@/styles';

import { LinkProps } from './mobileMenu.types';

export const Container = styled.nav`
  ${Breakpoint.Tablet} {
    display: none;
  }
`;

export const Drawer = styled(DrawerMUI)`
  .MuiDrawer-paper {
    background-color: ${Color.Background};
    padding: 3.5rem 1.5rem;
    border-left: 1px solid ${Color.Border};
    width: 75%;
    max-width: 24rem;
  }
`;

export const CloseButton = styled(Button)`
  && {
    color: ${Color.MutedForeground};
    width: 2.5rem;
    height: 2.5rem;
    min-width: 0;
    position: absolute;
    top: 0.5rem;
    right: 0.5rem;
    transition: color 0.2s ease-in-out;

    &:hover {
      color: ${Color.Foreground};
    }
  }
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const ListItem = styled.li`
  display: flex;
`;

export const Link = styled(LinkNext)<LinkProps>`
  color: ${Color.MutedForeground};
  font-size: 1.25rem;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.2s ease-in-out;
  width: 100%;

  &:hover {
    color: ${Color.Primary};
  }

  ${({ $active }) => $active && css`
    color: ${Color.Primary};
  `}
`;
