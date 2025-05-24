import styled from 'styled-components';

import { Color } from '@/styles';

export const Skill = styled.li`
  display: block;
  background-color: ${Color.Primary};
  padding: 0.25rem 0.625rem;
  border-radius: 100px;
  color: ${Color.PrimaryForeground};
  font-size: 12px;
  font-weight: 600;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: ${Color.PrimaryHover};
  }
`;
