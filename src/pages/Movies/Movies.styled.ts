import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Input = styled.input`
  height: 30px;
  margin-right: ${p => p.theme.space[4]}px;
  border: 1px solid ${p => p.theme.colors.accentColor};
  border-radius: ${p => p.theme.radii.normal};
  background-color: transparent;
`;

export const Btn = styled.button`
  width: 150px;
  height: 30px;
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
