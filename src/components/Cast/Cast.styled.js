import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 20px;
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
    box-shadow: 1px 1px 10px 1px ${p => p.theme.colors.accentColor};
  }
`;

export const Poster = styled.img`
  width: 100%;
  height: 398px;
  object-fit: cover;
`;
export const Name = styled.p`
  padding-left: ${p => p.theme.space[3]}px; ;
`;
