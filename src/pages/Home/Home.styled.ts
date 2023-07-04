import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 16px;
`;

export const Title = styled.h2`
  text-align: center;
`;

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 30px;
  margin-top: ${p => p.theme.space[4]}px;
`;

export const Item = styled.li`
  width: 275px;
  height: 425px;
  border-radius: ${p => p.theme.radii.normal};
  transition-property: box-shadow, transform;
  transition-duration: 250ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  overflow: hidden;
  &:hover,
  &:focus {
    cursor: pointer;
    transform: scale(1.03);
    box-shadow: 2px 2px 12px 2px ${p => p.theme.colors.accentColor};
  }
`;

export const Poster = styled.img`
  width: 100%;
  height: 398px;
  object-fit: cover;
`;

export const LinkNav = styled(Link)`
  width: 100%;
  text-decoration: none;
  color: inherit;
  font-size: ${p => p.theme.fontSizes.m};
  font-weight: ${p => p.theme.fontWeights.medium};
`;

export const Name = styled.p`
  padding-left: ${p => p.theme.space[3]}px;
`;
