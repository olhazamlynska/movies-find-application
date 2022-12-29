import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 8px 0;
  margin-bottom: ${p => p.theme.space[4]}px;
  background-color: ${p => p.theme.colors.backgroundBody};

  > nav {
    display: flex;
  }
`;

export const List = styled.ul`
  display: flex;
  padding-left: 40px;
`;

export const Link = styled(NavLink)`
  padding: 8px 16px;
  border-radius: ${p => p.theme.radii.normal};
  text-decoration: none;
  color: ${p => p.theme.colors.black};
  font-weight: 500;

  &.active {
    color: ${p => p.theme.colors.white};
    background-color: ${p => p.theme.colors.accentColor};
  }
`;
