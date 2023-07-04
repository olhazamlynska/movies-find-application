import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const LinkNav = styled(Link)`
  width: 100%;
  padding: ${p => p.theme.space[3]}px;
  color: inherit;
  transition-property: color;
  transition-duration: 250ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    cursor: pointer;
    color: ${p => p.theme.colors.accentColor};
  }
`;
