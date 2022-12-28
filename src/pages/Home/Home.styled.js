import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 16px;
`;
export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;

  gap: 20px;
`;

export const Item = styled.li`
  width: 250px;
  border-radius: 5px;
  transition-property: box-shadow, transform;
  transition-duration: $transition-duration;
  transition-timing-function: $transition-animation;

  &:hover,
  &:focus {
    cursor: pointer;
    transform: scale(1.03);
    // box-shadow: 2px 2px 12px 2px rgba(0, 0, 0, 0.4);
    box-shadow: 0 0 20px -5px $color-accent;
  }
`;

export const Poster = styled.img`
  width: 100%;
  height: 398px;
  // min-height: 402px;
  object-fit: cover;
  border-radius: 5px;
`;

export const LinkNav = styled(Link)`
  text-decoration: none;
  color: inherit;
`;
