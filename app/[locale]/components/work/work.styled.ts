import styled from 'styled-components';

import { Color, Breakpoint, ContainerStyles } from '@/styles';

import Buttons from '../buttons/buttons';

export const Container = styled.section`
  background-color: ${Color.Border};
`;

export const Wrapper = styled.div`
  ${ContainerStyles}
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  text-align: center;
  padding-top: 3rem;
  padding-bottom: 3rem;

  ${Breakpoint.Desktop} {
    padding-top: 6rem;
    padding-bottom: 6rem;
  }
`;

export const StyledButtons = styled(Buttons)`
  margin-top: 1rem;
  margin-left: auto;
  margin-right: auto;
`;
