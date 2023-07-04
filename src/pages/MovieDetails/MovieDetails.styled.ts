import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const List = styled.ul`
  margin-left: ${p => p.theme.space[4]}px;
`;
export const Item = styled.li`
  margin-bottom: ${p => p.theme.space[2]}px;
`;
export const LinkNav = styled(Link)`
  font-size: ${p => p.theme.fontSizes.l};
  font-weight: ${p => p.theme.fontWeights.medium};
  margin-right: ${p => p.theme.space[4]}px;
  color: ${p => p.theme.colors.black};
  transition-property: color;
  transition-duration: 250ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    cursor: pointer;

    color: ${p => p.theme.colors.accentColor};
  }
`;
export const BackBtn = styled.button`
  font-size: ${p => p.theme.fontSizes.l};

  border: ${p => p.theme.borders.none};
  border-radius: ${p => p.theme.radii.normal};
  color: ${p => p.theme.colors.white};
  background-color: ${p => p.theme.colors.accentColor};
  transition-property: box-shadow, transform;
  transition-duration: 250ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    cursor: pointer;
    transform: scale(1.03);
    box-shadow: 2px 2px 12px 2px ${p => p.theme.colors.accentColor};
  }
`;
